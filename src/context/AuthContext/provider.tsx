import { FC, useEffect, useState } from "react";
import firebase from "firebase";

import { AuthContext } from "./context";
import { UserSimpleData, UserImageProfileData } from "types/UserDataType";

import GetUserByEmail from "core/GetUserByEmail";

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<UserSimpleData>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const auth = firebase.auth();
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const getUser = new GetUserByEmail();
        const userData = await getUser.__invoke(user.email);

        setUser(() => userData);
        setIsLoading(() => false);
        return;
      }

      setUser(() => null);
      setIsLoading(() => false);
    });

    return () => unsubscribe();
  }, []);

  const updateProfileImage = (profileImage: UserImageProfileData) => {
    setUser((user) => ({ ...user, profileImage }));
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, updateProfileImage }}>
      {children}
    </AuthContext.Provider>
  );
};
