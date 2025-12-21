// src/components/HeroBanner.jsx
import React from "react";
import HeroBG from "../assets/square1.png";
import ProductsImg from "../assets/BannerImg.png";
import DotsImg from "../assets/Rounds.png";

export default function HeroBanner() {
  return (
    <section className="w-full pt-20 pb-36">
      <div
        className="relative overflow-hidden bg-[#F9F4EC] max-w-7xl min-h-[420px] mx-auto rounded-xl"
        style={{
          backgroundImage: `url(${HeroBG})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "contain",
        }}
      >
        {/* Dots BG left */}
        <img
          src={DotsImg}
          alt=""
          className="absolute left-1  opacity-30 w-96"
        />

        {/* MAIN CONTENT */}
        <div className="relative flex min-h-[380px] items-center justify-between px-14">
          
          {/* LEFT TEXT */}
          <div className="max-w-md z-10 pl-20">
            <p className="mb-1 text-sm font-semibold tracking-widest text-gray-700">
              SUMMER SALE
            </p>

            <h1 className="mb-3 flex items-end gap-3">
              <span className="text-5xl font-extrabold text-orange-500">
                37%
              </span>
              <span className="pb-1 text-3xl font-semibold text-black">
                OFF
              </span>
            </h1>

            <p className="mb-5 text-base text-gray-700 leading-relaxed">
              Free on all your order, Free Shipping and 
              30 days money-back guarantee
            </p>

            <button className="inline-flex items-center gap-3 rounded-full bg-[#00B207] px-7 py-3 text-white text-base font-semibold hover:bg-[#0f8a11] transition">
              Shop Now
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* RIGHT PRODUCT IMAGE */}
          <div className="relative flex-1 h-full flex justify-center items-end pr-32">
            <img
              src={ProductsImg}
              alt="Products"
              className="w-[662px] max-w-none absolute -top-[180px] -right-12 translate-x-[-40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
