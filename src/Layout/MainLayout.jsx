import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

export default function MainLayout() {
  const location = useLocation();
  const { pathname } = location;

  // Hide breadcrumb on product pages
  const hideBreadcrumb = pathname.startsWith("/product/");

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Navbar />

      {/* Content offset for fixed navbar */}
      <div className="pt-[104px] lg:pt-[159px]">
        {!hideBreadcrumb && <Breadcrumb />}
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
