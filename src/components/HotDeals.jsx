// src/components/HotDeals.jsx
import React from "react";
import ProdBig from "../assets/ProductPlaceholder.png"; // featured big image (replace)
import P1 from "../assets/ProductPlaceholder.png";
import P2 from "../assets/ProductPlaceholder.png";
import P3 from "../assets/ProductPlaceholder.png";
import P4 from "../assets/ProductPlaceholder.png";
import P5 from "../assets/ProductPlaceholder.png";
import P6 from "../assets/ProductPlaceholder.png";
import { IoIosArrowRoundForward } from "react-icons/io";

// Helper star component — filled if index < filledCount
function Star({ filled = false, size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill={filled ? "#f59e0b" : "none"}
      stroke="#f59e0b"
      className="inline-block"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 1.5l2.59 5.25L18 8.1l-4 3.9L15.18 18 10 15.1 4.82 18 6 12l-4-3.9 5.41-.35L10 1.5z"
        strokeWidth="0"
      />
    </svg>
  );
}

// round a rating (0-5) to show filled stars (we'll show full filled count)
function renderStars(rating) {
  const filled = Math.round(rating);
  const arr = Array.from({ length: 5 }, (_, i) => i < filled);
  return arr.map((f, idx) => <Star key={idx} filled={f} size={16} />);
}

const products = [
  {
    id: 1,
    name: "Coconut Oil",
    price: "₹96.00",
    oldPrice: "₹150.00",
    image: P1,
    rating: 4.6,
    reviews: 524,
  },
  {
    id: 2,
    name: "Groundnut Oil",
    price: "₹87.00",
    oldPrice: "₹110.00",
    image: P2,
    rating: 4.1,
    reviews: 62,
  },
  {
    id: 3,
    name: "Saamai Noodles (Little Millet)",
    price: "₹53.00",
    oldPrice: "₹70.00",
    image: P3,
    rating: 4.2,
    reviews: 52,
  },
  {
    id: 4,
    name: "Herbal Hair Oil",
    price: "₹132.00",
    oldPrice: "₹0",
    image: P4,
    rating: 4.4,
    reviews: 24,
  },
  {
    id: 5,
    name: "Children's Choice Millet Cookies",
    price: "₹53.00",
    oldPrice: "₹0",
    image: P5,
    rating: 4.0,
    reviews: 80,
  },
  {
    id: 6,
    name: "Raagi Sevai",
    price: "₹35.00",
    oldPrice: "₹0",
    image: P6,
    rating: 4.1,
    reviews: 45,
  },
];

export default function HotDeals() {
  return (
    <section className="w-full px-8 py-10">
      <div className="mx-6 max-w-full">
        {/* Title Row */}
        <div className="mb-6 flex items-center justify-between px-6">
          <h2 className="text-3xl font-extrabold text-gray-900">Hot Deals</h2>
          <button className="text-sm font-semibold text-[#16a34a] flex items-center gap-2">
            View All
            <IoIosArrowRoundForward size={20} />
          </button>
        </div>

        {/* Main layout: left large card + right smaller cards grid */}
        <div className="flex gap-1 px-6">
          {/* LEFT FEATURED CARD (exact size: 511 x 636) */}
          <article
            className="group relative flex flex-col rounded-md border border-[#FFFFFF] bg-white transition-transform"
            style={{
              width: "511px",
              height: "636px",
              minWidth: "511px",
            }}
          >
            {/* inner container: hover styles applied via group-hover */}
            <div className="relative h-full w-full  p-6 transition-all border border-gray-100 group-hover:shadow-lg group-hover:border-[#00B207]">
              {/* positioned Sale badge (left) and centered countdown */}
              <div className="relative h-[48px]">
                {/* Sale badge left */}
                <div className="absolute left-6 top-0 rounded-sm bg-[#EA4B48] px-3 py-1 text-white text-sm font-semibold">
                  Sale 50%
                </div>

                {/* Countdown centered horizontally */}
                <div className="absolute top-0 left-64 -translate-x-1/2 text-center">
                  <div className="text-md text-gray-500">Hurry up! Offer ends In:</div>
                  <div className="mt-1 flex gap-4 text-black">
                    <div className="flex flex-col items-center">
                      <span className="font-medium text-lg">01</span>
                      <span className="text-[10px] text-gray-400">DAYS</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <span className="font-medium text-lg">23</span>
                      <span className="text-[10px] text-gray-400">HOURS</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-medium text-lg">34</span>
                      <span className="text-[10px] text-gray-400">MINS</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-medium text-lg">57</span>
                      <span className="text-[10px] text-gray-400">SECS</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* large product image centered */}
              <div className="flex flex-1 items-center justify-center">
                <img
                  src={ProdBig}
                  alt="Featured product"
                  className="object-contain"
                  style={{ width: "360px", height: "360px" }}
                />
              </div>

              {/* product title / price / stars */}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#00B207] transition-colors">
                  Coconut Oil
                </h3>
                <div className="mt-3 flex items-center justify-center gap-3">
                  <div className="text-2xl font-semibold text-gray-900">₹96.00</div>
                  <div className="text-sm text-gray-400 line-through">₹150.00</div>
                </div>
                <div className="mt-3 flex items-center justify-center gap-2 text-sm">
                  <div className="flex items-center gap-1">{renderStars(4.6)}</div>
                  <div className="text-xs text-gray-500">({524} Reviews)</div>
                </div>
              </div>

              {/* bottom action row: heart first, then Add to Cart */}
              <div className="mt-6 flex items-center gap-2  justify-center">
                {/* left: wishlist heart first */}
                <div className="flex items-center gap-3">
                  <button
                    aria-label="Add to wishlist"
                    className="rounded-full  border border-gray-200 p-3 text-gray-600 hover:text-[#00B207] transition"
                  >
                    {/* wishlist heart icon (SVG) */}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20.8 4.6a4.6 4.6 0 0 0-6.5 0L12 7l-2.3-2.4a4.6 4.6 0 1 0-6.5 6.5L12 22l8.8-10.9a4.6 4.6 0 0 0 0-6.5z" />
                    </svg>
                  </button>
                </div>

                {/* right: Add to Cart button */}
                <button
                  className="flex justify-center items-center gap-2 rounded-full w-96 h-11 bg-[#00B207] px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-[#0f8a11] transition"
                  aria-label="Add featured item to cart"
                >
                  Add to Cart
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className=""
                  >
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 7h13" />
                  </svg>
                </button>
              </div>
            </div>
          </article>

          {/* RIGHT SMALL CARDS (each fixed 257 x 317) */}
          <div className="grid grid-cols-3 gap-2">
            {products.map((p) => (
              <article
                key={p.id}
                className="relative border border-gray-100 bg-white p-4 transition-all hover:shadow-lg hover:border-[#00B207]"
                style={{ width: "257px", height: "317px" }}
              >
                {/* product image */}
                <div className="mt-6 mb-3 flex items-center justify-center">
                  <img src={p.image} alt={p.name} className="object-cover" />
                </div>

                {/* product info */}
                <div className="mt-1">
                  <p className="text-sm font-medium text-gray-800 hover:text-[#00B207] transition-colors">
                    {p.name}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <div>
                      <div className="text-base font-semibold text-gray-900">
                        {p.price}
                      </div>
                      {p.oldPrice && p.oldPrice !== "0" && (
                        <div className="text-xs text-gray-400 line-through">{p.oldPrice}</div>
                      )}
                    </div>

                    <button
                      aria-label={`Add ${p.name} to cart`}
                      className="rounded-full bg-gray-50 p-2 text-gray-600 shadow-sm"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 7h13"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* rating + reviews: same line */}
                  <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                    <div className="flex items-center gap-1">{renderStars(p.rating)}</div>
                    <div className="text-xs text-gray-400">({p.reviews} Reviews)</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
