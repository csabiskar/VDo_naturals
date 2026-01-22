// src/components/WhyNaturals.jsx
import React from "react";

/* Assets — filename must match EXACTLY */
import sampleVideo from "../assets/sample-video.mp4";
import leftImg from "../assets/whynaturalsImg/imageL.png";
import rightImg from "../assets/whynaturalsImg/imageR.png";
import Heart from "../assets/whynaturalsImg/heart.png";
import sweat from "../assets/whynaturalsImg/sweat.png";
import { IoMdCheckmark } from "react-icons/io";

export default function WhyNaturals() {
  return (
    <section className="relative bg-[#EDF2EE] font-poppins min-w-screen min-h-screen xl:h-[993px]">
      {/* XL DECORATIONS — NO CHANGE */}
      <img
        src={leftImg}
        alt=""
        className="absolute top-0 left-0 w-16 xl:w-72 md:w-40 hidden md:block xl:block pointer-events-none"
      />
      <img
        src={rightImg}
        alt=""
        className="absolute top-0 right-0 w-14 xl:w-72 md:w-40 hidden md:block xl:block pointer-events-none"
      />
      <img
        src={Heart}
        alt=""
        className="absolute -bottom-0.5 left-0 w-16 xl:w-[258px]  hidden xl:block pointer-events-none"
      />
      <img
        src={sweat}
        alt=""
        className="absolute top-60 right-[450px] w-16 xl:w-36 hidden  xl:block pointer-events-none"
      />
      {/* Content */}
      <div className="relative z-10 h-full px-8 pt-12">
        {/* Title */}
        <h2 className="text-[32px] font-semibold text-center text-[#0f1720] xl:mt-7 md:pl-14">
          <span className="niconne text-[40px]"> Why</span> Vdo Naturalss?
        </h2>

        {/* TEXT + VIDEO (MOVED DOWN SAFELY) */}
        <div className="mt-12 md:mt-24 xl:mt-[300px] flex flex-col-reverse md:flex-row w-full">
          {/* TEXT LIST */}
          <div className="flex flex-col items-left gap-6 md:ml-12 md:pr-8 xl:mt-1 mr-4 mt-8">
            {[
              "Best Value for Money",
              "Healthy products in a tasty way",
              "Finest Quality & Wide range of Cold-Pressed Oils",
              "100% natural, cold-pressed oils with no chemicals or preservatives",
              "Carefully sourced ingredients and strict quality checks for every batch",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-5 mb-3">
                {/* CHECK ICON */}
                <div className="size-6 bg-[#00B207] rounded-full flex items-center  justify-center shrink-0">
                  <IoMdCheckmark className="text-white text-sm" />
                </div>

                {/* TEXT */}
                <p className="md:text-[20px] text-sm font-light">{text}</p>
              </div>
            ))}
          </div>

          {/* VIDEO */}
          <div className="flex justify-center">
            <div className="rounded-[28px] border-[5px] border-black/20 bg-transparent p-1 shadow-sm xl:w-[540px] xl:h-[360px]">
              <video
                controls
                className="h-full w-full rounded-2xl object-cover xl:w-[540px] xl:h-[340px]"
              >
                <source src={sampleVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
