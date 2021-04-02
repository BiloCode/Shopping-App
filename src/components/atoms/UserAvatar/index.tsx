import { FC, memo } from "react";
import classnames from "classnames";
import styles from "./index.module.css";

type UserAvatarSizeType = "normal" | "small" | "extra-big";

type UserAvatarProps = {
  alt?: string;
  image: string;
  type?: UserAvatarSizeType;
};

const UserAvatar: FC<UserAvatarProps> = ({ image, alt, type }) => (
  <div
    className={classnames(styles.user_avatar, {
      [styles["user_avatar--small"]]: type === "small",
      [styles["user_avatar--extra_big"]]: type === "extra-big",
    })}
  >
    {image && (
      <img src={image} alt={alt} className={styles.user_avatar__image} />
    )}
  </div>
);

UserAvatar.defaultProps = {
  type: "normal",
};

export default memo(UserAvatar);
