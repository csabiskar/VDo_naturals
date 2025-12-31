import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Wishlist from "../Pages/Wishlist";
import Home from "../Pages/Home";
import Auth from "../Pages/Auth";
import Error from "../components/Error";
import ShoppingCart from "../Pages/ShoppingCart";
import Checkout from "../Pages/Checkout";
import CategoryPage from "../Pages/CategoryPage";
import { BigProducts } from "../components/Sample";

export const appRouter = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/shoppingcart", element: <ShoppingCart /> },
      { path: "/checkout", element: <Checkout /> },
      {path:'/categories',element:<CategoryPage/>},
      {path:"/cookie",element:<BigProducts/>}
      
    ],
  },
  {
    path: "/signup",
    element: <Auth />,
  },
  {
    path: "/login",
    element: <Auth />,
  },
]);
