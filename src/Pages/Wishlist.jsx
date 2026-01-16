import cookie from "../assets/Cookies.png";
import HairOil from "../assets/HairOil.png";
import PongalMix from "../assets/PongalMix.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useWishlist } from "../context/WishlistContext";
import { useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { showToast } from "../utils/toast";
import { useNavigate } from "react-router-dom";

/* ===== SHIFT CONTROL ===== */
const PRICE_SHIFT = "lg:pl-[26px]";
const STOCK_SHIFT = "lg:pl-[82px]";
const ACTION_SHIFT = "lg:pr-[0px]";

export default function Wishlist() {
  const { wishlist, loading, fetchWishlist, removeFromWishlist } =
    useWishlist();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const navigate = useNavigate();
  const handleAddToCart = async (item) => {
    try {
      const payload = {
        productId: item.productId,
        quantity: 1,
        ...(item.variantSku
          ? { variantSku: item.variantSku, hasVariants: true }
          : {}),
      };

      await addToCart(payload);
      showToast("Product added to cart successfully.", "success");
    } catch (err) {
      console.error("Add to cart from wishlist failed", err);
    }
  };

  console.log(wishlist)

  if (loading) return <p className="text-center py-10">Loading wishlist...</p>;
  if (!loading && wishlist.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <p className="text-xl font-semibold text-gray-800">
          Your wishlist is empty
        </p>
        <p className="text-gray-500 mt-2">
          Add items you love to your wishlist and find them here later.
        </p>
        <button
          className="bg-[#00B207] hover:bg-green-600 cursor-pointer text-white px-8 py-3 rounded-full text-sm mt-3 font-medium transition"
          onClick={() => navigate("/categories")}
        >
          Shop now
        </button>
      </div>
    );
  }

  return (
    <div className="min-w-screen min-h-screen mx-auto lg:px-20 px-4 pt-5 pb-23">
      <h1 className="text-[32px] font-semibold text-gray-900 mb-7">
        My Wishlist
      </h1>

      {/* SMALL SCREEN */}
      <div className="space-y-4 sm:block md:hidden">
        {wishlist.map((item,i) => {
          const isInStock = item.stock > 0;
          return (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-lg p-4 flex gap-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-contain"
              />
              <div className="flex-1 space-y-2">
                <h3 className="text-gray-900 font-medium">
                  {item.variantSku
                    ? `${item.name}${
                        item.attributes?.weight
                          ? ` (${item.attributes.weight})`
                          : ""
                      }`
                    : item.name}
                </h3>

                <div className="flex items-center gap-2 text-sm">
                  {item.discountPrice ? (
                    <>
                      ₹{item.discountPrice.toFixed(2)}
                      <span className="line-through text-medium text-gray-400">
                        ₹{item.price.toFixed(2)}
                      </span>
                      {item.discount && (
                        <span className="bg-[#EA4B48] text-white text-xs px-2 py-1.5 rounded">
                          {item.discount}
                        </span>
                      )}
                    </>
                  ) : (
                    <>₹{item.price.toFixed(2)}</>
                  )}
                </div>

                <div>
                  {isInStock ? (
                    <span className="bg-green-100 text-green-700 px-2 py-1 text-xs rounded">
                      In Stock
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-500 px-2 py-1 text-xs rounded">
                      Out of Stock
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    disabled={!isInStock}
                    onClick={() => handleAddToCart(item)}
                    className={`px-4 py-2 text-xs font-semibold rounded  ${
                      isInStock
                        ? "bg-[#00B207] text-white cursor-pointer"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Add to Cart
                  </button>

                  <RiDeleteBin6Line
                    className="text-xl text-gray-600 cursor-pointer"
                    onClick={() => removeFromWishlist(item.productId)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* MEDIUM SCREEN */}
      <div className="hidden md:block lg:hidden border border-gray-200 rounded-md bg-white">
        {wishlist.map((item, index) => {
          const isInStock = item.stock > 0;
          return (
            <div key={index}>
              <div className="grid grid-cols-[2fr_1fr_1fr_1.2fr] px-6 py-6 items-center">
                {/* PRODUCT */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain"
                  />
                  <span className="text-gray-800 text-sm">
                    {item.variantSku
                      ? `${item.name}${
                          item.attributes?.weight
                            ? ` (${item.attributes.weight})`
                            : ""
                        }`
                      : item.name}
                  </span>
                </div>

                {/* PRICE */}
                <div className="text-sm">
                  {item.discountPrice ? (
                    <>
                      ₹{item.discountPrice.toFixed(2)}
                      <span className="line-through text-medium text-gray-400">
                        ₹{item.price.toFixed(2)}
                      </span>
                      {item.discount && (
                        <span className="bg-[#EA4B48] text-white text-xs px-2 py-1.5 rounded">
                          {item.discount}
                        </span>
                      )}
                    </>
                  ) : (
                    <>₹{item.price.toFixed(2)}</>
                  )}
                </div>

                {/* STOCK */}
                <div>
                  {isInStock ? (
                    <span className="bg-green-100 text-green-700 px-2 py-1 text-xs rounded">
                      In Stock
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-500 px-2 py-1 text-xs rounded">
                      Out of Stock
                    </span>
                  )}
                </div>

                {/* ACTION */}
                <div className="flex justify-end gap-4">
                  <button
                    disabled={!isInStock}
                    onClick={() => handleAddToCart(item)}
                    className={`px-4 py-2 text-xs rounded  ${
                      isInStock
                        ? "bg-[#00B207] text-white cursor-pointer"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Add
                  </button>

                  <RiDeleteBin6Line
                    className="text-lg text-gray-600 cursor-pointer"
                    onClick={() => removeFromWishlist(item.productId)}
                  />
                </div>
              </div>

              {index !== wishlist.length - 1 && (
                <div className="px-6">
                  <div className="h-px bg-gray-200" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* LARGE SCREEN */}
      <div className="hidden lg:block border border-gray-200 rounded-md bg-white overflow-hidden mb-32">
        {/* HEADER */}
        <div className="grid grid-cols-[2.5fr_1.5fr_1.5fr_2fr] px-14 h-[45px] border-b tracking-wider border-gray-200 items-center text-[#808080] text-sm">
          <div>PRODUCT</div>
          <div className={PRICE_SHIFT}>PRICE</div>
          <div className={STOCK_SHIFT}>STOCK STATUS</div>
          <div className="justify-self-end"></div>
        </div>

        {wishlist.map((item, index) => {
          const isInStock = item.stock > 0;
          return (
            <div key={index}>
              <div className="grid grid-cols-[2.5fr_1.5fr_1.5fr_2fr] px-12 h-[124px] items-center">
                {/* PRODUCT */}
                <div className="flex items-center gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-24 object-contain"
                  />
                  <span className="text-gray-800 font-light">
                    {item.variantSku
                      ? `${item.name}${
                          item.attributes?.weight
                            ? ` (${item.attributes.weight})`
                            : ""
                        }`
                      : item.name}
                  </span>
                </div>

                {/* PRICE */}
                <div className={`flex items-center gap-1 ${PRICE_SHIFT}`}>
                  {item.discountPrice ? (
                    <>
                      ₹{item.discountPrice.toFixed(2)}
                      <span className="line-through text-medium text-gray-400">
                        ₹{item.price.toFixed(2)}
                      </span>
                      {item.discount && (
                        <span className="bg-[#EA4B48] text-white text-xs px-2 py-1.5 rounded">
                          {item.discount}
                        </span>
                      )}
                    </>
                  ) : (
                    <>₹{item.price.toFixed(2)}</>
                  )}
                </div>

                {/* STOCK */}
                <div className={STOCK_SHIFT}>
                  {isInStock ? (
                    <span className="bg-[#21bb2643] text-green-700 px-2 py-1.5 rounded-sm text-sm">
                      In Stock
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-500 p-2 px-1 py-1.5 rounded-sm text-sm">
                      Out of Stock
                    </span>
                  )}
                </div>

                {/* ACTION */}
                <div className="flex justify-end gap-6">
                  <button
                    disabled={!isInStock}
                    onClick={() => handleAddToCart(item)}
                    className={`px-8 py-3 text-sm rounded-sm  ${
                      isInStock
                        ? "bg-[#00B207] text-white cursor-pointer"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Add to Cart
                  </button>

                  <RiDeleteBin6Line
                    className="text-2xl text-black cursor-pointer"
                    onClick={() => removeFromWishlist(item.productId)}
                  />
                </div>
              </div>

              {index !== wishlist.length - 1 && (
                <div className="px-10">
                  <div className="h-px bg-gray-200" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
