import firebase from "firebase";

import { UserImageProfileData } from "types/UserDataType";

class UpdateUserProfileImage {
  public async __invoke(_id: string, profileImage: UserImageProfileData) {
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
