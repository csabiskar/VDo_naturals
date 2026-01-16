import { IoIosArrowForward } from "react-icons/io";
import { useLocation, Link, useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { useProducts } from "../context/ProductContext";

const breadcrumbConfig = {
  shoppingcart: [
    { label: "Home", path: "/" },
    { label: "Shopping Cart", path: "/shoppingcart" },
  ],
  checkout: [
    { label: "Home", path: "/" },
    { label: "Shopping cart", path: "/shoppingcart" },
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
};

function Breadcrumb() {
  const location = useLocation();
  const { pathname } = location;
  const { id } = useParams();
  const { fetchProductById } = useProducts();

  const [productName, setProductName] = useState("");

  const baseRoute = useMemo(
    () => pathname.split("/")[1],
    [pathname]
  );

  /* ✅ ALWAYS call useEffect */
  useEffect(() => {
    let mounted = true;

    const loadProduct = async () => {
      if (baseRoute !== "product" || !id) {
        setProductName("");
        return;
      }

      try {
        const res = await fetchProductById(id);
        if (mounted && res?.product?.name) {
          setProductName(res.product.name);
        }
      } catch (err) {
        console.error("Breadcrumb product fetch failed", err);
      }
    };

    loadProduct();

    return () => {
      mounted = false;
    };
  }, [baseRoute, id, fetchProductById]);

  /* ✅ AFTER hooks — safe early exits */
  if (pathname === "/") return null;

  let breadcrumbs = breadcrumbConfig[baseRoute];
  if (!breadcrumbs) return null;

  if (baseRoute === "product" && productName) {
    breadcrumbs = [...breadcrumbs, { label: productName }];
  }

  const breadcrumbHeight = pathname.startsWith("/product/")
    ? "h-0 mb-10 -mt-5"
    : "h-[120px] sm:px-10 px-4 lg:px-20";

  return (
    <div className="flex items-center">
      <div className={`flex items-center gap-2 text-sm ${breadcrumbHeight}`}>
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <div key={index} className="flex items-center gap-2 md:mt-16">
              {index === 0 ? (
                <Link
                  to="/"
                  className="text-[#808080] text-[16px] font-light"
                >
                  Home
                </Link>
              ) : (
                <>
                  <IoIosArrowForward className="text-gray-400" />
                  {isLast ? (
                    <span className="text-[#00B207] text-[16px] font-light">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-gray-400 text-[16px] cursor-pointer"
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
