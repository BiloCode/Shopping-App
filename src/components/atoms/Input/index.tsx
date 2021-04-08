import { FC } from "react";
import styles from "./index.module.css";

export type InputType = "text" | "password" | "number" | "email";

export type InputProps = {
  type?: InputType;
  onChange?(): void;
};

const Input: FC<InputProps> = ({ type }) => (
  <input className={styles.auth_input} type={type} />
);

Input.defaultProps = {
  type: "text",
};

export default Input;
