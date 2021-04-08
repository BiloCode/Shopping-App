import styles from "./index.module.css";

import Button from "components/atoms/Button";
import FormControl from "components/molecules/FormControl";
import FormImagesControl from "components/molecules/FormImagesControl";
import FormTextAreaControl from "components/molecules/FormTextAreaControl";

const ProductCreateModal = () => (
  <div className={styles.product_create_modal}>
    <div className={styles.product_create_modal__container}>
      <form className={styles.product_create_modal__form} action="">
        <FormControl labelText="Nombre del Producto" />
        <FormControl labelText="Precio el Producto" type="number" />
        <FormTextAreaControl labelText="Descripcion del producto" />
        <FormImagesControl />
        <Button>Crear Producto</Button>
      </form>
    </div>
  </div>
);

export default ProductCreateModal;
