import styles from "./index.module.css";

import Title from "components/atoms/Title";
import Button from "components/atoms/Button";

import { useAuthContext } from "context/AuthContext/context";
import { useUserProfileContext } from "context/UserProfileContext/context";
import { useProductCreateContext } from "context/ProductCreateContext/context";

const ProfileTitleRightContent = () => {
  const { user } = useAuthContext();
  const { userPageId } = useUserProfileContext();
  const { toggleUserCreateModal } = useProductCreateContext();

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
