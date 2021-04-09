import { FC, useState } from "react";
import { UserProfileContext } from "./context";

type UserProfileProviderProps = {
  _id: string;
};

const UserProfileProvider: FC<UserProfileProviderProps> = ({
  _id,
  children,
}) => {
  const [userPageId] = useState<string>(_id);
  const [userCreateModal, setUserCreateModal] = useState(false);

  const toggleUserCreateModal = () => setUserCreateModal((c) => !c);

  return (
    <UserProfileContext.Provider
      value={{
        userPageId,
        userCreateModal,
        toggleUserCreateModal,
      }}
    >
      {children}
    </UserProfileContext.Provider>
  );
};

export default UserProfileProvider;
