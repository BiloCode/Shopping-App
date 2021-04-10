import firebase from "firebase";

import { fetcher } from "core/CustomFetch";
import { AuthenticationType } from "types/AuthenticationType";

class GoogleAuthentication {
  public async __invoke() {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      const result = await firebase.auth().signInWithPopup(provider);
      const user = result.user;

      if (!user.emailVerified) {
        return;
      }

      const token = await user.getIdToken();
      const authType: AuthenticationType = "google";

      const request = await fetcher(token, {
        method: "POST",
        url: "/api/user",
        params: {
          authType,
          userId: user.uid,
          email: user.email,
          fullName: user.displayName,
          profileImage: {
            name: "",
            url: user.photoURL,
          },
        },
      });

      console.log(request);
    } catch (error) {
      console.log(error);
    }
  }
}

export default GoogleAuthentication;
