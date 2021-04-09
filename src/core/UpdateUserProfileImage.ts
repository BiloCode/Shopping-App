import firebase from "firebase";

import { FirebaseImage } from "types/FirebaseImage";

class UpdateUserProfileImage {
  public async __invoke(_id: string, profileImage: FirebaseImage) {
    const firestore = firebase.firestore();
    const users = firestore.collection("users");

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
