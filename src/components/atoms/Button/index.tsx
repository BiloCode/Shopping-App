import { FC } from "react";
import classnames from "classnames";
import styles from "./index.module.css";

type ButtonSize = "normal" | "small";
type ButtonColor = "normal" | "red";

type ButtonProps = {
  type?: ButtonSize;
  color?: ButtonColor;
  buttonSubmit?: boolean;
  onClick?(): void;
};

const Button: FC<ButtonProps> = ({
  type,
  color,
  onClick,
  buttonSubmit,
  children,
}) => (
  <button
    type={buttonSubmit ? "submit" : "button"}
    onClick={onClick}
    className={classnames(styles.button, {
      [styles.button__small]: type === "small",
      [styles["button--red"]]: color === "red",
    })}
  >
    {children}
  </button>
);

Button.defaultProps = {
  type: "normal",
  color: "normal",
};

export default Button;
