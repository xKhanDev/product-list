import React, { createContext, useContext, useState } from "react";

export const ProductsContext = createContext();
export const useProducts = () => useContext(ProductsContext);
const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const products = localStorage.getItem("products");
    return products ? JSON.parse(products) : [];
  });
  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
