import firebase from "firebase";

type UserData = {
  email: string;
  profileImage: string;
  fullName: string;
};

class CreateNewUser {
  public async __invoke(user: UserData) {
    const firestore = firebase.firestore();

    try {
      await firestore.collection("users").add({
        ...user,
        createdAt: firebase.firestore.Timestamp.now(),
      });

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default CreateNewUser;
