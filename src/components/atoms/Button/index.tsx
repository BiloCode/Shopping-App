import { FC } from "react";
import classnames from "classnames";
import * as S from "./styles";

type ButtonSize = "normal" | "small";
type ButtonColor = "normal" | "red";

type ButtonProps = {
  ghost?: boolean;
  type?: ButtonSize;
  color?: ButtonColor;
  buttonSubmit?: boolean;
  onClick?(): void;
};

const Button: FC<ButtonProps> = ({
  type,
  color,
  ghost,
  onClick,
  children,
  buttonSubmit,
}) => (
  <S.ContainerButton
    onClick={onClick}
    type={buttonSubmit ? "submit" : "button"}
    className={classnames({
      ghost,
      red: color === "red",
      small: type === "small",
    })}
  >
    {children}
  </S.ContainerButton>
);

Button.defaultProps = {
  type: "normal",
  color: "normal",
};

export default Button;
