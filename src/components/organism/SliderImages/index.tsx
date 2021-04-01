import { FC, useState } from "react";
import styles from "./index.module.css";

import ImageContentHidden from "components/molecules/ImageContentHidden";
import ImageIndicatorList from "components/molecules/ImageIndicatorsList";

type SliderImagesProps = {
  images: string[];
};

const SliderImages: FC<SliderImagesProps> = ({ images }) => {
  const [imageSelect, setImageSelect] = useState<number>(0);

  const changeImageIndex = (id: number) => () => setImageSelect(() => id);

  return (
    <div className={styles.slider_content}>
      <ImageContentHidden images={images} imageActive={imageSelect} />
      {images.length > 1 && (
        <ImageIndicatorList
          iconsNumber={images.length}
          onClickIndicator={changeImageIndex}
        />
      )}
    </div>
  );
};

export default SliderImages;
