import firebase from "firebase";

class UpdateUserProfileImage {
  public async __invoke(_id: string, imageURL: string) {
    const firestore = firebase.firestore();
    const users = firestore.collection("users");

    try {
      await users.doc(_id).update({
        profileImage: imageURL,
      });

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default UpdateUserProfileImage;
