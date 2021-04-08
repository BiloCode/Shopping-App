import { FC } from "react";
import styles from "./index.module.css";

const Label: FC = ({ children }) => (
  <label className={styles.auth_label}>{children}</label>
);

export default Label;
