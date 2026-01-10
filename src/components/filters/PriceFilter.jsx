import { memo, useState, useMemo, useCallback } from "react";
import { IoIosArrowUp } from "react-icons/io";

const MIN_PRICE = 0;
const MAX_PRICE = 1000;

const PriceFilter = memo(() => {
  const [price, setPrice] = useState([MIN_PRICE, MAX_PRICE]);

  const minSelected = useMemo(() => Math.min(price[0], price[1]), [price]);
  const maxSelected = useMemo(() => Math.max(price[0], price[1]), [price]);

  const leftPercent =
    ((minSelected - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;

  const rightPercent =
    100 - ((maxSelected - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;

  const handleMin = useCallback(
    (e) => {
      const value = Math.min(+e.target.value, maxSelected);
      setPrice(([_, max]) => [value, max]);
    },
    [maxSelected]
  );

  const handleMax = useCallback(
    (e) => {
      const value = Math.max(+e.target.value, minSelected);
      setPrice(([min]) => [min, value]);
    },
    [minSelected]
  );

  return (
    <section>
      {/* ================= PRICE HEADER ================= */}
      <div
        className="
          flex items-center
          w-full
          sm:w-full
          md:w-full
          lg:w-[302.31px]
          xl:w-[320px]
          2xl:w-[340px]
          mb-4
        "
      >
        <h3 className="font-normal text-[20px]">Price</h3>

        {/* FIXED ARROW (RESPONSIVE SPACING) */}
        <IoIosArrowUp
        size={18}
          className="
            ml-auto
            mr-2
            sm:mr-3
            md:mr-4
            lg:mr-2
            xl:mr-3.5
            2xl:mr-4
          "
        />
      </div>

      {/* ================= SLIDER ================= */}
      <div
        className="
          relative
          w-full
          sm:w-full
          md:w-full
          lg:w-[302.31px]
          xl:w-[303px]
          2xl:w-[340px]
          h-[5.81px]
          bg-[#E6E6E6]
          rounded-[14.53px]
          pointer-events-none
        "
      >
        {/* ACTIVE RANGE */}
        <div
          className="absolute h-full bg-[#00B207] rounded-[14.53px]"
          style={{
            left: `${leftPercent}%`,
            right: `${rightPercent}%`,
          }}
        />

        {/* MIN SLIDER */}
        <input
          type="range"
          min={MIN_PRICE}
          max={MAX_PRICE}
          value={price[0]}
          onChange={handleMin}
          aria-label="Minimum Price"
          className="
            absolute top-1/2 -translate-y-1/2 w-full
            appearance-none bg-transparent pointer-events-none z-[3]

            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-[#00B207]
            [&::-webkit-slider-thumb]:shadow-md
            [&::-webkit-slider-thumb]:cursor-pointer

            [&::-moz-range-thumb]:pointer-events-auto
            [&::-moz-range-thumb]:w-5
            [&::-moz-range-thumb]:h-5
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-white
            [&::-moz-range-thumb]:border-2
            [&::-moz-range-thumb]:border-[#00B207]
            [&::-moz-range-thumb]:shadow-md
            [&::-moz-range-thumb]:cursor-pointer
          "
        />

        {/* MAX SLIDER */}
        <input
          type="range"
          min={MIN_PRICE}
          max={MAX_PRICE}
          value={price[1]}
          onChange={handleMax}
          aria-label="Maximum Price"
          className="
            absolute top-1/2 -translate-y-1/2 w-full
            appearance-none bg-transparent pointer-events-none z-[4]

            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-[#00B207]
            [&::-webkit-slider-thumb]:shadow-md
            [&::-webkit-slider-thumb]:cursor-pointer

            [&::-moz-range-thumb]:pointer-events-auto
            [&::-moz-range-thumb]:w-5
            [&::-moz-range-thumb]:h-5
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-white
            [&::-moz-range-thumb]:border-2
            [&::-moz-range-thumb]:border-[#00B207]
            [&::-moz-range-thumb]:shadow-md
            [&::-moz-range-thumb]:cursor-pointer
          "
        />
      </div>

      {/* ================= VALUE ================= */}
      <p className="mt-3 text-sm text-gray-700">
        Price:{" "}
        <span className="font-medium">
          {minSelected} – {maxSelected}
        </span>
      </p>
    </section>
  );
});

export default PriceFilter;
