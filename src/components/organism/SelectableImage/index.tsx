import { FC } from "react";
import styles from "./index.module.css";

import useImageSelect from "hooks/useImageSelect";

import ImageContentHidden from "components/molecules/ImageContentHidden";
import ImageIndicatorList from "components/molecules/ImageIndicatorsList";

type SelectableImageProps = {
  images: string[];
};

const SelectableImage: FC<SelectableImageProps> = ({ images }) => {
  const { imageSelect, changeImageSelect } = useImageSelect();

  return (
    <div className={styles.slider_content}>
      <ImageContentHidden images={images} imageActive={imageSelect} />
      {images.length > 1 && (
        <ImageIndicatorList
          iconsNumber={images.length}
          onClickIndicator={changeImageSelect}
        />
      )}
    </div>
  );
};

export default SelectableImage;
