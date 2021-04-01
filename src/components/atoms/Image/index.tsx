import { FC } from "react";
import styles from "./index.module.css";

type ImageProps = {
  alt?: string;
  radius?: number;
  source: string;
};

const Image: FC<ImageProps> = ({ source, alt, radius }) => (
  <img
    alt={alt}
    src={source}
    className={styles.image}
    style={{ borderRadius: radius }}
  />
);

export default Image;
