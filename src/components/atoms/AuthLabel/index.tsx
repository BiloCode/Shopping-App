import { FC } from "react";
import styles from "./index.module.css";

const AuthLabel: FC = ({ children }) => (
  <label className={styles.auth_label}>{children}</label>
);

export default AuthLabel;
