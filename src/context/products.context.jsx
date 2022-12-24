import { useState, createContext, useEffect } from "react";
import PRODUCTS from "../shop-data.json";

// value to access
export const ProductsContext = createContext({
  products: [],
  //   setProducts: () => null,
});

// provider
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products, setProducts };

  useEffect(() => {
    // fetch products here
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
