import { ChangeEvent, FC } from "react";
import * as S from "./styles";

export type InputType = "text" | "password" | "number" | "email";

export type InputDataType = {
  type?: InputType;
  onChange?(ev: ChangeEvent<HTMLInputElement>): void;
};

export type InputProps = InputDataType & {
  forControl: string;
};

const Input: FC<InputProps> = ({ type, onChange, forControl }) => (
  <S.Input type={type} id={forControl} onChange={onChange} />
);

Input.defaultProps = {
  type: "text",
};

export default Input;
