import styles from "./index.module.css";

import FormControl from "components/molecules/FormControl";
import Button from "components/atoms/Button";

const LoginForm = () => {
  return (
    <form className={styles.login_form}>
      <FormControl type="email" labelText="Email" />
      <FormControl type="password" labelText="Password" />
      <Button>Ingresar</Button>
    </form>
  );
};

export default LoginForm;
