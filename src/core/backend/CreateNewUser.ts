import { Firestore } from "types/FirebaseTypes";
import { FirebaseImage } from "types/FirebaseImage";
import { AuthenticationType } from "types/AuthenticationType";

type CreateUserParams = {
  id: string;
  type: AuthenticationType;
  data: {
    email: string;
    fullName: string;
    profileImage: FirebaseImage;
  };
};

class CreateNewUser {
  private firestore: Firestore;

  constructor(firestore: Firestore) {
    this.firestore = firestore;
  }

  public async __invoke(params: CreateUserParams) {
    try {
      await this.firestore
        .collection("users")
        .doc(params.id)
        .set({
          ...params.data,
          createdAt: new Date(),
          authenticationType: params.type,
        });

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default CreateNewUser;
