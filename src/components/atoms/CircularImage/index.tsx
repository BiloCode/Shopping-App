import { FC, memo } from "react";
import classnames from "classnames";
import styles from "./index.module.css";

type CircularImageSizeType = "normal" | "small" | "extra-big" | "big";

type CircularImageProps = {
  alt?: string;
  image: string;
  type?: CircularImageSizeType;
};

const CircularImage: FC<CircularImageProps> = ({ image, alt, type }) => (
  <div
    className={classnames(styles.user_avatar, {
      [styles["user_avatar--small"]]: type === "small",
      [styles["user_avatar--extra_big"]]: type === "extra-big",
      [styles["user_avatar--big"]]: type === "big",
    })}
  >
    {image && (
      <img src={image} alt={alt} className={styles.user_avatar__image} />
    )}
  </div>
);

CircularImage.defaultProps = {
  type: "normal",
};

export default memo(CircularImage);
