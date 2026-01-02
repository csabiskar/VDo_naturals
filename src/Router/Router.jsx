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

export const appRouter = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      
      {
        element: <ProtectedRoute />,
        children: [
          { path: "/categories", element: <CategoryPage /> },
          { path: "/wishlist", element: <Wishlist /> },
          { path: "/shoppingcart", element: <ShoppingCart /> },
          { path: "/checkout", element: <Checkout /> },
        ],
      },
    ],
  },
  { path: "/login", element: <Auth /> },
  { path: "/signup", element: <Auth /> },
]);
