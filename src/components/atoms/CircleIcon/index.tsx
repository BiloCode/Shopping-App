import { FC } from "react";
import styles from "./index.module.css";

type CircleIconProps = {
  onClick?(): void;
};

const CircleIcon: FC<CircleIconProps> = ({ onClick }) => (
  <button onClick={onClick} className={styles.circle_icon}></button>
);

export default CircleIcon;
