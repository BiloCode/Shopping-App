import { useEffect } from "react";
import { useRouter } from "next/router";

import GetUserById from "core/GetUserById";

import { useProfileContext } from "context/ProfileContext/context";

const useGetProfile = (userId?: string) => {
  const { replace } = useRouter();
  const {
    isLoading,
    userNowData,
    setLoading,
    setUserSearched,
    userExists,
    setUserToStore,
  } = useProfileContext();

  useEffect(() => {
    const getUserProfile = async () => {
      if (!userId) {
        replace("/");
        return;
      }

      const _id = String(userId);
      const userStored = userExists(_id);

      if (!userStored) {
        const getUser = new GetUserById();
        const user = await getUser.__invoke(_id);

        setUserToStore(user);
        setUserSearched(user);
        setLoading(false);
        return;
      }

      setUserSearched(userStored);
      setLoading(false);
    };

    getUserProfile();
  }, []);

  return {
    isLoading,
    userNowData,
  };
};

export default useGetProfile;
