import { FC } from "react";
import styles from "./index.module.css";

import CircleIcon from "components/atoms/CircleIcon";

type ImageIndicatorListProps = {
  iconsNumber: number;
  onClickIndicator?(id: number);
};

const ImageIndicatorList: FC<ImageIndicatorListProps> = ({
  iconsNumber,
  onClickIndicator,
}) => (
  <div className={styles.indicator_list_container}>
    {new Array(iconsNumber).fill("").map((v, i) => (
      <CircleIcon key={i} onClick={onClickIndicator(i)} />
    ))}
  </div>
);

export default ImageIndicatorList;
