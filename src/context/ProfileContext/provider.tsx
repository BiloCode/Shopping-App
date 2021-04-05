import { FC, useState } from "react";

import { ProfileContext } from "./context";
import { UserDataType } from "types/UserDataType";

export const ProfileProvider: FC = ({ children }) => {
  const [userNowData, setUser] = useState<UserDataType>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userCacheStore, setUserCacheStore] = useState<UserDataType[]>([]);

  const setUserSearched = (user: UserDataType) => setUser(() => user);
  const setLoading = (state: boolean) => setIsLoading(() => state);

  const userExists = (_id: string) => {
    const oldUser = userCacheStore.find((v) => v._id === _id);
    return oldUser;
  };

  const setUserToStore = (user: UserDataType) => {
    const oldUser = userExists(user._id);
    if (!oldUser) {
      setUserCacheStore((store) => [...store, user]);
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        isLoading,
        userNowData,
        setLoading,
        setUserSearched,
        setUserToStore,
        userExists,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
