import { FC, useState } from "react";
import styles from "./index.module.css";

import useNumberSelect from "hooks/useNumberSelect";

import ImageContentHidden from "components/molecules/ImageContentHidden";
import SliderText from "components/molecules/SliderText";

type SliderImageProps = {
  images: string[];
};

const SliderImage: FC<SliderImageProps> = ({ images }) => {
  const { changeNumberSelect, numberSelect } = useNumberSelect();

  return (
    <div className={styles.slider_image}>
      <div className={styles.slider_image__slider}>
        <ImageContentHidden images={images} imageActive={numberSelect} />
        <div className={styles.slider_image__text}>
          <SliderText
            title="Anime para todos"
            description="Bienvenido a esta pagina web donde podras realizar recomendaciones de anime o diversos temas."
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SliderImage;
