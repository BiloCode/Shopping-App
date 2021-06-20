import { FC } from "react";
import * as S from "./styles";

type LabelProps = {
  forControl: string;
};

const Label: FC<LabelProps> = ({ children, forControl }) => (
  <S.CustomLabel htmlFor={forControl}>{children}</S.CustomLabel>
);

export default Label;
