import { useEffect } from "react";

import { useAuthContext } from "context/AuthContext/context";
import { useRouter } from "next/router";

type UseUserParams = {
  redirectTo: string;
};

const useUser = (params: UseUserParams) => {
  const router = useRouter();
  const { user, isLoading } = useAuthContext();

  useEffect(() => {
    if (user) router.replace(params.redirectTo);
  }, []);

  return {
    user,
    isLoading,
  };
};

export default useUser;
