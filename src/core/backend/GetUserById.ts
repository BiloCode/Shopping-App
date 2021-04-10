import { IUserModel } from "types/UserModel";
import { Firestore } from "types/FirebaseTypes";

class GetUserById {
  private firestore: Firestore;

  constructor(firestore: Firestore) {
    this.firestore = firestore;
  }

  public async __invoke(userId: string) {
    const users = this.firestore.collection("users");
    const request = await users.doc(userId).get();

    if (!request.exists) return null;

    const data = request.data();
    const userData: IUserModel = {
      _id: userId,
      email: data.email,
      fullName: data.fullName,
      createdAt: data.createdAt.toDate(),
      profileImage: data.profileImage,
      authenticationType: data.authenticationType,
    };

    return userData;
  }
}

export default GetUserById;
