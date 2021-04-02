import Title from "components/atoms/Title";
import styles from "./index.module.css";
import NavigationListOption from "components/molecules/NavigationListOption";
import NavigationUserArea from "components/molecules/NavigationUserArea";

const NavigationBar = () => (
  <nav className={styles.navigation_bar}>
    <Title color="#fff" type="big">
      Clothes Shop
    </Title>
    <div className={styles.navigation_bar__content_right}>
      <NavigationListOption />
      <NavigationUserArea />
    </div>
  </nav>
);

export default NavigationBar;
