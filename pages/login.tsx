import styles from "styles/LoginPage.module.css";

import userLoggedChecking from "hocs/userLoggedChecking";

import Title from "components/atoms/Title";
import LoginForm from "components/organism/LoginForm";
import SocialAuthControls from "components/molecules/SocialAuthControls";
import NavigationBar from "components/organism/NavigationBar";
import PageConfiguration from "components/templates/PageConfiguration";

const Login = () => {
  return (
    <PageConfiguration title="Login">
      <NavigationBar />
      <div className={styles.container}>
        <div className={styles.title_container}>
          <Title type="extra-big">¡Bienvenido a nuestra Tienda!</Title>
        </div>
        <div className={styles.controls_container}>
          <SocialAuthControls />
          <LoginForm />
        </div>
      </div>
    </PageConfiguration>
  );
};

export default userLoggedChecking(Login);
