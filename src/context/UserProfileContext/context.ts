import { createContext, useContext } from "react";

import { UserDataType } from "types/UserDataType";

type UserProfileContextType = {
  isLoading: boolean;
  userNowData: UserDataType;
  setLoading(state: boolean);
  setUserSearched(user: UserDataType);
  setUserToStore(user: UserDataType);
  userExists(_id: string);
};

export const UserProfileContext = createContext<UserProfileContextType>({
  isLoading: true,
  userNowData: null,
  setLoading() {},
  userExists() {},
  setUserSearched() {},
  setUserToStore() {},
});

export const useUserProfileContext = () => useContext(UserProfileContext);
