import { Firestore } from "types/FirebaseTypes";

class ExistsUser {
  private firestore: Firestore;

  constructor(firestore: Firestore) {
    this.firestore = firestore;
  }

  public async __invoke(id: string) {
    const users = this.firestore.collection("users");

    try {
      const request = await users.doc(id).get();
      if (request.data()) {
        return true;
      }

      return false;
    } catch (error) {
      return new Error(error);
    }
  }
}

export default ExistsUser;
