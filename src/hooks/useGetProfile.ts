import { useEffect } from "react";
import { useRouter } from "next/router";

import { simpleFetcher } from "core/CustomFetch";

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
        const requestData = await simpleFetcher("/user/" + _id);
        if (requestData.error) {
          console.log(requestData.error);
          return;
        }

        setUserToStore(requestData.user);
        setUserSearched(requestData.user);
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
