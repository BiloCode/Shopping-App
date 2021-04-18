import { Firestore } from "types/FirebaseTypes";
import { FirebaseImage } from "types/FirebaseImage";

class UpdateUserProfileImage {
  private firestore: Firestore;

  constructor(firestore: Firestore) {
    this.firestore = firestore;
  }

  public async __invoke(_id: string, profileImage: FirebaseImage) {
    const users = this.firestore.collection("users");

    try {
      await users.doc(_id).update({
        profileImage,
      });

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default UpdateUserProfileImage;
