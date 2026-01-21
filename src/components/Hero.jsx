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
          pb-[260px] sm:pb-[300px] lg:pb-[260px] xl:pb-[260px]
        "
      >
        {/* DECORATIVE LEAVES (XL ONLY – NO CHANGE) */}
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
            flex flex-col lg:flex-row items-center
            gap-8 sm:gap-10 lg:gap-12
            px-4 sm:px-6
            pt-10 sm:pt-12 lg:pt-16 xl:pt-20
            xl:pl-16 xl:pr-9
          "
        >
          {/* LEFT CONTENT */}
          <div className="w-full lg:max-w-xl">
            <p
              className="
                pt-8 xl:pt-11
                px-1 py-1.5 xl:pl-2
                text-[11px] uppercase tracking-wider
                text-[#00B207]
              "
            >
              Welcome to Vdo Naturalss
            </p>

            <h1
              className="
                mt-2 xl:pl-1
                text-[34px] sm:text-[42px] lg:text-[56px] xl:text-[72px]
                font-semibold leading-[1.1]
                text-gray-900
              "
            >
              <span className="block pl-2">Fresh, Healthy</span>
              <span className="block mt-2 pl-2">
                <span>Natural</span>
                <span className="ml-4">Foods</span>
              </span>
            </h1>

            <p
              className="
                mt-6
                text-[15px] sm:text-[18px] lg:text-[24px] xl:text-[32px]
                xl:pl-4
                text-gray-900
              "
            >
              Sale up to{" "}
              <span className="font-semibold text-[#f97416c3]">30% OFF</span>
              <span className="block mt-2 text-[14px] font-light text-gray-500">
                We deliver, you enjoy!
              </span>
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full flex justify-center mb-16 sm:mb-20 lg:mb-0">
            <img
              src={HeroImg}
              alt="Product basket"
              className="
                w-full
                max-w-[320px] sm:max-w-[420px]
                lg:max-w-[520px] xl:max-w-[560px]
              "
              loading="eager"
            />
          </div>
        </div>

        {/* FEATURE CARD (CONTROLLED OVERLAP) */}
        <div
          className="
            absolute
            left-1/2 -translate-x-1/2
            bottom-0
            translate-y-[40%]
            sm:translate-y-[45%]
            lg:translate-y-[50%]
            w-full
            max-w-[92%] sm:max-w-[560px] lg:max-w-[1204px]
          "
        >
          <div
            className="
              bg-white rounded-lg shadow-lg
              px-6 sm:px-8 lg:px-10
              py-6 sm:py-8 lg:py-9
            "
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <Feature
                icon={<MdOutlineMilitaryTech size={38} />}
                title="Best Quality"
                desc="Pure ingredients, homemade quality, for a healthier you!"
              />
              <Feature
                icon={<FaTruck size={36} />}
                title="Fast Delivery"
                desc="Get the fastest product delivery to your doorstep"
              />
              <Feature
                icon={<MdCreditScore size={32} />}
                title="100% Secure Payment"
                desc="We ensure your money is safe"
              />
              <Feature
                icon={<MdOutlineMacroOff size={36} />}
                title="No Preservative"
                desc="Made without any added artificial or chemical preservatives."
              />
            </div>
          </div>
        </div>
      </div>

      {/* OVERLAP SPACER (NO OVERFLOW-HIDDEN) */}
      <div className="h-[180px] sm:h-[220px] lg:h-[180px]" />
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-3.5">
      <div className="text-[#00B207] shrink-0">{icon}</div>
      <div>
        <p className="font-semibold text-[16px] text-gray-900">{title}</p>
        <p className="mt-1 text-sm font-light text-[#999999] max-w-[200px]">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default Hero;
