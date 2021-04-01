import { FC } from "react";
import styles from "./index.module.css";

type FooterIconProps = {
  onClick?(): void;
};

const FooterIcon: FC<FooterIconProps> = ({ children, onClick }) => (
  <div onClick={onClick} className={styles.footer_icon}>
    {children}
  </div>
);

export default FooterIcon;
