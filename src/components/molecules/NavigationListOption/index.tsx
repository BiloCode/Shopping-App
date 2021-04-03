import { useRouter } from "next/router";
import styles from "./index.module.css";

import { AiOutlineHome, AiOutlineUser, AiOutlineTag } from "react-icons/ai";

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
        Icon={AiOutlineUser}
        onClick={NavigateToAboutUs}
      />
      <NavOption
        text="Nuestros Productos"
        Icon={AiOutlineTag}
        onClick={NavigateToProducts}
      />
    </ul>
  );
};

export default NavigationListOption;
