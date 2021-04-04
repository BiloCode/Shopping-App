import { memo } from "react";
import styles from "./index.module.css";

const Spinner = () => <div className={styles.spinner}></div>;

export default memo(Spinner);
