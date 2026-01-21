import React from "react";
import HeroImg from "../assets/Img.png";
import Leaf1 from "../assets/heroleaf1.png";
import Leaf2 from "../assets/Top.png";
import Leaf3 from "../assets/leaf3.png";

import { FaTruck } from "react-icons/fa";
import {
  MdOutlineMilitaryTech,
  MdCreditScore,
  MdOutlineMacroOff,
} from "react-icons/md";

function Hero() {
  return (
    <section className="relative bg-white pt-4">

      {/* HERO CONTAINER */}
      <div
        className="
          relative
          mx-4 sm:mx-8 lg:mx-20
          bg-[#EDF2EE]
          xl:h-[670px]
          pb-[260px] sm:pb-[300px]
          md:pb-[220px] lg:pb-[240px] xl:pb-[260px]
        "
      >
        {/* XL DECORATIONS – UNTOUCHED */}
        <img
          src={Leaf1}
          alt=""
          className="absolute -top-0.5 left-4.5 w-16 xl:w-[65px] hidden xl:block pointer-events-none"
        />
        <img
          src={Leaf2}
          alt=""
          className="absolute bottom-20 right-14 w-14 xl:w-28 hidden xl:block pointer-events-none"
        />
        <img
          src={Leaf3}
          alt=""
          className="absolute bottom-[104px] left-80 w-16 xl:w-14 hidden xl:block pointer-events-none"
        />

        {/* MAIN CONTENT */}
        <div
          className="
            mx-auto max-w-7xl
            flex flex-col lg:flex-row
            items-center
            gap-6 sm:gap-8 md:gap-6 lg:gap-12
            px-4 sm:px-6
            pt-10 sm:pt-12 md:pt-10 lg:pt-14 xl:pt-20
            xl:pl-16 xl:pr-9
          "
        >
          {/* LEFT */}
          <div className="w-full lg:max-w-xl text-center lg:text-left xl:pl-2">
            <p
              className="
                pt-6 xl:pt-11
                text-[11px] uppercase tracking-wider
                text-[#00B207]
                lg:text-left
              "
            >
              Welcome to Vdo Naturalss
            </p>

            <h1
              className="
                mt-2
                text-[32px] sm:text-[40px]
                md:text-[44px]
                lg:text-[54px]
                xl:text-[72px]
                font-semibold leading-[1.15]
                text-gray-900
              "
            >
              Fresh, Healthy <br />
              Natural Foods
            </h1>

            <p
              className="
                mt-4
                text-[15px] sm:text-[17px]
                md:text-[18px]
                lg:text-[22px]
                xl:text-[32px]
                text-gray-900
              "
            >
              Sale up to{" "}
              <span className="font-semibold text-[#f97416c3]">30% OFF</span>
              <span className="block mt-1 text-[14px] font-light text-gray-500">
                We deliver, you enjoy!
              </span>
            </p>
          </div>

          {/* IMAGE – FLIPKART STYLE */}
          <div className="w-full flex justify-center">
            <img
              src={HeroImg}
              alt="Product basket"
              className="
                w-full
                max-w-[280px]
                sm:max-w-[360px]
                md:max-w-[380px]
                lg:max-w-[460px]
                xl:max-w-[560px]
              "
            />
          </div>
        </div>

        {/* FEATURE CARD – CONTROLLED, ATTACHED */}
        <div
          className="
            absolute left-1/2 -translate-x-1/2 bottom-0
            translate-y-[42%]
            sm:translate-y-[46%]
            md:translate-y-[34%]
            lg:translate-y-[40%]
            xl:translate-y-[50%]
            w-full
            max-w-[94%]
            sm:max-w-[560px]
            lg:max-w-[1204px]
          "
        >
          <div className="bg-white rounded-xl shadow-lg px-6 sm:px-8 lg:px-10 py-6 sm:py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <Feature icon={<MdOutlineMilitaryTech size={36} />} title="Best Quality" desc="Pure ingredients, homemade quality, for a healthier you!" />
              <Feature icon={<FaTruck size={34} />} title="Fast Delivery" desc="Get the fastest product delivery to your doorstep" />
              <Feature icon={<MdCreditScore size={30} />} title="100% Secure Payment" desc="We ensure your money is safe" />
              <Feature icon={<MdOutlineMacroOff size={34} />} title="No Preservative" desc="Made without any added artificial or chemical preservatives." />
            </div>
          </div>
        </div>
      </div>

      {/* SPACER */}
      <div className="h-[160px] sm:h-[200px] md:h-[180px] lg:h-[170px]" />
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-[#00B207]">{icon}</div>
      <div>
        <p className="font-semibold text-[15px]">{title}</p>
        <p className="text-sm text-[#999999] mt-1 font-light leading-snug">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default Hero;
