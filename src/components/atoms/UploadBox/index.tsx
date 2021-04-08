import { ChangeEvent, FC } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import styles from "./index.module.css";

type UploadBoxProps = {
  accept?: string;
  multiple?: boolean;
  onChange?(ev: ChangeEvent<HTMLInputElement>): void;
};

const UploadBox: FC<UploadBoxProps> = ({ onChange, accept, multiple }) => (
  <label className={styles.upload_box} htmlFor="upload-box">
    <span className={styles.upload_box__icon}>
      <AiOutlinePlus />
    </span>
    <input
      type="file"
      id="upload-box"
      accept={accept}
      multiple={multiple}
      onChange={onChange}
      className={styles.upload_box__input}
    />
  </label>
);

export default UploadBox;
