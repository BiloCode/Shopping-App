import { FC, useEffect, useState } from "react";
import firebase from "firebase";

import { AuthContext } from "./context";

import { formatToken } from "core/FormatToken";
import { fetcher } from "core/CustomFetch";
import { IUserAuthContext } from "types/UserModel";
import { FirebaseImage } from "types/FirebaseImage";

export const AuthProvider: FC = ({ children }) => {
  const [token, setToken] = useState<string>(null);
  const [user, setUser] = useState<IUserAuthContext>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const _setAuthState = (user: IUserAuthContext, token: string) => {
    setUser(() => user);
    setToken(() => token);
    setIsLoading(() => false);
  };

  const authStateChanged = async (user) => {
    if (!user) {
      _setAuthState(null, null);
      return;
    }

    const token = formatToken(await user.getIdToken());
    const requestData = await fetcher(token, {
      url: "/auth",
      method: "POST",
      params: {
        userId: user.uid,
      },
    });

    if (requestData.error) {
      console.log(requestData.error);
      _setAuthState(null, null);
      return;
    }

    _setAuthState(requestData.user, token);
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
    <AuthContext.Provider value={{ user, isLoading, token, updateProfileImage }}>
      {children}
    </AuthContext.Provider>
  );
};
