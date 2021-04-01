import { FC } from "react";
import classnames from "classnames";
import styles from "./index.module.css";

type ButtonSize = "normal" | "small";

type ButtonProps = {
  type?: ButtonSize;
  onClick?(): void;
};

const Button: FC<ButtonProps> = ({ children, type, onClick }) => (
  <button
    onClick={onClick}
    className={classnames(styles.button, {
      [styles.button__small]: type === "small",
    })}
  >
    {children}
  </button>
);

Button.defaultProps = {
  type: "normal",
};

export default Button;
