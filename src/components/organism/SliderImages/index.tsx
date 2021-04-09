import { FC } from "react";
import styles from "./index.module.css";

import { FirebaseImage } from "types/FirebaseImage";

import SliderText from "components/molecules/SliderText";
import ImageContentHidden from "components/molecules/ImageContentHidden";

import useNumberSelect from "hooks/useNumberSelect";

type SliderImageProps = {
  images: FirebaseImage[];
};

const SliderImage: FC<SliderImageProps> = ({ images }) => {
  const { changeNumberSelect, numberSelect } = useNumberSelect();

  const filterImages = images.map((v) => v.url);

  return (
    <div className={styles.slider_image}>
      <div className={styles.slider_image__slider}>
        <ImageContentHidden images={filterImages} imageActive={numberSelect} />
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
