import { ChangeEvent, FC, useState } from "react";
import classnames from "classnames";
import styles from "./index.module.css";

import { CustomFile } from "types/CustomFile";

import Label from "components/atoms/Label";
import UploadBox from "components/atoms/UploadBox";
import ImageUploaded from "components/molecules/ImageUploaded";

const sizeImg = "90px";

type FormImagesControlProps = {
  fileImages: CustomFile[];
  onClickDeleteIcon?(id: number);
  onChangeFile?(ev: ChangeEvent<HTMLInputElement>): void;
};

const FormImagesControl: FC<FormImagesControlProps> = ({
  fileImages,
  onChangeFile,
  onClickDeleteIcon,
}) => (
  <div className={styles.form_images_control}>
    <Label>Imagenes del Producto</Label>
    <div
      className={classnames(styles.upload_images, {
        [styles.upload_images__uploaded]: fileImages.length !== 0,
      })}
      style={{
        gridTemplateColumns: fileImages.length
          ? `repeat(${fileImages.length + 1}, ${sizeImg})`
          : null,
      }}
    >
      <UploadBox accept="image/*" multiple onChange={onChangeFile} />
      {fileImages.map((v, i) => (
        <ImageUploaded
          key={i}
          source={v.localUrl}
          onClickTopIcon={onClickDeleteIcon(i)}
        />
      ))}
    </div>
  </div>
);

export default FormImagesControl;
