import { RouterProvider } from "react-router-dom";
import { appRouter } from "./Router/Router";
import { AuthProvider } from "./context/AuthContext";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CategoryProvider } from "./context/CategoryContext";

function App() {
  return (
    <AuthProvider>
      
      {/* <ProductProvider> */}
      <CategoryProvider>
        <CartProvider>
          <WishlistProvider>
            <RouterProvider router={appRouter} />
          </WishlistProvider>
        </CartProvider>
      </CategoryProvider>
      {/* </ProductProvider> */}

      {/* Toast must be rendered once */}
      <ToastContainer
        position="bottom-right"
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </AuthProvider>
  );
}

export default App;
