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
import ProductPage from "../Pages/ProductPage";
import { ProductProvider } from "../context/ProductContext";
import { CategoryProvider } from "../context/CategoryContext";

import UserDashBoard from "../Pages/UserDashBoard";
import Dashboard from "../components/Dashboard";
import OrderHistory from "../components/OrderHistory";
import Settings from "../components/Settings";
import OrderDetails from "../components/OrderDetails";
import LogoutDialog from "../components/LogoutDialog";
import ProductReview from "../components/ProductReview";
import Contact from "../components/Contact";
import Aboutpage from "../Pages/Aboutpage";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProductProvider>
        <CategoryProvider>
          <MainLayout />
        </CategoryProvider>
      </ProductProvider>
    ),
    errorElement: <Error />,
    children: [
      /* ---------------- PUBLIC ROUTES ---------------- */
      { index: true, element: <Home /> },
      { path: "categories", element: <CategoryPage /> },
      { path: "product/:id", element: <ProductPage /> },
      { path: "contact", element: <Contact /> },
      { path: "aboutus", element: <Aboutpage /> },

      /* ---------------- PROTECTED ROUTES ---------------- */
      {
        element: <ProtectedRoute />,
        children: [
          { path: "wishlist", element: <Wishlist /> },
          { path: "shoppingcart", element: <ShoppingCart /> },
          { path: "checkout", element: <Checkout /> },

          {
            path: "profile",
            element: <UserDashBoard />,
            children: [
              { index: true, element: <Dashboard /> },
              { path: "orders", element: <OrderHistory /> },
              { path: "orders/:orderId", element: <OrderDetails /> },
              { path: "settings", element: <Settings /> },
              { path: "logout", element: <LogoutDialog /> },
              { path: "review/:productId", element: <ProductReview /> },
              { path: "wishlist", element: <Wishlist /> },
            ],
          },
        ],
      },

      { path: "*", element: <Error /> },
    ],
  },

  /* ---------------- AUTH ROUTES ---------------- */
  { path: "/login", element: <Auth /> },
  { path: "/signup", element: <Auth /> },
]);
