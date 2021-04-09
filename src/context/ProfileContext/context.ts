import { createContext, useContext } from "react";

import { IUserModel } from "types/UserModel";
import { FirebaseImage } from "types/FirebaseImage";

type ProfileContextType = {
  isLoading: boolean;
  userNowData: IUserModel;
  setLoading(state: boolean);
  userExists(_id: string);
  setUserToStore(user: IUserModel);
  setUserSearched(user: IUserModel);
  updateUserImageStore(userId: string, profileImage: FirebaseImage);
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
