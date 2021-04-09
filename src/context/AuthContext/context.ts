import { createContext, useContext } from "react";

import { IUserAuthContext } from "types/UserModel";
import { FirebaseImage } from "types/FirebaseImage";

type AuthType = {
  isLoading: boolean;
  user: IUserAuthContext;
  updateProfileImage(profileImage: FirebaseImage);
};

export const AuthContext = createContext<AuthType>({
  user: null,
  isLoading: true,
  updateProfileImage() {},
});

export const useAuthContext = () => useContext(AuthContext);
