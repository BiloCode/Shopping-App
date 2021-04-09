import { FC, memo } from "react";

import styles from "./index.module.css";

import Button from "components/atoms/Button";
import ProfileItemData from "components/atoms/ProfileItemData";
import ImageProfileArea from "components/molecules/ImageProfileArea";
import UserProfileBasicData, {
  UserProfileBasicDataProps,
} from "components/molecules/UserProfileBasicData";

import { useAuthContext } from "context/AuthContext/context";
import { useUserProfileContext } from "context/UserProfileContext/context";

type UserProfileLeftContentProps = UserProfileBasicDataProps & {
  image: string;
};

const UserProfileLeftContent: FC<UserProfileLeftContentProps> = ({
  image,
  fullName,
  createdAt,
}) => {
  const { user } = useAuthContext();
  const { userPageId } = useUserProfileContext();

  const isMyProfile = user?._id === userPageId;

  return (
    <div className={styles.user_profile}>
      <ImageProfileArea image={image} />
      <UserProfileBasicData createdAt={createdAt} fullName={fullName} />
      <ul className={styles.user_profile__data_list}>
        <ProfileItemData name="Productos Publicados" value="24" />
        <ProfileItemData name="Compras Realizadas" value="0" />
      </ul>
      <div className={styles.user_profile__button}>
        <Button>
          {isMyProfile ? "Editar Informacion" : "Ver Clasificacion"}
        </Button>
      </div>
    </div>
  );
};

export default UserProfileLeftContent;
