import { memo, useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { useProducts } from "../../context/ProductContext";

const RatingFilter = memo(() => {
   const { setRatingFilter } = useProducts();
  const [rating, setRating] = useState(null);

  useEffect(() => {
    setRatingFilter(rating);
  }, [rating]);

  return (
    <section className="w-full">
      {/* ===== HEADER (WIDTH LOCKED) ===== */}
      <div
        className="
          relative
          w-full
          lg:w-[302px]
          flex
          items-center
          mb-4
        "
      >
        <h3 className="font-normal text-[20px]">Rating</h3>

        {/* FIXED RIGHT ARROW */}
        <IoIosArrowUp
          size={18}
          className="
            absolute
            right-0
            top-1/2
            -translate-y-1/2
            text-gray-700
          "
        />
      </div>

      {/* ===== RATING LIST ===== */}
      <div
        className="
          w-full
          lg:w-[302px]
          space-y-3
          text-sm
        "
      >
        {[5, 4, 3, 2, 1].map((value) => (
          <label
            key={value}
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={rating === value}
              onChange={() => setRating(prev => (prev === value ? null : value))}
              className="
               rounded-[2.91px]! h-[19px]! border-[0.97px]! border-solid! left-[unset]! w-[19px]! top-[unset]! accent-[#00B207]
              "
            />

            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-[13px] ${
                    i < value
                      ? "text-orange-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            <span className="text-gray-700">
              {value}.0 & up
            </span>
          </label>
        ))}
      </div>
    </section>
  );
});

export default RatingFilter;
