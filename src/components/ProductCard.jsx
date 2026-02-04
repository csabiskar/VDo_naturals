import { FaStar, FaRegStar } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import OfferBadge from "../assets/Offerbookmark.png";
import MilletNoodlesProduct from "../assets/MilletNoodlesProduct.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { memo, useCallback, useMemo } from "react";
function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);
  const [qty, setQty] = useState(0);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // add to wishlist
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const bestVariant = useMemo(() => {
    if (!product?.variants?.length) return null;

    return [...product.variants].sort(
      (a, b) => b.discountPercent - a.discountPercent,
    )[0];
  }, [product]);

  const isInWishlist = useMemo(() => {
    if (!product?._id) return false;

    return wishlist.some(
      (item) =>
        item.productId === product._id &&
        (bestVariant?.sku
          ? item.variantSku === bestVariant.sku
          : !item.variantSku),
    );
  }, [wishlist, product?._id, bestVariant?.sku]);

  const handleNavigate = useCallback(() => {
    navigate(`/product/${product._id}`);
  }, [navigate, product._id]);

  const handleWishlistToggle = useCallback(
    (e) => {
      e.stopPropagation(); // 🚫 stop card navigation

      if (!product?._id) return;

      const payload = {
        productId: product._id,
        ...(bestVariant?.sku && { variantSku: bestVariant.sku }),
      };

      if (isInWishlist) {
        removeFromWishlist(payload.productId);
      } else {
        addToWishlist(payload);
      }
    },
    [
      product?._id,
      bestVariant?.sku,
      isInWishlist,
      addToWishlist,
      removeFromWishlist,
    ],
  );

  console.log(product);

  return (
    <div
      className="
      w-full sm:w-full md:w-full lg:w-[283px] xl:w-[303px]
      h-[400px] bg-white border border-gray-200 rounded-[10px] 
      relative font-poppins text-[13.57px] text-dimgray overflow-hidden cursor-pointer
      hover:shadow-[0_12px_30px_rgba(0,178,7,0.18)] hover:border-[#00B207] hover:text-[#2C742F]
    "
      onClick={handleNavigate}
    >
      {/* Offer Badge */}
      {((product.variants?.length > 0 &&
        product.variants[0]?.discountPercent > 0) ||
        product.discountPercent > 0) && (
        <div
          className={`absolute top-0 left-4 z-10 w-[34px] ${pathname === "/" ? "h-10" : "h-8"}`}
        >
          <img src={OfferBadge} alt="offer" className="w-full h-full" />
          <div className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-white leading-[11px] text-center">
            {product.variants?.length > 0 &&
            product.variants[0]?.discountPercent > 0
              ? product.variants[0].discountPercent
              : product.discountPercent}
            % <br /> Off
          </div>
        </div>
      )}

      {/* Wishlist */}
      <button
        className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center z-10 cursor-pointer"
        onClick={handleWishlistToggle}
      >
        {isInWishlist ? (
          <AiFillHeart
            size={22}
            className="text-red-500 cursor-pointer"
            onClick={() => setLiked(false)}
          />
        ) : (
          <AiOutlineHeart
            size={22}
            className="text-black cursor-pointer"
            onClick={() => setLiked(true)}
          />
        )}
      </button>

      {/* Image */}
      <div className="h-[300px] w-full">
        <img
          src={product?.variants?.[0]?.images?.[1] || product?.images?.[2]}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 w-full px-3 py-2 bg-white">
        <div className="flex items-center justify-between gap-2">
          <div className="leading-[150%] truncate">{product.name}</div>
        </div>

        {/* Rating */}
        {/* Rating */}
        <div className="flex items-center gap-1.5 mt-1 text-xs text-gray-400">
          <div className="flex text-orange-500 gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <FaStar
                key={i}
                className={
                  i <= Math.round(product.averageRating || 0)
                    ? "text-orange-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>

          <span>({product.totalRatings || 0} Reviews)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-1 mt-1 text-[15.5px]">
          {/* DISPLAY PRICE */}
          {product.variants.length > 0 ? (
            product.variants[0].discountPercent > 0 ? (
              <span className="font-medium text-gray-800">
                ₹{product.variants[0].discountPrice.toFixed(0)}.00
              </span>
            ) : (
              <span className="font-medium text-gray-800">
                ₹{product.variants[0].price}.00
              </span>
            )
          ) : product.discountPercent > 0 ? (
            <span className="font-medium text-gray-800">
              ₹{product.discountPrice}.00
            </span>
          ) : (
            <span className="font-medium text-gray-800">
              ₹{product.price}.00
            </span>
          )}

          {/* LINE THROUGH */}
          {product.variants.length > 0
            ? product.variants[0].discountPercent > 0 && (
                <span className="text-darkgray line-through text-[13px]">
                  ₹{product.variants[0].price}.00
                </span>
              )
            : product.discountPercent > 0 && (
                <span className="text-gray-400 line-through text-[13px]">
                  ₹{product.price}.00
                </span>
              )}
        </div>
      </div>
    </div>
  );
}
export default memo(ProductCard);
