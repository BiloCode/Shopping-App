import styles from "./index.module.css";

import AuthControl from "components/molecules/AuthControl";
import Button from "components/atoms/Button";

const LoginForm = () => {
  return (
    <form className={styles.login_form}>
      <AuthControl type="email" labelText="Email" />
      <AuthControl type="password" labelText="Password" />
      <Button>Ingresar</Button>
    </form>
  );
};

export default LoginForm;
