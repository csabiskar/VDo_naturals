import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaArrowRightLong,FaArrowLeftLong } from "react-icons/fa6";

import { FaStar } from "react-icons/fa";

import QuoteImg from "../assets/quote.png"; // <-- green quote image
import Avatar1 from "../assets/avatar.png";
import Avatar2 from "../assets/avatar.png";
import Avatar3 from "../assets/avatar.png";

const testimonials = [
  {
    text:
      "Finest quality and wide range of cold pressed oils. Legacy and natural shop. Best place for buying any oil be that cold pressed coconut, groundnut oil. If you compare the oils available with other branded oils in the market, these are economical and of good quality. The groundnut oil sold by the store is one of the best.",
    name: "Varadharajan",
    role: "Happy Customer",
    avatar: Avatar1,
  },
  {
    text:"VDO Naturals has completely transformed our kitchen with their premium cold pressed oils. The coconut oil is aromatic and pure, while the groundnut oil adds a rich flavor to every meal. Their products are consistently high quality and healthy—highly recommended for anyone who values natural ingredients.",
    name: "Saminthan",
    role: "Happy Customer",
    avatar: Avatar2,
  },
  {
    text:"I’ve been buying from VDO Naturals for months and their range of oils, especially the groundnut and sesame, are the best I've used. Their shop is trustworthy, affordable, and the oils are far superior to big brands. My family loves the fresh taste and quality, and we notice the difference in our cooking every day.",
    name: "Abiskar",
    role: "Happy Customer",
    avatar: Avatar3,
  },
];

export default function Testimonials() {
  return (
    <section className="w-full px-6 lg:px-12 py-14 ">
      <div className="mx-7 max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Client Testimonials
          </h2>

          <div className="flex gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200">
              <FaArrowLeftLong />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00B207] text-white">
              <FaArrowRightLong />
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-10"
            >
              {/* Quote image */}
              <img
                src={QuoteImg}
                alt="quote"
                className="mb-4 h-fit w-8"
              />

              {/* Content */}
              <p className="text-sm leading-relaxed text-gray-600">
                {item.text}
              </p>

              {/* Footer */}
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-400">{item.role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={16} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
