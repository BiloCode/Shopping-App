import { createContext, useContext } from "react";

type ProductCreateContextType = {
  userCreateModal: boolean;
  toggleUserCreateModal(): void;
};

export const ProductCreateContext = createContext<ProductCreateContextType>({
  userCreateModal: false,
  toggleUserCreateModal() {},
});

export const useProductCreateContext = () => useContext(ProductCreateContext);
