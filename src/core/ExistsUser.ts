import firebase from "firebase";

class ExistsUser {
  public async __invoke(email: string) {
    const firestore = firebase.firestore();
    const users = firestore.collection("users");

    try {
      const request = await users.where("email", "==", email).get();
      if (request.size > 0) {
        return true;
      }

      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default ExistsUser;
