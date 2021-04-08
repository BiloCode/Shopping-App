import { FC } from "react";
import styles from "./index.module.css";

export type TextareaProps = {
  onChange?(): void;
};

const Textarea: FC<TextareaProps> = ({ onChange }) => (
  <textarea className={styles.textarea} onChange={onChange}></textarea>
);

export default Textarea;
