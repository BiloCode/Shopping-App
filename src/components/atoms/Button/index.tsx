import { FC } from "react";
import styles from "./index.module.css";

type ButtonProps = {
  onClick?(): void;
};

const Button: FC<ButtonProps> = ({ children, onClick }) => (
  <button onClick={onClick} className={styles.button}>
    {children}
  </button>
);

export default Button;
