import React, { useRef } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

import QuoteImg from "../assets/quote.png";
import Avatar1 from "../assets/avatar.png";
import Avatar2 from "../assets/avatar.png";
import Avatar3 from "../assets/avatar.png";

const testimonials = [
  {
    text: "Finest quality and wide range of cold pressed oils. Legacy and natural shop. Best place for buying any oil be that cold pressed coconut, groundnut oil. If you compare the oils available with other branded oils in the market, these are economical and of good quality. The groundnut oil sold by the store is one of the best.",
    name: "Varadharajan",
    role: "Happy Customer",
    avatar: Avatar1,
  },
  {
    text: "VDO Naturals has completely transformed our kitchen with their premium cold pressed oils. The coconut oil is aromatic and pure, while the groundnut oil adds a rich flavor to every meal. Their products are consistently high quality and healthy—highly recommended for anyone who values natural ingredients.",
    name: "Saminthan",
    role: "Happy Customer",
    avatar: Avatar2,
  },
  {
    text: "VDO Naturals has completely transformed our kitchen with their premium cold pressed oils. The coconut oil is aromatic and pure, while the groundnut oil adds a rich flavor to every meal. Their products are consistently high quality and healthy—highly recommended for anyone who values natural ingredients.",
    name: "Abiskar",
    role: "Happy Customer",
    avatar: Avatar3,
  },
  {
    text: "I’ve been buying from VDO Naturals for months and their range of oils, especially the groundnut and sesame, are the best I've used. Their shop is trustworthy, affordable, and the oils are far superior to big brands. My family loves the fresh taste and quality, and we notice the difference every day.",
    name: "Abiskar",
    role: "Happy Customer",
    avatar: Avatar3,
  },
];

export default function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="w-full px-6 lg:px-14 py-14">
      <div className="mx-7 max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-[32px] font-semibold text-gray-900">
            Client Testimonials
          </h2>

          <div className="flex gap-3">
            <button
              ref={prevRef}
              className="flex h-10 w-10 items-center justify-center cursor-pointer rounded-full border border-gray-200"
            >
              <FaArrowLeftLong />
            </button>
            <button
              ref={nextRef}
              className="flex h-10 w-10 items-center justify-center cursor-pointer rounded-full bg-[#00B207] text-white"
            >
              <FaArrowRightLong />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          className="items-stretch "
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="flex h-full">
              <div className="rounded-xl bg-white px-4.5 pt-7 flex flex-col w-full min-h-full">
                {/* Quote */}
                <img src={QuoteImg} alt="quote" className="mb-4 w-8" />

                {/* Review Text */}
                <p className="text-sm font-light leading-normal text-gray-600">
                  {item.text}
                </p>

                {/* Footer — FIXED BASELINE */}
                <div className="mt-auto pt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="size-[54px] rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-400">{item.role}</p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 text-[#F59E0B]">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={16} />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
