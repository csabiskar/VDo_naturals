import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { useLocation, Link } from "react-router-dom";
import BreadcrumbsBg from "../assets/Breadcrumbs.png";

function Breadcrumb() {
  const { pathname } = useLocation();

  // Route → Label mapping
  const breadcrumbMap = {
    "/": "Home",
    "/wishlist": "Wishlist",
    "/signin": "Sign In",
    "/login": "Login",
    "/shoppingcart":"Shopping cart"
  };

  const currentLabel = breadcrumbMap[pathname] || "Page";

  return (
    <div
      className="h-[120px] flex items-center"
      style={{
        backgroundImage: `url(${BreadcrumbsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="px-20 flex items-center gap-2 text-sm">
        <Link to="/">
          <GoHome className="text-gray-400" size={22} />
        </Link>

        <IoIosArrowForward className="text-gray-400" />

        <span className="text-[#00B207] text-[16px] font-light cursor-pointer">
          {currentLabel}
        </span>
      </div>
    </div>
  );
}

export default Breadcrumb;
