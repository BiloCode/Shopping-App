import { FC } from "react";
import styles from "./index.module.css";
import { IconType } from "react-icons";

type HoverableIconProps = {
  Icon: IconType;
};

const HoverableIcon: FC<HoverableIconProps> = ({ Icon }) => (
  <div className={styles.hoverable_icon}>
    <Icon />
  </div>
);

export default HoverableIcon;
