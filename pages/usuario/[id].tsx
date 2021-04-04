import { NextPage } from "next";
import styles from "styles/UserPage.module.css";

import Spinner from "components/atoms/Spinner";
import NavigationBar from "components/organism/NavigationBar";
import PageConfiguration from "components/templates/PageConfiguration";
import UserProfileLeftContent from "components/organism/UserProfileLeftContent";
import UserProfileRightContent from "components/organism/UserProfileRightContent";

import useGetProfile from "hooks/useGetProfile";

type ProfileProps = {
  userId?: string;
};

const Profile: NextPage<ProfileProps> = ({ userId }) => {
  const { isLoading, userNowData } = useGetProfile(userId);

  return (
    <PageConfiguration title="Perfil">
      <NavigationBar />
      {isLoading ? (
        <div className={styles.container_spinner}>
          <Spinner />
        </div>
      ) : (
        <div className={styles.container_limit}>
          <UserProfileLeftContent
            profileImage={userNowData.profileImage}
            fullName={userNowData.fullName}
          />
          <UserProfileRightContent />
        </div>
      )}
    </PageConfiguration>
  );
};

Profile.getInitialProps = ({ query }) => {
  const userId = String(query.id);

  return {
    userId,
  };
};

export default Profile;
