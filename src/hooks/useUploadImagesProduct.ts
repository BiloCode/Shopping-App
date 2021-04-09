import { ChangeEvent, useState } from "react";
import { CustomFile } from "types/CustomFile";

const useUploadImagesProduct = () => {
  const [fileImages, setFileImages] = useState<CustomFile[]>([]);

  const onChangeFile = (ev: ChangeEvent<HTMLInputElement>) => {
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

    const customFiles: CustomFile[] = imagesFilesUpload.map((file) => {
      return { file, localUrl: URL.createObjectURL(file) };
    });

    setFileImages((files) => [...files, ...customFiles]);
  };

  const onClickDeleteImage = (id: number) => () => {
    setFileImages((files) => files.filter((v, i) => i !== id));
  };

  return {
    fileImages,
    onChangeFile,
    onClickDeleteImage,
  };
};

export default useUploadImagesProduct;
