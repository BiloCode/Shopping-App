import { FC } from "react";
import styles from "./index.module.css";

import FooterIcon from "components/atoms/FooterIcon";

export type ListIconType = {
  icon: JSX.Element;
  onClick?(): void;
};

export type FooterListIconProps = {
  icons: ListIconType[];
};

const FooterListIcon: FC<FooterListIconProps> = ({ icons }) => (
  <div className={styles.footer_list_icon}>
    {icons.map((v, i) => (
      <FooterIcon onClick={v.onClick} key={i}>
        {v.icon}
      </FooterIcon>
    ))}
  </div>
);

export default FooterListIcon;
