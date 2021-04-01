import { useRouter } from "next/router";

import Title from "components/atoms/Title";
import styles from "./index.module.css";
import Button from "components/atoms/Button";
import NavigationListOption from "components/molecules/NavigationListOption";

const NavigationBar = () => {
  const router = useRouter();
  const NavigateToLogin = () => router.push("/login");

  return (
    <nav className={styles.navigation_bar}>
      <Title color="#fff" type="big">
        Clothes Shop
      </Title>
      <div className={styles.navigation_bar__content_right}>
        <NavigationListOption />
        <div className={styles.navigation_bar__button}>
          <Button onClick={NavigateToLogin} type="small">
            Ingresa Ahora
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
