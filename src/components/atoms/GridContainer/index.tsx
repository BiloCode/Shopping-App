import { FC } from "react";
import styles from "./index.module.css";

type GridContainerProps = {
  columns: {
    amount: number;
    width: string;
  };
  gap?: {
    column?: string;
    row?: string;
  };
};

const GridContainer: FC<GridContainerProps> = ({ children, columns, gap }) => (
  <div
    className={styles.grid}
    style={{
      rowGap: gap?.row,
      columnGap: gap?.column,
      gridTemplateColumns: `repeat(${columns.amount},${columns.width})`,
    }}
  >
    {children}
  </div>
);

export default GridContainer;
