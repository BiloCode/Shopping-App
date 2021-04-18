import { FC, useState } from "react";

import { ProfileContext } from "./context";

import { IUserModel } from "types/UserModel";
import { FirebaseImage } from "types/FirebaseImage";

export const ProfileProvider: FC = ({ children }) => {
  const [userNowData, setUser] = useState<IUserModel>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userCacheStore, setUserCacheStore] = useState<IUserModel[]>([]);

  const setUserSearched = (user: IUserModel) => setUser(() => user);
  const setLoading = (state: boolean) => setIsLoading(() => state);

  const userExists = (_id: string) => {
    const oldUser = userCacheStore.find((v) => v._id === _id);
    return oldUser;
  };

  const setUserToStore = (user: IUserModel) => {
    const oldUser = userExists(user._id);
    if (!oldUser) {
      setUserCacheStore((store) => [...store, user]);
    }
  };

  const updateUserImageStore = (userId: string, profileImage: FirebaseImage) => {
    const oldCache = [...userCacheStore];
    const newCache = oldCache.map((v) => {
      if (v._id === userId) {
        return { ...v, profileImage };
      }

      return v;
    });

    setUserCacheStore(() => newCache);
    setUser((user) => ({
      ...user,
      profileImage,
    }));
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
