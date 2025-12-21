// src/components/PromoBanners.jsx
import React from "react";
import Promo1 from "../assets/promo-1.png";
import Promo2 from "../assets/promo-2.png";
import Promo3 from "../assets/promo-3.png";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function PromoBanners() {
  const cardStyle = {
    width: "411.15px",
    height: "520px",
    minWidth: "411.15px",
    minHeight: "520px",
  };

  return (
    <section className="w-full pt-28 pb-28">
      <div className="mx-6">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-8">

          {/* CARD 1 */}
          <article className="relative overflow-hidden rounded-2xl shadow-sm" style={cardStyle}>
            <img src={Promo1} alt="Sale of the Month" className="absolute inset-0 h-full w-full object-cover" />

            <div className="relative z-10 flex h-full flex-col items-center justify-around px-10 py-8 text-center">
              <div>
                <p className="text-sm font-semibold tracking-widest text-white/90">
                  BEST DEALS
                </p>

                <h3 className="mt-6 text-4xl font-extrabold text-white">
                  Sale of the Month
                </h3>

                <div className="mt-8 flex justify-center gap-8 text-white">
                  {["00 DAYS", "02 HOURS", "18 MINS", "46 SECS"].map((t, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <span className="text-xl font-semibold">{t.split(" ")[0]}</span>
                      <span className="text-[11px]">{t.split(" ")[1]}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex justify-center">
                  <button className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#00B207] shadow-sm">
                    Shop Now <IoIosArrowRoundForward />
                  </button>
                </div>
              </div>
              <div className="h-40" />
            </div>
          </article>

          {/* CARD 2 */}
          <article className="relative overflow-hidden rounded-2xl shadow-sm" style={cardStyle}>
            <img src={Promo2} alt="Low-Fat Millets" className="absolute inset-0 h-full w-full object-cover" />

            <div className="relative z-10 flex h-full flex-col items-center justify-between px-10 py-8 text-center">
              <div>
                <p className="text-sm font-semibold tracking-widest text-black/70">
                  85% FAT FREE
                </p>

                <h3 className="mt-6 text-4xl font-extrabold text-black">
                  Low-Fat Millets
                </h3>

                <p className="mt-4 text-lg font-medium text-[#F97316]">
                  Started at <span className="font-semibold">₹140.00</span>
                </p>

                <div className="mt-8 flex justify-center">
                  <button className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#00B207] shadow-sm">
                    Shop Now <IoIosArrowRoundForward />
                  </button>
                </div>
              </div>
              <div className="h-40" />
            </div>
          </article>

          {/* CARD 3 */}
          <article className="relative overflow-hidden rounded-2xl shadow-sm" style={cardStyle}>
            <img src={Promo3} alt="100% Fresh Foods" className="absolute inset-0 h-full w-full object-cover" />

            <div className="relative z-10 flex h-full flex-col items-center justify-between px-10 py-8 text-center">
              <div>
                <p className="text-sm font-semibold tracking-widest text-black/70">
                  SUMMER SALE
                </p>

                <h3 className="mt-6 text-4xl font-extrabold text-black">
                  100% Fresh Foods
                </h3>

                <div className="mt-4 flex justify-center items-center gap-3">
                  <span className="text-base text-black/70">Up to</span>
                  <span className="rounded-md bg-black px-3 py-1 text-sm font-semibold text-[#FFD54A]">
                    64% OFF
                  </span>
                </div>

                <div className="mt-8 flex justify-center">
                  <button className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#00B207] shadow-sm">
                    Shop Now <IoIosArrowRoundForward />
                  </button>
                </div>
              </div>
              <div className="h-40" />
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
