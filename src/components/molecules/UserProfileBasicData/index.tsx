import { FC, memo } from "react";
import firebase from "firebase";
import styles from "./index.module.css";

import Paragraph from "components/atoms/Paragraph";
import Title from "components/atoms/Title";

export type UserProfileBasicDataProps = {
  fullName: string;
  createdAt: string;
};

const UserProfileBasicData: FC<UserProfileBasicDataProps> = ({
  fullName,
  createdAt,
}) => {
  const dateParse = new Intl.DateTimeFormat("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(createdAt));

  return (
    <div className={styles.user_profile_basic_data}>
      <Title type="small">#{fullName}</Title>
      <Paragraph type="small">Se unio el {dateParse}</Paragraph>
    </div>
  );
};

export default memo(UserProfileBasicData);
