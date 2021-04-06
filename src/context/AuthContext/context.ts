import { createContext, useContext } from "react";

import { UserImageProfileData, UserSimpleData } from "types/UserDataType";

type AuthType = {
  isLoading: boolean;
  user: UserSimpleData;
  updateProfileImage(profileImage: UserImageProfileData);
};

export const AuthContext = createContext<AuthType>({
  user: null,
  isLoading: true,
  updateProfileImage() {},
});

export const useAuthContext = () => useContext(AuthContext);
