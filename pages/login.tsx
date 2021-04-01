import Head from "next/head";
import styles from "styles/LoginPage.module.css";

import Title from "components/atoms/Title";
import Footer from "components/organism/Footer";
import LoginForm from "components/organism/LoginForm";
import SocialAuthControls from "components/molecules/SocialAuthControls";
import NavigationBar from "components/organism/NavigationBar";

const Login = () => (
  <main>
    <Head>
      <title>Login</title>
    </Head>
    <div>
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
    </div>
  </main>
);

export default Login;
