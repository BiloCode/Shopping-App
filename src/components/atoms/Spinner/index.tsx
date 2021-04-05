import { FC, memo } from "react";
import classnames from "classnames";
import styles from "./index.module.css";

type SpinnerProps = {
  white?: boolean;
};

const Spinner: FC<SpinnerProps> = ({ white }) => (
  <div
    className={classnames(styles.spinner, {
      [styles.spinner__white]: white,
    })}
  ></div>
);

export default memo(Spinner);
