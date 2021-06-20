import { FC, memo } from "react";
import * as S from "./styles";

import Label from "components/atoms/Label";
import Input, { InputDataType } from "components/atoms/Input";

type FormControlProps = InputDataType & {
  id?: string;
  labelText: string;
};

const FormControl: FC<FormControlProps> = ({ id, labelText, type, onChange }) => (
  <S.ControlContainer>
    <Label forControl={id}>{labelText}</Label>
    <Input forControl={id} type={type} onChange={onChange} />
  </S.ControlContainer>
);

export default memo(FormControl);
