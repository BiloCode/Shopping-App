import { FC, useState } from "react";
import { ProductCreateContext } from "./context";

const ProductCreateProvider: FC = ({ children }) => {
  const [userCreateModal, setUserCreateModal] = useState(false);
  const toggleUserCreateModal = () => {
    setUserCreateModal((modalActive) => !modalActive);
  };

  return (
    <ProductCreateContext.Provider
      value={{
        userCreateModal,
        toggleUserCreateModal,
      }}
    >
      {children}
    </ProductCreateContext.Provider>
  );
};

export default ProductCreateProvider;
