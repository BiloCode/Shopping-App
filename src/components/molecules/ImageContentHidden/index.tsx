import { FC } from "react";
import styles from "./index.module.css";

import Image from "components/atoms/Image";

type ImageContentHiddenProps = {
  images: string[];
  imageActive: number;
};

const ImageContentHidden: FC<ImageContentHiddenProps> = ({
  images,
  imageActive,
}) => (
  <div className={styles.image_content_hidden}>
    {images.map((v, i) => (
      <div
        style={{
          width: "inherit",
          height: "inherit",
          transition: ".3s",
          transform: `translateX(${imageActive * -100}%)`,
        }}
      >
        <Image key={i} source={v} />
      </div>
    ))}
  </div>
);

export default ImageContentHidden;
