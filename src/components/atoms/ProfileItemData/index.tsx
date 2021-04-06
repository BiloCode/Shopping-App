import { FC } from "react";
import styles from "./index.module.css";

type ProfileItemDataProps = {
  name: string;
  value: string;
};

const ProfileItemData: FC<ProfileItemDataProps> = ({ name, value }) => (
  <li className={styles.profile_item_data}>
    <span>{name}</span>
    <span>{value}</span>
  </li>
);

export default ProfileItemData;
