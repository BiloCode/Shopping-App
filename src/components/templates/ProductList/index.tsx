import { FC, memo } from "react";
import styles from "./index.module.css";

import { ProductCardType } from "types/ProductCardType";
import ProductCard from "components/organism/ProductCard";

type ProductListProps = {
  products: ProductCardType[];
};

const ProductList: FC<ProductListProps> = ({ products }) => (
  <div className={styles.product_list}>
    {products.map((v) => (
      <ProductCard
        key={v._id}
        _id={v._id}
        name={v.name}
        price={v.price}
        images={v.images}
        createdAt={v.createdAt}
      />
    ))}
  </div>
);

export default memo(ProductList);
