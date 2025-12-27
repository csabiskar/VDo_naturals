import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Wishlist from "../Pages/Wishlist";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import Error from "../components/Error";
import ShoppingCart from "../Pages/ShoppingCart";
import Checkout from "../Pages/Checkout"; // <-- add

export const appRouter = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/shoppingcart", element: <ShoppingCart /> },
      { path: "/checkout", element: <Checkout /> },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
]);
