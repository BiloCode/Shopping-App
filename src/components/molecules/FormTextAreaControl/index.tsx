import { FC } from "react";
import styles from "./index.module.css";

import Label from "components/atoms/Label";
import Textarea, { TextareaProps } from "components/atoms/Textarea";

type FormTextAreaControlProps = TextareaProps & {
  labelText: string;
};

const FormTextAreaControl: FC<FormTextAreaControlProps> = ({
  onChange,
  labelText,
}) => (
  <div className={styles.form_text_area_control}>
    <Label>{labelText}</Label>
    <Textarea onChange={onChange} />
  </div>
);

export default FormTextAreaControl;
