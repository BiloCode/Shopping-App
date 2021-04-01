import { FC } from "react";
import styles from "./index.module.css";
import classnames from "classnames";

type TitleSize = "normal" | "big" | "small" | "extra-big";

type TitleProps = {
  color?: string;
  type?: TitleSize;
};

const Title: FC<TitleProps> = ({ children, color, type }) => (
  <span
    style={{ color }}
    className={classnames(styles.title, {
      [styles.title__small]: type === "small",
      [styles.title__normal]: type === "normal",
      [styles.title__big]: type === "big",
      [styles.title__extra_big]: type === "extra-big",
    })}
  >
    {children}
  </span>
);

Title.defaultProps = {
  type: "normal",
};

export default Title;
