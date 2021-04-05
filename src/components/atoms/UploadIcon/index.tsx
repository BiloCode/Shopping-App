import { ChangeEvent, FC } from "react";
import styles from "./index.module.css";
import { IconType } from "react-icons/lib";

type UploadIconProps = {
  Icon: IconType;
  onClick?(): void;
  onChange?(ev: ChangeEvent<HTMLInputElement>): void;
};

const UploadIcon: FC<UploadIconProps> = ({ Icon, onClick, onChange }) => (
  <label
    htmlFor="img_input"
    className={styles.icon_in_circle}
    onClick={onClick}
  >
    <span className={styles.icon_in_circle__icon}>
      <Icon />
    </span>
    <input
      type="file"
      id="img_input"
      accept="image/*"
      onChange={onChange}
      className={styles.icon_in_circle__input}
    />
  </label>
);

export default UploadIcon;
