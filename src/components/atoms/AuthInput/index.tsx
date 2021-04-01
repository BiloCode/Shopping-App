import { FC } from "react";
import styles from "./index.module.css";

export type AuthInputProps = {
  type?: "text" | "password" | "number";
};

const AuthInput: FC<AuthInputProps> = ({ type }) => (
  <input className={styles.auth_input} type={type} />
);

AuthInput.defaultProps = {
  type: "text",
};

export default AuthInput;
