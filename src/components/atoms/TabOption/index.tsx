import { FC, memo } from "react";
import classnames from "classnames";
import styles from "./index.module.css";

type TabOptionProps = {
  text: string;
  onClick?(): void;
  isSelected?: boolean;
};

const TabOption: FC<TabOptionProps> = ({ text, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={classnames(styles.tab_option, {
      [styles["tab_option--select"]]: isSelected,
    })}
  >
    <span className={styles.tab_option__text}>{text}</span>
  </button>
);

export default memo(
  TabOption,
  (prevProps, nextProps) => prevProps.isSelected === nextProps.isSelected
);
