import firebase from "firebase";

import { AuthenticationType } from "types/AuthenticationType";

type UserData = {
  email: string;
  profileImage: string;
  fullName: string;
};

class CreateNewUser {
  public async __invoke(user: UserData, authType: AuthenticationType) {
    const firestore = firebase.firestore();

    try {
      await firestore.collection("users").add({
        ...user,
        authenticationType: authType,
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
