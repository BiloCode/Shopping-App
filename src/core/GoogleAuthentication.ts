import firebase from "firebase";

import CreateNewUser from "./CreateNewUser";
import ExistsUser from "./ExistsUser";

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

      this.createNewUser.__invoke(
        {
          email: user.email,
          fullName: user.displayName,
          profileImage: user.photoURL,
        },
        "google"
      );
    } catch (error) {
      console.log(error);
    }
  }
}

export default GoogleAuthentication;
