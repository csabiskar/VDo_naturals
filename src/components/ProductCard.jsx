import { FaStar, FaRegStar, FaHeart } from "react-icons/fa";
import OfferBadge from "../assets/Offerbookmark.png";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [color, setColor] = useState(false);
  return (
    <div className="w-[303px] h-[400px] bg-white border border-gray-200 rounded-[10px] relative font-poppins text-[13.57px] text-dimgray overflow-hidden">
      {/* Discount badge */}
      {product.offer && (
        <div className="absolute top-0 left-4 z-10 w-[33px] h-8">
          <img src={OfferBadge} alt="offer" className="w-full h-full" />
          <div className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-white leading-[11px] text-center">
            {product.offer}% <br /> Off
          </div>
        </div>
      )}

      {/* Wishlist */}
      <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center z-10">
        {color ? (
          <AiFillHeart
            size={24}
            className="text-red-500/90 cursor-pointer"
            onClick={() => setColor(false)}
          />
        ) : (
          <AiOutlineHeart
            size={24}
            className="text-black cursor-pointer"
            onClick={() => setColor(true)}
          />
        )}
      </button>

      {/* Image (top 75%) */}
      <div className="h-[300px] w-full">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 w-full px-3 py-2 bg-white">
        {/* Name */}
        <div className="leading-[150%]">{product.name}</div>

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

        {/* Price + ADD */}
        <div className="flex items-center justify-between mt-2">
          {/* Price */}
          <div className="flex items-center gap-0.5 text-[15.5px]">
            <span className="font-medium text-gray-800">
              ₹{product.price}.00
            </span>
            <span className="text-darkgray line-through text-[13px]">
              ₹{product.oldPrice}.00
            </span>
          </div>

          {/* ADD Button */}
          <button className="px-4 py-1.5 text-[15px] font-semibold rounded-[5px] bg-[#E7F7E8] border border-[#00B207] text-[#00B207] hover:bg-[#00B207] hover:text-white transition">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
