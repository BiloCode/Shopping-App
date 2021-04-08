import { NextPage } from "next";
import styles from "styles/UserPage.module.css";

import Spinner from "components/atoms/Spinner";
import NavigationBar from "components/organism/NavigationBar";
import PageConfiguration from "components/templates/PageConfiguration";
import UserProfileLeftContent from "components/organism/UserProfileLeftContent";
import UserProfileRightContent from "components/organism/UserProfileRightContent";

import useGetProfile from "hooks/useGetProfile";
import UserProfileProvider from "context/UserProfileContext/provider";
import ProductCreateModal from "components/organism/ProductCreateModal";

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
          <UserProfileProvider _id={userId}>
            <UserProfileLeftContent
              fullName={userNowData.fullName}
              createdAt={userNowData.createdAt}
              image={userNowData.profileImage.url}
            />
            <UserProfileRightContent />
            <ProductCreateModal />
          </UserProfileProvider>
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
