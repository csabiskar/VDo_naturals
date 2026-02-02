import React from "react";
import { FiUser } from "react-icons/fi";
import { CiUser } from "react-icons/ci";


import oil from "../assets/BlogImg/hairoil.png";
import Millet from "../assets/BlogImg/Millet.png";
import Noodles from "../assets/BlogImg/Noodles.png";

const blogs = [
  {
    id: 1,
    date: "18",
    month: "OCT",
    title: "Millet-The Super Food",
    image: Millet,
  },
  {
    id: 2,
    date: "28",
    month: "NOV",
    title: "The Super food for a Sustainable Future",
    image: Noodles,
  },
  {
    id: 3,
    date: "22",
    month: "DEC",
    title:
      "Why This Herbal Hair Oil Is a Game-Changer for All Hair Types",
    image: oil,
  },
];

export default function Blog() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-20 py-12 xl:pb-44 max-w-[1440px] 2xl:mx-auto">
      <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-gray-900 mb-8">
        Blogs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="
              w-full
              max-w-[440px]
              min-h-[484px]
              bg-white
              rounded-lg
              border border-gray-100
              overflow-hidden
              flex flex-col
              cursor-pointer
            "
          >
            {/* Image */}
            <div className="relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="
                  w-full
                  h-[314px]
                  object-cover
                  rounded-t-lg
                "
              />

              {/* Date Card */}
              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  w-[58px]
                  h-[58px]
                  rounded
                  bg-white
                  flex
                  flex-col
                  items-center
                  justify-center
                  shadow-sm
                "
              >
                <span className="text-lg font-semibold leading-none">
                  {blog.date}
                </span>
                <span className="text-xs mt-1 text-gray-500 uppercase">
                  {blog.month}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 font-light text-sm text-[#666666] mb-3">
                <CiUser className="text-[14px]" />
                <span>By Admin</span>
                <span>|</span>
                <span>5 min read</span>
              </div>

              <h3 className="text-lg font-medium leading-snug mb-6 text-gray-900 flex-1">
                {blog.title}
              </h3>

              <button className="inline-flex items-center gap-2 text-[#00B207] font-medium cursor-pointer">
                Read More
                <span className="text-lg">→</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
