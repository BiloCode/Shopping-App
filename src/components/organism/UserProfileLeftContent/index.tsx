import { FC } from "react";
import firebase from "firebase";
import styles from "./index.module.css";

import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import Paragraph from "components/atoms/Paragraph";
import ImageProfileArea from "components/molecules/ImageProfileArea";

import { useUserProfileContext } from "context/UserProfileContext/context";
import { useAuthContext } from "context/AuthContext/context";

type UserProfileLeftContentProps = {
  fullName: string;
  createdAt: firebase.firestore.Timestamp;
  profileImage: string;
};

const UserProfileLeftContent: FC<UserProfileLeftContentProps> = ({
  fullName,
  createdAt,
  profileImage,
}) => {
  const { user } = useAuthContext();
  const { userPageId } = useUserProfileContext();

  const isMyProfile = user?._id === userPageId;

  return (
    <div className={styles.user_profile}>
      <ImageProfileArea image={profileImage} />
      <div className={styles.user_profile__main_information}>
        <Title type="small">{fullName}</Title>
        <Paragraph type="small">Se unio el 24 de diciembre del 2019</Paragraph>
      </div>
      <ul className={styles.user_profile__data_list}>
        <li className={styles.user_profile__data_list__element}>
          <span>Productos Publicados</span>
          <span>24</span>
        </li>
        <li className={styles.user_profile__data_list__element}>
          <span>Compras Realizadas</span>
          <span>0</span>
        </li>
      </ul>
      {isMyProfile && (
        <div className={styles.user_profile__button}>
          <Button>Editar Informacion</Button>
        </div>
      )}
    </div>
  );
};

export default UserProfileLeftContent;
