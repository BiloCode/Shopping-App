import { useRouter } from "next/router";
import { AiOutlineHome } from "react-icons/ai";
import styles from "./index.module.css";

import NavOption from "components/atoms/NavOption";

const NavigationListOption = () => {
  const router = useRouter();
  const NavigateToHome = () => router.push("/");
  const NavigateToAboutUs = () => router.push("/nosotros");
  const NavigateToProducts = () => router.push("/productos");

  return (
    <ul className={styles.navigation_bar__list}>
      <NavOption text="Inicio" Icon={AiOutlineHome} onClick={NavigateToHome} />
      <NavOption
        text="Nosotros"
        Icon={AiOutlineHome}
        onClick={NavigateToAboutUs}
      />
      <NavOption
        text="Productos"
        Icon={AiOutlineHome}
        onClick={NavigateToProducts}
      />
    </ul>
  );
};

export default NavigationListOption;
