import { FormEvent } from "react";
import { CustomFile } from "types/CustomFile";

const useCreateNewProduct = (fileImages: CustomFile[]) => {
  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
  };

  return {
    onSubmit,
  };
};

export default useCreateNewProduct;
