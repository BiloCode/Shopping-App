import firebase from "firebase";

import { UserSimpleData } from "types/UserDataType";

class GetUserByEmail {
  public async __invoke(email: string): Promise<UserSimpleData> {
    const firestore = firebase.firestore();
    const users = firestore.collection("users");
    const request = await users.where("email", "==", email).get();

    if (request.size == 1) {
      let userData: UserSimpleData;

      request.forEach((v) => {
        const data = v.data();
        userData = {
          _id: v.id,
          profileImage: data.profileImage,
        };
      });

      return userData;
    }

    return null;
  }
}

export default GetUserByEmail;
