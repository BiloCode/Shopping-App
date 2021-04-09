import { FC, memo } from "react";
import styles from "./index.module.css";

import Label from "components/atoms/Label";
import Input, { InputProps } from "components/atoms/Input";

type FormControlProps = InputProps & {
  labelText: string;
};

const FormControl: FC<FormControlProps> = ({ labelText, type }) => (
  <div className={styles.auth_control}>
    <Label>{labelText}</Label>
    <Input type={type} />
  </div>
);

export default memo(FormControl);
