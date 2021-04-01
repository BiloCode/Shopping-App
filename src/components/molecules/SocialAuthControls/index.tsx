import styles from "./index.module.css";

import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import SocialButton from "components/atoms/SocialButton";
import GoogleAuthentication from "core/GoogleAuthentication";
import ExistsUser from "core/ExistsUser";
import CreateNewUser from "core/CreateNewUser";

const SocialAuthControls = () => {
  const goggleAuth = () => {
    const existsUser = new ExistsUser();
    const createUser = new CreateNewUser();
    const googleAuth = new GoogleAuthentication(createUser, existsUser);
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
      <SocialButton
        icon={<FcGoogle />}
        onClick={goggleAuth}
        text="Ingresar con Google"
      />
    </div>
  );
};

export default SocialAuthControls;
