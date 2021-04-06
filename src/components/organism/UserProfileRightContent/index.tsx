import styles from "./index.module.css";

import ProfileProduct from "components/molecules/ProfileProduct";
import ProfileTabMenu from "components/molecules/ProfileTabMenu";
import ProfileTitleRightContent from "components/molecules/ProfileTitleRightContent";

const tabs = ["Todos", "Sin Confirmacion", "Publicados"];

const UserProfileRightContent = () => (
  <div>
    <ProfileTitleRightContent />
    <ProfileTabMenu
      tabsMenu={tabs}
      renderTab={(tabActive) => {
        switch (tabActive) {
          case 0:
            return (
              <div className={styles.profile_product_list_all}>
                <ProfileProduct image="" _id="" name="Polo de suecia" />
                <ProfileProduct image="" _id="" name="Polo de suecia" />
                <ProfileProduct image="" _id="" name="Polo de suecia" />
                <ProfileProduct image="" _id="" name="Polo de suecia" />
              </div>
            );
          case 1:
            return <p>Sin confirmar</p>;
          case 2:
            return <p>Publicados</p>;
        }
      }}
    />
  </div>
);

export default UserProfileRightContent;
