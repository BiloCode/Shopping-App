import { FC } from "react";
import styles from "./index.module.css";

import { ProductCardType } from "types/ProductCardType";

import Button from "components/atoms/Button";
import Title from "components/atoms/Title";
import DateText from "components/atoms/DateText";
import SelectableImage from "components/organism/SelectableImage";

const ProductCard: FC<ProductCardType> = ({
  name,
  price,
  createdAt,
  images,
}) => (
  <div className={styles.product_card__container}>
    <div className={styles.product_card__image}>
      <SelectableImage images={images} />
    </div>
    <div className={styles.product_card__information}>
      <Title>{name}</Title>
      <DateText value={createdAt} />
      <div className={styles.product_card__information__price}>
        <span>S/ {price}</span>
      </div>
    </div>
    <Button>Ver detalles</Button>
  </div>
);

export default ProductCard;
