import styles from "./index.module.css";

import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import { useUserProfileContext } from "context/UserProfileContext/context";
import { useAuthContext } from "context/AuthContext/context";

const ProfileTitleRightContent = () => {
  const { user } = useAuthContext();
  const { userPageId, toggleUserCreateModal } = useUserProfileContext();

  const isMyProfile = user?._id === userPageId;

  return (
    <div className={styles.profile_right_content__title}>
      <Title type="big">
        {isMyProfile ? "Mis Productos" : "Productos Publicados"}
      </Title>
      {isMyProfile && (
        <div className={styles.profile_right_content__title_button}>
          <Button onClick={toggleUserCreateModal} type="small">
            Publicar Producto
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProfileTitleRightContent;
