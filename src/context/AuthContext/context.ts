import { createContext, useContext } from "react";

import { UserSimpleData } from "types/UserDataType";

type AuthType = {
  isLoading: boolean;
  user: UserSimpleData;
  updateProfileImage(imageURL: string);
};

export const AuthContext = createContext<AuthType>({
  user: null,
  isLoading: true,
  updateProfileImage() {},
});

export const useAuthContext = () => useContext(AuthContext);
