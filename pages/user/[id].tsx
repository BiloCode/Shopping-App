import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "styles/UserPage.module.css";

import UserAvatar from "components/atoms/UserAvatar";
import NavigationBar from "components/organism/NavigationBar";
import PageConfiguration from "components/templates/PageConfiguration";

import GetUserById from "core/GetUserById";

import { useUserProfileContext } from "context/UserProfileContext/context";

const Profile = () => {
  const { query } = useRouter();
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
      if (!query.id) return;

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

  if (isLoading) return null;

  return (
    <PageConfiguration title="Perfil">
      <NavigationBar />
      <div className={styles.container_limit}>
        <UserAvatar type="extra-big" image={userNowData.profileImage} />
        <span>{userNowData.fullName}</span>
      </div>
    </PageConfiguration>
  );
};

export default Profile;
