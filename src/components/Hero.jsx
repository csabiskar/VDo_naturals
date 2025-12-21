import React from "react";
import HeroImg from "../assets/HeroImg.png";
import Design from "../assets/Vector.png";
import { FaTruck } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineMilitaryTech } from "react-icons/md";
import { MdCreditScore } from "react-icons/md";
import { MdOutlineMacroOff } from "react-icons/md";

function Hero() {
  return (
    <section className="bg-white pt-5 pb-16">
      {/* Pale hero container */}
      <div className="mx-20 relative h-[620px] rounded-xl bg-[#EDF2EE] pb-24 overflow-visible">
        {/* Main content */}
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-10 lg:flex-row lg:items-center lg:py-[102px]">
          {/* Left section */}
          <div className="max-w-xl">
            <p className="inline-block px-1 py-1 text-xs font-semibold leading-8 uppercase tracking text-[#00B207]">
              Welcome to Vdo Naturalss
            </p>

            {/* Heading */}
            <h1 className="relative z-10 text-[60px] font-bold leading-14 text-gray-900">
              Fresh, Healthy
              <span className="block mt-3">
                {/* Natural with centered design */}
                <span className="relative inline-flex items-center">
                  <img
                    src={Design}
                    alt="outline"
                    className="pointer-events-none absolute left-1/2 -top-8 -translate-x-1/2 z-0 w-[360px] h-[126px] object-contain"
                    style={{ transform: "skewY(1deg)" }}
                  />
                  <span className="relative z-10 inline-block px-2 py-1 -skew-y-1">
                    Natural
                  </span>
                </span>

                <span className="ml-6">Foods</span>
              </span>
            </h1>

            <p className="mt-2 text-sm text-gray-600 lg:text-[26.6px]">
              Sale up to{" "}
              <span className="font-semibold text-[#f97316]">30% OFF</span>
              <span className="mt-2 block text-xs text-gray-500">
                Free shipping on all your order. we deliver, you enjoy
              </span>
            </p>

            {/* Button */}
            <div className="pt-3">
              <button className="flex h-[42px] w-40 items-center justify-center gap-2 rounded-full bg-[#00B207] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#0f8a11]">
                Shop now
                <IoIosArrowRoundForward size={20} />
              </button>
            </div>
          </div>

          {/* Right image */}
          <div className="flex flex-1 items-center justify-center">
            <div className="relative w-full max-w-[779px]">
              <img
                src={HeroImg}
                alt="Product basket"
                className="h-[400px] w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Floating features container */}
        <div className="mx-auto max-w-[1204px] relative -mt-14">
          <div
            className="mx-auto rounded-[7.53px] bg-white shadow-lg"
            style={{
              width: "1204px",
              height: "140px",
            }}
          >
            {/* Use grid with four columns, vertically centered */}
            <div className="grid h-full grid-cols-1 items-center gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                {/* icon (no background) — set to ~38x38 */}
                <MdOutlineMilitaryTech
                  className="text-[#00B207]"
                  size={37}
                />
                <div className="max-w-[340px]">
                  <p className="font-semibold text-gray-900">Best Quality</p>
                  <p className="text-sm text-[#999999] mt-1">
                    Pure ingredients, homemade quality, for a healthier you!
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <FaTruck
                  className="text-[#00B207]"
                  size={37}
                />
                <div className="max-w-[340px]">
                  <p className="font-semibold text-gray-900">Fast Delivery</p>
                  <p className="text-sm text-[#999999] mt-1">
                    Get the fastest product delivery to your doorstep
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <MdCreditScore size={28}
                  className="text-[#00B207]"
                />
                <div className="max-w-[340px]">
                  <p className="font-semibold text-gray-900">
                    100% Secure Payment
                  </p>
                  <p className="text-sm text-[#999999] mt-1">
                    We ensure your money is safe
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-4">
                <MdOutlineMacroOff
                  className="text-[#00B207]"
                 size={37}
                />
                <div className="max-w-[340px]">
                  <p className="font-semibold text-gray-900">No Preservative</p>
                  <p className="text-sm text-[#999999] mt-1">
                    Made without any added artificial or chemical preservatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
