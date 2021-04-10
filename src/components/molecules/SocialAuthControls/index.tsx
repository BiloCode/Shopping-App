import styles from "./index.module.css";

import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import SocialButton from "components/atoms/SocialButton";
import GoogleAuthentication from "core/frontend/GoogleAuthentication";

const SocialAuthControls = () => {
  const goggleAuth = () => {
    const googleAuth = new GoogleAuthentication();
    googleAuth.__invoke();
  };

  return (
    <div className={styles.social_controls}>
      <SocialButton
        backgroundColor="#249FFF"
        textColor="#fff"
        icon={<AiFillFacebook />}
        text="Ingresar con Facebook"
      />
      <SocialButton icon={<FcGoogle />} onClick={goggleAuth} text="Ingresar con Google" />
    </div>
  );
};

export default SocialAuthControls;
