import { createContext, useContext } from "react";

import { UserDataType, UserImageProfileData } from "types/UserDataType";

type ProfileContextType = {
  isLoading: boolean;
  userNowData: UserDataType;
  setLoading(state: boolean);
  userExists(_id: string);
  setUserToStore(user: UserDataType);
  setUserSearched(user: UserDataType);
  updateUserImageStore(userId: string, profileImage: UserImageProfileData);
};

export const ProfileContext = createContext<ProfileContextType>({
  isLoading: true,
  userNowData: null,
  setLoading() {},
  userExists() {},
  setUserSearched() {},
  setUserToStore() {},
  updateUserImageStore() {},
});

export const useProfileContext = () => useContext(ProfileContext);
