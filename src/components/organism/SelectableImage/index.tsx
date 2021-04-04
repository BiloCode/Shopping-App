import { FC } from "react";
import styles from "./index.module.css";

import useNumberSelect from "hooks/useNumberSelect";

import ImageContentHidden from "components/molecules/ImageContentHidden";
import ImageIndicatorList from "components/molecules/ImageIndicatorsList";

type SelectableImageProps = {
  images: string[];
};

const SelectableImage: FC<SelectableImageProps> = ({ images }) => {
  const { numberSelect, changeNumberSelect } = useNumberSelect();

  return (
    <div className={styles.slider_content}>
      <ImageContentHidden images={images} imageActive={numberSelect} />
      {images.length > 1 && (
        <ImageIndicatorList
          iconsNumber={images.length}
          onClickIndicator={changeNumberSelect}
        />
      )}
    </div>
  );
};

export default SelectableImage;
