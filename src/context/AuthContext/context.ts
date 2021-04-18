import { createContext, useContext } from "react";

import { IUserAuthContext } from "types/UserModel";
import { FirebaseImage } from "types/FirebaseImage";

type AuthType = {
  token: string;
  isLoading: boolean;
  user: IUserAuthContext;
  updateProfileImage(profileImage: FirebaseImage);
};

export const AuthContext = createContext<AuthType>({
  user: null,
  token: null,
  isLoading: true,
  updateProfileImage() {},
});

export const useAuthContext = () => useContext(AuthContext);
