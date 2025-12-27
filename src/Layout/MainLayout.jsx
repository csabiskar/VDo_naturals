import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Navbar />
      <Breadcrumb/>
      <Outlet />
      <Footer />
    </div>
  );
}
