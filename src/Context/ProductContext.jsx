import { createContext } from "react";
import { useLocation } from "react-router-dom";

export const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const location = useLocation();

  const Values = {
    location,
  };

  return (
    <>
      <ProductContext.Provider value={Values}>
        {children}
      </ProductContext.Provider>
    </>
  );
}

export default ProductContextProvider;
