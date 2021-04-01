import { createContext, useContext } from "react";

type AuthType = {
  user: any;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthType>({
  user: null,
  isLoading: true,
});

export const useAuthContext = () => useContext(AuthContext);
