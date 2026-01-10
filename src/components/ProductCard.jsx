import { FaStar, FaRegStar } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import OfferBadge from "../assets/Offerbookmark.png";
import MilletNoodlesProduct from "../assets/MilletNoodlesProduct.png"
import { useNavigate } from "react-router-dom";


export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);
  const [qty, setQty] = useState(0);
  const navigate = useNavigate()

  return (
    <div
      className="
      w-full sm:w-full md:w-full lg:w-[283px] xl:w-[303px]
      h-[400px] bg-white border border-gray-200 rounded-[10px] 
      relative font-poppins text-[13.57px] text-dimgray overflow-hidden cursor-pointer
    "
    onClick={()=> navigate(`/product/${product._id}`)}
    >
      {/* Offer Badge */}
      {((product.variants?.length > 0 &&
        product.variants[0]?.discountPercent > 0) ||
        product.discountPercent > 0) && (
        <div className="absolute top-0 left-4 z-10 w-[33px] h-8">
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
      <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center z-10">
        {liked ? (
          <AiFillHeart
            size={22}
            className="text-red-500"
            onClick={() => setLiked(false)}
          />
        ) : (
          <AiOutlineHeart
            size={22}
            className="text-black"
            onClick={() => setLiked(true)}
          />
        )}
      </button>

      {/* Image */}
      <div className="h-[300px] w-full">
        <img
          src={product?.variants?.[0]?.images?.[0]}
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
        <div className="flex items-center gap-1 mt-1 text-xs text-gray-400">
          <div className="flex text-orange-500">
            {[1, 2, 3, 4, 5].map((i) =>
              i <= product.rating ? (
                <FaStar key={i} size={12} />
              ) : (
                <FaRegStar key={i} size={12} />
              )
            )}
          </div>
          <span>({product.reviews} Reviews)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-1 mt-1 text-[15.5px]">
          {product.variants.length > 0 &&
          product.variants[0].discountPercent > 0 ? (
            <span className="font-medium text-gray-800">
              ₹{product.variants[0].discountPrice.toFixed()}.00
            </span>
          ) : (
            <span className="font-medium text-gray-800">
              ₹
              {product.variants.length > 0
                ? product.variants[0].price
                : product.price}
              .00
            </span>
          )}

          {product.variants.length > 0 &&
          product.variants[0].discountPercent > 0 ? (
            <span className="text-darkgray line-through text-[13px]">
              ₹{product.variants[0].price}.00
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
