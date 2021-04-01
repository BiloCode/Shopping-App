import { FC } from "react";
import styles from "./index.module.css";

import AuthLabel from "components/atoms/AuthLabel";
import AuthInput, { AuthInputProps } from "components/atoms/AuthInput";

type AuthControlProps = AuthInputProps & {
  labelText: string;
};

const AuthControl: FC<AuthControlProps> = ({ labelText, type }) => (
  <div className={styles.auth_control}>
    <AuthLabel>{labelText}</AuthLabel>
    <AuthInput type={type} />
  </div>
);

export default AuthControl;
