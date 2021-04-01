import { FC } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import styles from "./index.module.css";

type DateTextProps = {
  value: string;
};

const DateText: FC<DateTextProps> = ({ value }) => (
  <div className={styles.date_text}>
    <span className={styles.date_text__icon}>
      <AiOutlineCalendar />
    </span>
    <span className={styles.date_text__value}>{value}</span>
  </div>
);

export default DateText;
