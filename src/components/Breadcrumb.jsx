import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { useLocation, Link } from "react-router-dom";
import BreadcrumbsBg from "../assets/Breadcrumbs.png";

const breadcrumbConfig = {
  "/shoppingcart": [
    { label: "Home", path: "/" },
    { label: "Shopping Cart", path: "/shoppingcart" },
  ],

  "/checkout": [
    { label: "Home", path: "/" },
    { label: "Shopping cart", path: "/shoppingcart" },
    { label: "Checkout", path: "/checkout" },
  ],

  "/wishlist": [
    { label: "Home", path: "/" },
    { label: "Wishlist", path: "/wishlist" },
  ],
  "/categories":[
    { label: "Home", path: "/" },
    { label: "Categories", path: "/categories" }
  ],
  "/product":[
     { label: "Home", path: "/" },
    { label: "Categories", path: "/categories" },
    {
      label:"product",path:"/product"
    }
  ]
};


function Breadcrumb() {
  const { pathname } = useLocation();

  /* ❌ NO BREADCRUMB ON HOME */
  if (pathname === "/") return null;

  const breadcrumbs = breadcrumbConfig[pathname] || [];

  return (
    <div
      className=" flex items-center"
    >
      <div className="sm:px-10 px-4 lg:px-20 flex items-center gap-2 text-sm h-[120px] ">
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <div key={item.path} className="flex items-center gap-2 md:mt-16">
              {index === 0 ? (
                <Link to="/" className="text-[#808080] text-[16px] font-light">
                  Home
                </Link>
              ) : (
                <>
                  <IoIosArrowForward className="text-gray-400" />

                  {isLast ? (
                    <span className="text-[#00B207] text-[16px] font-light cursor-pointer">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-gray-400 cursor-pointer"
                    >
                      {item.label}
                    </Link>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Breadcrumb;