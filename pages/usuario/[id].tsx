import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "styles/UserPage.module.css";

import NavigationBar from "components/organism/NavigationBar";
import PageConfiguration from "components/templates/PageConfiguration";
import UserProfileLeftContent from "components/organism/UserProfileLeftContent";

import GetUserById from "core/GetUserById";

import { useUserProfileContext } from "context/UserProfileContext/context";

const Profile = () => {
  const { query, replace } = useRouter();
  const {
    isLoading,
    userNowData,
    setLoading,
    setUserSearched,
    userExists,
    setUserToStore,
  } = useUserProfileContext();

  useEffect(() => {
    const getUserProfile = async () => {
      if (!query.id) {
        replace("/");
        return;
      }

      const _id = String(query.id);
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

  return (
    <PageConfiguration title="Perfil">
      <NavigationBar />
      {isLoading ? (
        <div></div>
      ) : (
        <div className={styles.container_limit}>
          <UserProfileLeftContent
            profileImage={userNowData.profileImage}
            fullName={userNowData.fullName}
          />
          <div></div>
        </div>
      )}
    </PageConfiguration>
  );
};

export default Profile;
