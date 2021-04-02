import { createContext, useContext } from "react";

import { UserSimpleData } from "types/UserDataType";

type AuthType = {
  isLoading: boolean;
  user: UserSimpleData;
};

export const AuthContext = createContext<AuthType>({
  user: null,
  isLoading: true,
});

export const useAuthContext = () => useContext(AuthContext);
