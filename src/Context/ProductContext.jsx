import { createContext } from "react";
import { useLocation } from "react-router-dom";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const location = useLocation();

  const values = { location };

  return <ProductContext.Provider value={values}>{children}</ProductContext.Provider>;
}
