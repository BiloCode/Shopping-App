import { createContext, useContext } from "react";

type UserProfileProps = {
  userPageId: string;
  userCreateModal: boolean;
  toggleUserCreateModal(): void;
};

export const UserProfileContext = createContext<UserProfileProps>({
  userPageId: null,
  userCreateModal: false,
  toggleUserCreateModal() {},
});

export const useUserProfileContext = () => useContext(UserProfileContext);
