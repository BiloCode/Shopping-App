import firebase from "firebase";

import CreateNewUser from "../backend/CreateNewUser";
import ExistsUser from "../ExistsUser";

class GoogleAuthentication {
  private existsUser: ExistsUser;
  private createNewUser: CreateNewUser;

  constructor(createNewUser: CreateNewUser, existsUser: ExistsUser) {
    this.createNewUser = createNewUser;
    this.existsUser = existsUser;
  }

  public async __invoke() {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      const result = await firebase.auth().signInWithPopup(provider);
      const user = result.user;

      if (!user.emailVerified) {
        return;
      }

      const userExists = await this.existsUser.__invoke(user.email);
      if (userExists) {
        return;
      }

      await this.createNewUser.__invoke(
        user.uid,
        {
          email: user.email,
          fullName: user.displayName,
          profileImage: {
            name: "",
            url: user.photoURL,
          },
        },
        "google"
      );
    } catch (error) {
      console.log(error);
    }
  }
}

export default GoogleAuthentication;
