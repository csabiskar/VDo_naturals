// src/components/WhyNaturals.jsx
import React from "react";

/* Background image (merged leaves + note + arrow) */
import WhyNaturalsBg from "../assets/WhynaturalsBg.png";

/* Sample video */
import sampleVideo from "../assets/sample-video.mp4";

/* Icons */
import { FaLeaf, FaShieldAlt } from "react-icons/fa";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { MdVerified, MdFoodBank } from "react-icons/md";

export default function WhyNaturals() {
  return (
    <section
      className="relative bg-[#EDF2EE] font-poppins"
      style={{
        width: "1440px",
        height: "1216px",
        margin: "0 auto",
      }}
    >
      {/* Background image */}
      <img
        src={WhyNaturalsBg}
        alt="Why Vdo Naturals background"
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 mx-12 h-full max-w-[1280px] px-8 pt-12">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-[#0f1720]">
          Why Vdo Naturalss?
        </h2>

        {/* Video Section */}
        <div className="mt-48 flex justify-center">
          <div
            className="rounded-xl border-2 border-white p-1 bg-transparent shadow-sm"
            style={{ width: "560px", height: "320px" }}
          >
            <video
              width="560"
              height="320"
              controls
              className="h-full w-full rounded-lg object-cover"
            >
              <source src={sampleVideo} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Pills */}
        <div className="mt-48 flex flex-col items-center gap-10">
          {/* Row 1 */}
          <div className="flex w-full justify-between px-6">
            <Pill
              icon={<HiOutlineCurrencyRupee size={20} />}
              text="Economical Pricing"
            />
            <Pill
              icon={<MdVerified size={20} />}
              text="Carefully sourced ingredients and strict quality checks for every batch."
            />
            <Pill
              icon={<FaShieldAlt size={18} />}
              text="Homemade & Safety Assurance"
            />
          </div>

          {/* Row 2 */}
          <div className="flex justify-center gap-6">
            <Pill
              icon={<MdFoodBank size={20} />}
              text="Finest Quality & Wide range of Cold-Pressed Oils"
              wide
            />
            <Pill
              icon={<FaLeaf size={20} />}
              text="100% natural, cold-pressed oils with no chemicals or preservatives."
              wide
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Pill component */
function Pill({ icon, text, wide = false }) {
  return (
    <div
      className={`flex items-center gap-4 rounded-lg bg-white px-5 py-4 shadow-sm ${
        wide ? "w-[420px]" : "w-[360px]"
      }`}
    >
      <span className="text-[#00B207]">{icon}</span>
      <p className="text-sm font-medium text-[#0f1720]">{text}</p>
    </div>
  );
}
