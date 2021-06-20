import styles from "styles/LoginPage.module.css";

import userLoggedChecking from "hocs/userLoggedChecking";

import Title from "components/atoms/Title";
import LoginForm from "components/organism/LoginForm";
import SocialAuthControls from "components/molecules/SocialAuthControls";
import PageConfiguration from "components/templates/PageConfiguration";
import BackIcon from "components/atoms/BackIcon";
import router from "next/router";

const Login = () => {
  const backToHome = () => router.back();

  return (
    <PageConfiguration title="Login">
      <div className={styles.container}>
        <div className={styles.title_container}>
          <Title type="extra-big">¡Bienvenido a nuestro espacio privado!</Title>
        </div>
        <div className={styles.controls_container}>
          <SocialAuthControls />
          <LoginForm />
        </div>
      </div>
      <div className={styles.back_icon_float}>
        <BackIcon onClick={backToHome} />
      </div>
    </PageConfiguration>
  );
};

export default userLoggedChecking(Login);
