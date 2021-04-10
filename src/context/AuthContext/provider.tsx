import { FC, useEffect, useState } from "react";
import firebase from "firebase";

import { AuthContext } from "./context";

import { protectedFetch } from "core/CustomFetch";

import { IUserAuthContext } from "types/UserModel";
import { FirebaseImage } from "types/FirebaseImage";

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<IUserAuthContext>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const _setAuthState = (user: IUserAuthContext) => {
    setUser(() => user);
    setIsLoading(() => false);
  };

  const authStateChanged = async (user) => {
    if (!user) {
      _setAuthState(null);
      return;
    }

    const token = await user.getIdToken();
    const requestData = await protectedFetch(token, {
      url: "/api/auth",
      method: "POST",
      params: {
        userId: user.uid,
      },
    });

    if (requestData.error) {
      console.log(requestData.error);
      _setAuthState(null);
      return;
    }

    _setAuthState(requestData.user);
  };

  useEffect(() => {
    const auth = firebase.auth();
    const unsubscribe = auth.onAuthStateChanged(authStateChanged);

    return () => unsubscribe();
  }, []);

  const updateProfileImage = (profileImage: FirebaseImage) => {
    setUser((user) => ({ ...user, profileImage }));
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, updateProfileImage }}>
      {children}
    </AuthContext.Provider>
  );
};
