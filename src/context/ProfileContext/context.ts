import { createContext, useContext } from "react";

import { UserDataType } from "types/UserDataType";

type ProfileContextType = {
  isLoading: boolean;
  userNowData: UserDataType;
  setLoading(state: boolean);
  setUserSearched(user: UserDataType);
  setUserToStore(user: UserDataType);
  userExists(_id: string);
};

export const ProfileContext = createContext<ProfileContextType>({
  isLoading: true,
  userNowData: null,
  setLoading() {},
  userExists() {},
  setUserSearched() {},
  setUserToStore() {},
});

export const useProfileContext = () => useContext(ProfileContext);
