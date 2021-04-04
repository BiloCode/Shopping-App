import { FC } from "react";
import styles from "./index.module.css";

import TabOption from "components/atoms/TabOption";

import useNumberSelect from "hooks/useNumberSelect";

type ProfileTabMenuProps = {
  tabsMenu: string[];
  renderTab(tabActive: number): JSX.Element;
};

const ProfileTabMenu: FC<ProfileTabMenuProps> = ({ tabsMenu, renderTab }) => {
  const { numberSelect, changeNumberSelect } = useNumberSelect();

  return (
    <div className={styles.profile_tab_menu}>
      <div className={styles.profile_tab_menu__tabs_header}>
        {tabsMenu.map((v, i) => (
          <TabOption
            key={i}
            text={v}
            isSelected={i === numberSelect}
            onClick={changeNumberSelect(i)}
          />
        ))}
      </div>
      <div className={styles.profile_tab_menu__tabs_body}>
        {renderTab(numberSelect)}
      </div>
    </div>
  );
};

export default ProfileTabMenu;
