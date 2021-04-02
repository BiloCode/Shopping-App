import { useState } from "react";

import router from "next/router";
import firebase from "firebase";
import styles from "./index.module.css";
import { AiOutlineUser, AiOutlineCloseCircle } from "react-icons/ai";

import { useAuthContext } from "context/AuthContext/context";

import Button from "components/atoms/Button";
import NavOption from "components/atoms/NavOption";
import UserAvatar from "components/atoms/UserAvatar";

const NavigationUserArea = () => {
  const { user, isLoading } = useAuthContext();

  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const NavigateToLogin = () => router.push("/login");
  const NavigateToProfile = (_id: string) => () => router.push(`/user/${_id}`);
  const ToggleDropdown = () => setIsDropdownActive((active) => !active);
  const LogoutAccount = async () => {
    const auth = firebase.auth();
    await auth.signOut();
  };

  if (isLoading) return null;

  if (!user) {
    return (
      <div className={styles.navigation_user_area__button}>
        <Button onClick={NavigateToLogin} type="small">
          Ingresa Ahora
        </Button>
      </div>
    );
  }

  return (
    <button className={styles.navigation_user_area__button_dropdown}>
      <div
        onClick={ToggleDropdown}
        className={styles.navigation_user_area__image_container}
      >
        <UserAvatar image={user.profileImage} />
      </div>
      {isDropdownActive && (
        <ul className={styles.navigation_user_area__dropdown}>
          <NavOption
            Icon={AiOutlineUser}
            text="Perfil"
            onClick={NavigateToProfile(user._id)}
          />
          <NavOption
            Icon={AiOutlineCloseCircle}
            text="Cerrar Sesión"
            onClick={LogoutAccount}
          />
        </ul>
      )}
    </button>
  );
};

export default NavigationUserArea;
