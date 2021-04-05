import { FC } from "react";
import styles from "./index.module.css";

import Title from "components/atoms/Title";
import ImageProfileArea from "components/molecules/ImageProfileArea";

type UserProfileLeftContentProps = {
  fullName: string;
  profileImage: string;
};

const UserProfileLeftContent: FC<UserProfileLeftContentProps> = ({
  fullName,
  profileImage,
}) => (
  <div className={styles.user_profile}>
    <ImageProfileArea image={profileImage} />
    <Title>{fullName}</Title>
  </div>
);

export default UserProfileLeftContent;
