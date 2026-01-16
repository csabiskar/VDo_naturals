import { RouterProvider } from "react-router-dom";
import { appRouter } from "./Router/Router";
import { AuthProvider } from "./context/AuthContext";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <WishlistProvider>
            <RouterProvider router={appRouter} />
          </WishlistProvider>
        </CartProvider>
      </ProductProvider>

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
