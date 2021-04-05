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

  return (
    <UserProfileContext.Provider value={{ userPageId }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export default UserProfileProvider;
