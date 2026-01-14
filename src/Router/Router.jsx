import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Wishlist from "../Pages/Wishlist";
import ShoppingCart from "../Pages/ShoppingCart";
import Checkout from "../Pages/Checkout";
import CategoryPage from "../Pages/CategoryPage";
import Auth from "../Pages/Auth";
import Error from "../components/Error";
import ProtectedRoute from "./ProtectedRoute";
import { ProductProvider } from "../context/ProductContext";
import ProductPage from "../Pages/ProductPage";
import Productsssss from "../components/Sample";
import { CartProvider } from "../context/CartContext";
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProductProvider>
        <CartProvider>

        <MainLayout />
        </CartProvider>
      </ProductProvider>
    ),
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> }, 

      {
        element: <ProtectedRoute />,
        children: [
          { path: "categories", element: <CategoryPage /> },
          { path: "wishlist", element: <Wishlist /> },
          { path: "shoppingcart", element: <ShoppingCart /> },
          { path: "checkout", element: <Checkout /> },
          { path: "product/:id", element: <ProductPage /> },
        ],
      },
    ],
  },

  { path: "login", element: <Auth /> },
  { path: "signup", element: <Auth /> },
  {path:'test',element :<Productsssss/>}
]);

