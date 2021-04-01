import { FC } from "react";
import { IconType } from "react-icons/lib";
import styles from "./index.module.css";

type NavOptionProps = {
  text: string;
  Icon: IconType;
  onClick?(): void;
};

const NavOption: FC<NavOptionProps> = ({ Icon, text, onClick }) => (
  <li className={styles.nav_option} onClick={onClick}>
    <span className={styles.nav_option__icon}>
      <Icon />
    </span>
    <span>{text}</span>
  </li>
);

export default NavOption;
