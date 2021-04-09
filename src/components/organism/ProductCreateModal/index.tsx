import { FC, memo } from "react";
import styles from "./index.module.css";

import Button from "components/atoms/Button";
import FormControl from "components/molecules/FormControl";
import FormImagesControl from "components/molecules/FormImagesControl";
import FormTextAreaControl from "components/molecules/FormTextAreaControl";
import useUploadImagesProduct from "hooks/useUploadImagesProduct";
import useCreateNewProduct from "hooks/useCreateNewProduct";

import { useProductCreateContext } from "context/ProductCreateContext/context";

export type ProductCreateModalProps = {
  onClose?(): void;
};

const ProductCreateModal: FC<ProductCreateModalProps> = ({ onClose }) => {
  const {
    fileImages,
    onChangeFile,
    onClickDeleteImage,
  } = useUploadImagesProduct();

  const { onSubmit } = useCreateNewProduct(fileImages);

  return (
    <div className={styles.product_create_modal}>
      <div className={styles.product_create_modal__container}>
        <form onSubmit={onSubmit} className={styles.product_create_modal__form}>
          <FormControl labelText="Nombre del Producto" />
          <FormControl labelText="Precio el Producto" type="number" />
          <FormTextAreaControl labelText="Descripcion del producto" />
          <FormImagesControl
            fileImages={fileImages}
            onChangeFile={onChangeFile}
            onClickDeleteIcon={onClickDeleteImage}
          />
          <div className={styles.product_create_modal__buttons}>
            <Button buttonSubmit>Crear Producto</Button>
            <Button onClick={onClose} color="red">
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

const productController = (Component: FC<ProductCreateModalProps>) => () => {
  const { userCreateModal, toggleUserCreateModal } = useProductCreateContext();

  if (!userCreateModal) {
    return null;
  }

  return <Component onClose={toggleUserCreateModal} />;
};

export default memo(productController(ProductCreateModal));
