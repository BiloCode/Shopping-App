import router from "next/router";

import { useAuthContext } from "context/AuthContext/context";

const userLoggedChecking = (Component: () => JSX.Element) => () => {
  const { user, isLoading } = useAuthContext();

  if (isLoading) return null;

  if (user) {
    router.replace("/");
    return null;
  }

  return <Component />;
};

export default userLoggedChecking;
