import { FC } from "react";
import classnames from "classnames";
import styles from "./index.module.css";

type ParagraphProps = {
  color?: string;
  type?: "normal" | "big";
};

const Paragraph: FC<ParagraphProps> = ({ children, type, color }) => (
  <p
    style={{ color }}
    className={classnames(styles.paragraph, {
      [styles.paragraph__big]: type === "big",
    })}
  >
    {children}
  </p>
);

Paragraph.defaultProps = { type: "normal" };

export default Paragraph;
