// src/components/HeroBanner.jsx
import React from "react";
import HeroBG from "../assets/square1.png";
import ProductsImg from "../assets/BannerImg.png";
import DotsImg from "../assets/Rounds2.png";
import Grid from "../assets/grid.png";

export default function HeroBanner() {
  return (
    <section className="w-full pt-20 pb-16">
      <div
        className="relative overflow-hidden bg-[#F9F4EC] max-w-7xl min-h-[420px] mx-auto"
      >
        {/* Dots BG left */}
        <img
          src={DotsImg}
          alt=""
          className="absolute left-0   opacity-30 w-md"
        />

        {/* MAIN CONTENT */}
        <div className="relative flex min-h-[380px] sm:flex-row-reverse lg:flex-row  items-center justify-between px-5">
          
          {/* LEFT TEXT */}
          <div className="max-w-md z-10 pl-20 leading-12">
            <p className="mb-1 text-[16px] font-normal tracking-widest  text-black">
              SUMMER SALE
            </p>

            <h1 className="mb-3 flex items-end gap-3">
              <span className="text-[56px] font-semibold text-[#FF8A00]">
                37%
              </span>
              <span className="pb-1 text-[56px]  font-light text-black">
                OFF
              </span>
            </h1>

            <p className="mb-5 text-base text-black leading-relaxed mt-8">
             Free Shipping | We deliver, you enjoy!
            </p>

            <button className="inline-flex items-center gap-3 rounded-sm bg-[#00B207] px-10 py-3 text-white text-base font-semibold hover:bg-[#0f8a11] transition">
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
          <div>
            <img src={Grid} className="w-[650px] absolute right-0 top-0" alt="" />
          </div>
          <div className="relative flex-1 h-full flex justify-center items-end">
            <img
              src={ProductsImg}
              alt="Products"
              className="w-[716px] max-w-none absolute -top-[210px] -right-14 translate-x-[-40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
