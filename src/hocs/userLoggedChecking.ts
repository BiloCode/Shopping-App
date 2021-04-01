import { useEffect } from "react";
import firebase from "firebase";

const userLoggedChecking = (Component: () => JSX.Element) => {
  const auth = firebase.auth();
  if (auth.currentUser) {
    return Component;
  }

  return () => {
    useEffect(() => {
      const a = document.createElement("a");
      a.href = "/";
      a.click();
    }, []);

    return null;
  };
};

export default userLoggedChecking;
