// src/components/BestSeller.jsx
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import PromoImg from "../assets/PromoImg.png"; // right-side promo image
import Prod1 from "../assets/ProductPlaceholder.png";
import Prod2 from "../assets/ProductPlaceholder.png";
import Prod3 from "../assets/ProductPlaceholder.png";
import Prod4 from "../assets/ProductPlaceholder.png";
import BestSellerImg from '../assets/Group.png';

const products = [
  { id: 1, name: "Coconut Oil", price: "₹96.00", oldPrice: "₹120.00", image: Prod1, rating: 4.3, reviews: 62 },
  { id: 2, name: "Groundnut Oil", price: "₹87.00", oldPrice: "₹110.00", image: Prod2, rating: 4.1, reviews: 52 },
  { id: 3, name: "Gingelly Oil", price: "₹122.00", oldPrice: "₹150.00", image: Prod3, rating: 4.2, reviews: 133 },
  { id: 4, name: "Dia Caare Millet Cookies", price: "₹96.00", oldPrice: "₹120.00", image: Prod4, rating: 4.5, reviews: 12 },
  { id: 5, name: "Almond Oil", price: "₹130.00", oldPrice: "₹160.00", image: Prod1, rating: 4.0, reviews: 22 },
  { id: 6, name: "Sunflower Oil", price: "₹90.00", oldPrice: "₹110.00", image: Prod2, rating: 4.4, reviews: 35 },
];

function RatingStars({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className="flex items-center gap-1">
      {Array(fullStars).fill(0).map((_, i) => <AiFillStar key={`full-${i}`} className="text-yellow-500 w-4 h-4" />)}
      {halfStar ? <AiOutlineStar className="text-yellow-500 w-4 h-4" /> : null}
      {Array(emptyStars).fill(0).map((_, i) => <AiOutlineStar key={`empty-${i}`} className="text-yellow-500 w-4 h-4" />)}
    </div>
  );
}

export default function BestSeller() {
  return (
    <section className="w-full pt-20 py-10">
      <div className="mx-20">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-extrabold text-gray-900">Best Seller</h2>
          <button className="flex items-center gap-2 text-sm font-semibold text-[#3b7c3a]">
            View All <BsArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Product grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => (
                <article
                  key={p.id}
                  className="relative flex flex-col rounded-md border border-gray-100 bg-white p-4 transition hover:border-[#00B207] hover:rounded-sm hover:shadow-[0_12px_30px_rgba(0,178,7,0.18)]"
                >
                  {/* Bestseller tag */}
                  <div className="absolute left-4 top-4 z-10">
                    <span className="inline-flex items-center gap-1 rounded-sm bg-transparent text-[13px] font-semibold text-[#ef6b58]">
                      <img src={BestSellerImg} alt="" />
                    </span>
                  </div>

                  {/* Product image */}
                  <div className="mb-3 mt-6 flex items-center justify-center">
                    <img src={p.image} alt={p.name} className="max-h-[160px] object-contain" />
                  </div>

                  {/* Product info */}
                  <div className="mt-2 flex flex-1 flex-col justify-end">
                    <p className="mb-2 text-sm font-medium text-gray-800">{p.name}</p>

                    {/* Price + Add to cart */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-base font-semibold text-gray-900">{p.price}</div>
                        <div className="text-sm text-gray-400 line-through">{p.oldPrice}</div>
                      </div>
                      <button
                        aria-label={`Add ${p.name} to cart`}
                        className="rounded-full bg-gray-50 p-2 text-gray-600 shadow-sm"
                      >
                        <HiShoppingCart className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Rating + Reviews */}
                    <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                      <RatingStars rating={p.rating} />
                      <div className="text-xs text-gray-400">({p.reviews} Reviews)</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Promo panel */}
          <aside className="order-first mb-4 lg:order-last lg:mb-0">
            <div className="mx-2 rounded-lg">
              <div className="h-full flex-col items-start justify-between gap-4 rounded-lg">
                <img src={PromoImg} alt="Promo" className="h-[660px] w-[464px] object-cover" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
