import { ChangeEvent, useState } from "react";
import classnames from "classnames";
import styles from "./index.module.css";

import Label from "components/atoms/Label";
import UploadBox from "components/atoms/UploadBox";
import ImageUploaded from "components/molecules/ImageUploaded";

type CustomFile = File & {
  localUrl: string;
};

const sizeImg = "90px";

const FormImagesControl = () => {
  const [imageFiles, setImagesFiles] = useState<CustomFile[]>([]);

  const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const files = ev.currentTarget.files;

    if (!files.length) return;

    const iterableFiles = Array.from(files);
    const imagesFilesUpload = [];

    for (const file of iterableFiles) {
      const type = file.type.split("/")[0];
      if (type !== "image") {
        continue;
      }

      imagesFilesUpload.push(file);
    }

    if (!imagesFilesUpload.length) return;

    const customFiles: CustomFile[] = imagesFilesUpload.map((v) => {
      return { ...v, localUrl: URL.createObjectURL(v) };
    });

    setImagesFiles((files) => [...files, ...customFiles]);
  };

  const onClickDeleteImage = (id: number) => () => {
    setImagesFiles((files) => files.filter((v, i) => i !== id));
  };

  return (
    <div className={styles.form_images_control}>
      <Label>Imagenes del Producto</Label>
      <div
        className={classnames(styles.upload_images, {
          [styles.upload_images__uploaded]: imageFiles.length !== 0,
        })}
        style={{
          gridTemplateColumns:
            imageFiles.length > 0
              ? `repeat(${imageFiles.length + 1}, ${sizeImg})`
              : null,
        }}
      >
        <UploadBox accept="image/*" multiple onChange={onChange} />
        {imageFiles.map((v, i) => (
          <ImageUploaded
            key={i}
            source={v.localUrl}
            onClickTopIcon={onClickDeleteImage(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default FormImagesControl;
