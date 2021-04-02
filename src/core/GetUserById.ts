import firebase from "firebase";

import { UserDataType } from "types/UserDataType";

class GetUserById {
  public async __invoke(_id: string): Promise<UserDataType> {
    const firestore = firebase.firestore();
    const users = firestore.collection("users");
    const request = await users.doc(_id).get();

    if (!request.exists) return null;

    const data = request.data();
    const userData = {
      _id: request.id,
      email: data.email,
      fullName: data.fullName,
      createdAt: data.createdAt,
      profileImage: data.profileImage,
    };

    return userData;
  }
}

export default GetUserById;
