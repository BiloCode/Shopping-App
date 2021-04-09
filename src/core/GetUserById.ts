import firebase from "firebase";

import { IUserModel } from "types/UserModel";

class GetUserById {
  public async __invoke(_id: string): Promise<IUserModel> {
    const firestore = firebase.firestore();
    const users = firestore.collection("users");
    const request = await users.doc(_id).get();

    if (!request.exists) return null;

    const data = request.data();
    const userData: IUserModel = {
      _id: request.id,
      email: data.email,
      fullName: data.fullName,
      createdAt: data.createdAt,
      profileImage: data.profileImage,
      authenticationType: data.authenticationType,
    };

    return userData;
  }
}

export default GetUserById;
