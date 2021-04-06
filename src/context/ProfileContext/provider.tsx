import { FC, useState } from "react";

import { ProfileContext } from "./context";
import { UserDataType, UserImageProfileData } from "types/UserDataType";

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

  const updateUserImageStore = (
    userId: string,
    profileImage: UserImageProfileData
  ) => {
    const oldCache = [...userCacheStore];
    const newCache: UserDataType[] = [];

    for (let userStored of oldCache) {
      if (userStored._id === userId) {
        newCache.push({
          ...userStored,
          profileImage,
        });
        continue;
      }

      newCache.push(userStored);
    }

    setUserCacheStore(() => newCache);
  };

  return (
    <ProfileContext.Provider
      value={{
        isLoading,
        setLoading,
        userExists,
        userNowData,
        setUserToStore,
        setUserSearched,
        updateUserImageStore,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
