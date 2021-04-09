import { createContext, useContext } from "react";

type UserProfileProps = {
  userPageId: string;
};

export const UserProfileContext = createContext<UserProfileProps>({
  userPageId: null,
});

export const useUserProfileContext = () => useContext(UserProfileContext);
