// src/components/HotDeals.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import OfferBadge from "../assets/Offerbookmark.png";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import IMG from "../assets/AllCategoryImg/Rice Seval.png";

export default function HotDeals() {
  const { products, loading } = useProducts();
  const { pathname } = useLocation();

  const [likedIds, setLikedIds] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);

  /* ---------------- FILTER HOT DEALS ---------------- */
  const hotDeals = useMemo(() => {
    if (!products?.length) return [];
    return products.filter(
      (p) => p.hasVariants && p.variants?.some((v) => v.discountPercent > 0)
    );
  }, [products]);

  const featuredProduct = hotDeals[activeIndex];

  const getBestVariant = (product) =>
    [...product.variants].sort(
      (a, b) => b.discountPercent - a.discountPercent
    )[0];

  const featuredVariant = featuredProduct
    ? getBestVariant(featuredProduct)
    : null;

  const rightProducts = hotDeals
    .filter((_, i) => i !== activeIndex)
    .slice(0, 6);

  /* ---------------- COUNTDOWN ---------------- */
  useEffect(() => {
    if (!featuredProduct) return;

    setTimeLeft(24 * 60 * 60);
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setActiveIndex((i) => (i + 1) % hotDeals.length);
          return 24 * 60 * 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [featuredProduct, hotDeals.length]);

  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const mins = Math.floor((timeLeft % 3600) / 60);
  const secs = timeLeft % 60;

  const toggleLike = (id) => {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  if (loading || !featuredProduct || !featuredVariant) return null;

  return (
    <section className="w-full px-4 sm:px-6 xl:px-8 py-10">
      <div className="max-w-full mx-4 sm:mx-8 lg:mx-12">
        {/* TITLE */}
        <h2 className="text-[32px] font-semibold  text-gray-900 mb-8 ">
          Hot Deals
        </h2>

        <div className="flex flex-col xl:flex-row gap-2 xl:gap-0">
          {/* ================= LEFT FEATURED CARD ================= */}
          <article
            className="
              group relative bg-white rounded-md
              w-full
              xl:w-[511px] xl:min-w-[511px] xl:h-[746px]
            "
          >
            <div
              className="
                relative h-full w-full p-6 border border-gray-100
                transition-all
                group-hover:shadow-[0_12px_30px_rgba(0,178,7,0.18)]
                group-hover:border-[#00B207]
              "
            >
              {/* OFFER BADGE */}
              <div className="absolute top-0 left-2.5 z-10 w-[34px] h-11 xl:w-11 xl:h-11">
                <img src={OfferBadge} alt="offer" className="w-11 h-[50px]" />
                <div className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-white">
                  {featuredVariant.discountPercent}% <br /> Off
                </div>
              </div>

              {/* HEART */}
              <button
                onClick={() => toggleLike(featuredProduct._id)}
                className="absolute top-2 right-2 w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center"
              >
                {likedIds.includes(featuredProduct._id) ? (
                  <AiFillHeart size={22} className="text-red-500" />
                ) : (
                  <AiOutlineHeart size={28} />
                )}
              </button>

              {/* COUNTDOWN */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center">
                <p className="text-sm font-light text-gray-400">
                  Hurry up! Offer ends In:
                </p>
                <div className="flex justify-center items-center gap-9 mt-2">
                  {[days, hours, mins, secs].map((v, i) => (
                    <div key={i} className="flex items-center">
                      {/* TIME BLOCK */}
                      <div className="text-center">
                        <p className="text-lg font-medium leading-none">
                          {String(v).padStart(2, "0")}
                        </p>
                        <span className="text-[10px] text-gray-400">
                          {["DAYS", "HOURS", "MINS", "SECS"][i]}
                        </span>
                      </div>

                      {/* COLON AFTER HOURS ONLY */}
                      {i === 1 && (
                        <span className="mx-3 absolute right-[90px] bottom-6 text-xl font-medium text-gray-800 leading-none">
                          :
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* IMAGE */}
              <div className="flex justify-center items-center xl:mt-12 h-[420px]">
                <img
                  src={IMG}
                  alt={featuredProduct.name}
                  className="object-cover w-[360px] h-[360px]"
                />
              </div>

              {/* INFO */}
              <div className="text-center mt-8 xl:pl-2">
                <h3 className="text-xl font-medium text-[#4D4D4D] group-hover:text-[#2C742F]">
                  {featuredProduct.name}
                </h3>

                {/* RATING */}
                <div className="flex justify-center gap-1 mt-2 xl:pr-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <FaStar
                      key={i}
                      size={14}
                      className={
                        i <= featuredProduct.averageRating
                          ? "text-[#FF8A00]"
                          : "text-[#CCCCCC]"
                      }
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">
                    ({featuredProduct.totalRatings} Reviews)
                  </span>
                </div>

                {/* PRICE */}
                <div className="flex justify-center gap-2 mt-5">
                  <span className="text-3xl text-gray-900">
                    ₹{featuredVariant.discountPrice.toFixed()}.00
                  </span>
                  <span className="text-3xl text-[#999999] line-through">
                    ₹{featuredVariant.price}.00
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* ================= RIGHT PRODUCTS ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 xl:gap-0 w-full">
            {rightProducts.map((product) => {
              const variant = getBestVariant(product);

              return (
                <article
                  key={product._id}
                  className="
                    relative bg-white p-3 border border-gray-100
                    transition-all
                    hover:shadow-[0_12px_30px_rgba(0,178,7,0.18)]
                    hover:border-[#00B207]
                    w-full xl:w-[256px] xl:h-[370px]
                  "
                >
                  {/* OFFER BADGE */}
                  <div className="absolute top-0 left-4 w-[34px] h-10 z-10">
                    <img
                      src={OfferBadge}
                      alt="offer"
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-white">
                      {variant.discountPercent}% <br /> Off
                    </div>
                  </div>

                  {/* HEART */}
                  <button
                    onClick={() => toggleLike(product._id)}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center"
                  >
                    {likedIds.includes(product._id) ? (
                      <AiFillHeart size={20} className="text-red-500" />
                    ) : (
                      <AiOutlineHeart size={20} />
                    )}
                  </button>

                  {/* IMAGE */}
                  <div className="flex justify-center mt-10 mb-3">
                    <img
                      src={IMG}
                      alt={product.name}
                      className="object-cover"
                    />
                  </div>

                  {/* INFO */}
                  <p className="text-sm pr-2 text-[#4D4D4D] ">{product.name}</p>

                  <div className="flex gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <FaStar
                        key={i}
                        size={12}
                        className={
                          i <= product.averageRating
                            ? "text-[#FF8A00]"
                            : "text-[#CCCCCC]"
                        }
                      />
                    ))}
                  </div>

                  <div className="flex gap-1 mt-1.5">
                    <span className="font-medium">
                      ₹{variant.discountPrice}.00
                    </span>
                    <span className="line-through text-[#808080] text-[13px]">
                      ₹{variant.price}.00
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
