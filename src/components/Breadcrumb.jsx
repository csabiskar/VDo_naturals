import { IoIosArrowForward } from "react-icons/io";
import { useLocation, Link, useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { useProducts } from "../context/ProductContext";

/* =======================
   BREADCRUMB CONFIG
======================= */
const breadcrumbConfig = {
  shoppingcart: [
    { label: "Home", path: "/" },
    { label: "Shopping Cart", path: "/shoppingcart" },
  ],
  checkout: [
    { label: "Home", path: "/" },
    { label: "Shopping Cart", path: "/shoppingcart" },
    { label: "Checkout", path: "/checkout" },
  ],
  wishlist: [
    { label: "Home", path: "/" },
    { label: "Wishlist", path: "/wishlist" },
  ],
  categories: [
    { label: "Home", path: "/" },
    { label: "Categories", path: "/categories" },
  ],
  product: [
    { label: "Home", path: "/" },
    { label: "Categories", path: "/categories" },
    { label: "Product", path: "/product" },
  ],
  profile: [
    { label: "Home", path: "/" },
    { label: "Account", path: "/profile" },
  ],
  contact: [
    { label: "Home", path: "/" },
    { label: "Contact us", path: "/contact" },
  ],
};

function Breadcrumb() {
  const { pathname } = useLocation();
  const { id } = useParams();
  const { fetchProductById } = useProducts();

  const [productData, setProductData] = useState(null);

  /* =======================
     BASE ROUTE
  ======================= */
  const baseRoute = useMemo(() => pathname.split("/")[1], [pathname]);

  /* =======================
     PRODUCT NAME FETCH
  ======================= */
  useEffect(() => {
    let mounted = true;

    const loadProduct = async () => {
      if (baseRoute !== "product" || !id) {
        setProductData(null);
        return;
      }

      try {
        const res = await fetchProductById(id);
        if (mounted && res?.product) {
          setProductData(res.product);
        }
      } catch (error) {
        console.error("Breadcrumb product fetch failed", error);
      }
    };

    loadProduct();

    return () => {
      mounted = false;
    };
  }, [baseRoute, id, fetchProductById]);

  /* =======================
     EXIT CONDITIONS
  ======================= */
  if (pathname === "/") return null;

  let breadcrumbs = breadcrumbConfig[baseRoute];
  if (!breadcrumbs) return null;

  /* =======================
     PROFILE ROUTES (FIXED)
  ======================= */
  if (baseRoute === "profile") {
    if (pathname === "/profile") {
      breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "Account", path: "/profile" },
        { label: "Dashboard" },
      ];
    }

    if (pathname.startsWith("/profile/orders")) {
      breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "Account", path: "/profile" },
        { label: "Order History" },
      ];
    }

    if (pathname.startsWith("/profile/settings")) {
      breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "Account", path: "/profile" },
        { label: "Settings" },
      ];
    }
  }

  /* =======================
     PRODUCT DYNAMIC LABEL
  ======================= */
  if (baseRoute === "product" && productData) {
    const category = productData?.categoryId?.categoryName;
    const product = productData?.name;

    breadcrumbs = [
      { label: "Home", path: "/" },
      { label: "Categories", path: "/categories" },

      category && {
        label: category,
        path: `/categories?category=${encodeURIComponent(category)}`,
      },

      { label: product },
    ].filter(Boolean);
  }

  /* =======================
     UI LOGIC
  ======================= */
  const isCompactBreadcrumb =
    pathname.startsWith("/product/") || pathname.startsWith("/categories");

  const breadcrumbHeight = isCompactBreadcrumb
    ? "h-0 mb-10 -mt-5"
    : "h-[120px] sm:px-10 px-4 lg:px-20";

  /* =======================
     RENDER
  ======================= */
  return (
    <div className="flex items-center max-w-[1440px] 2xl:mx-auto">
      <div className={`flex items-center gap-2 text-sm ${breadcrumbHeight}`}>
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <div key={index} className="flex items-center gap-2 mt-16 md:mt-16 ">
              {index !== 0 && <IoIosArrowForward className="text-gray-400" />}

              {item.path && !isLast ? (
                <Link
                  to={item.path}
                  className="text-gray-400 sm:text-[16px] font-light text-[12px]"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#00B207] sm:text-[16px] font-light text-[12px] truncate">
                  {item.label}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Breadcrumb;
