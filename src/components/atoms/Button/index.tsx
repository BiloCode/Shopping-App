import { FC } from "react";
import styles from "./index.module.css";

const Button: FC = ({ children }) => (
  <button className={styles.button}>{children}</button>
);

export default Button;
