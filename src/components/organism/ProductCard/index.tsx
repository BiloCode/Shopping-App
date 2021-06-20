import { FC } from "react";
import styles from "./index.module.css";

import { AiOutlineStar } from "react-icons/ai";

import { ProductCardType } from "types/ProductCardType";

import Button from "components/atoms/Button";
import Title from "components/atoms/Title";
import DateText from "components/atoms/DateText";
import SelectableImage from "components/organism/SelectableImage";

const ProductCard: FC<ProductCardType> = ({ name, price, createdAt, images }) => (
  <div className={styles.product_card__container}>
    <div className={styles.product_card__image}>
      <SelectableImage images={images} />
    </div>
    <div className={styles.product_card__information}>
      <Title>{name}</Title>
      <DateText value={createdAt} />
    </div>
    <div className={styles.product_card__information__aditional}>
      <div className={styles.product_card__information__star}>
        <span className={styles.product_card__information__star_icon}>
          <AiOutlineStar />
        </span>
        <span className={styles.product_card__information__star_text}>
          5 estrellas
        </span>
      </div>
      <span className={styles.product_card__information__price_text}>
        S/ {price}
      </span>
    </div>
    <Button color="red" type="normal">
      Ver detalles
    </Button>
  </div>
);

export default ProductCard;
