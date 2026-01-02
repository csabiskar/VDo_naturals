import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function ProtectedRoute() {
  const { isAuth, loading } = useAuth();
  const location = useLocation();

  if (loading) return null; // wait for auth init

  if (!isAuth) return <Navigate to="/login" replace state={{ from: location }} />;

  return <Outlet />;
}
