import { FC } from "react";

import firebase from "firebase";
import styles from "./index.module.css";
import { IoEllipsisVerticalOutline } from "react-icons/io5";

import Title from "components/atoms/Title";
import CircularImage from "components/atoms/CircularImage";
import Paragraph from "components/atoms/Paragraph";
import HoverableIcon from "components/atoms/HoverableIcon";

type ProfileProductProps = {
  _id: string;
  name: string;
  image: string;
  createdAt?: firebase.firestore.Timestamp;
};

const ProfileProduct: FC<ProfileProductProps> = ({
  _id,
  name,
  image,
  createdAt,
}) => {
  return (
    <div className={styles.profile_product}>
      <div className={styles.profile_product__information}>
        <CircularImage type="big" image={image} />
        <div className={styles.profile_product__text}>
          <Title type="small">{name}</Title>
          <Paragraph type="small">24/06/10</Paragraph>
        </div>
      </div>
      <div className={styles.profile_product__options}>
        <HoverableIcon Icon={IoEllipsisVerticalOutline} />
      </div>
    </div>
  );
};

export default ProfileProduct;
