import { FC } from "react";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./index.module.css";

import Image from "components/atoms/Image";

type ImageUploadedProps = {
  source: string;
  onClickTopIcon?(): void;
};

const ImageUploaded: FC<ImageUploadedProps> = ({ source, onClickTopIcon }) => (
  <div className={styles.image_upload}>
    <Image source={source} />
    <span onClick={onClickTopIcon} className={styles.image_upload__icon}>
      <AiOutlineClose />
    </span>
  </div>
);

export default ImageUploaded;
