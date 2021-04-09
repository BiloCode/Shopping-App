import firebase from "firebase";

import { IUserAuthContext, IUserModel } from "types/UserModel";

class GetUserByEmail {
  public async __invoke(email: string): Promise<IUserAuthContext> {
    const firestore = firebase.firestore();
    const users = firestore.collection("users");
    const request = await users.where("email", "==", email).get();

    if (request.size == 1) {
      let userData: IUserAuthContext;

      request.forEach((v: firebase.firestore.QueryDocumentSnapshot) => {
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
