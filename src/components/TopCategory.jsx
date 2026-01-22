import React from "react";
import Noodles from "../assets/AllCategoryImg/Millet Noodles - MORINGA.png";
import HealthySnacks from "../assets/AllCategoryImg/Millet Cookies_png.png";
import Pongal from "../assets/AllCategoryImg/Instant Barnyard  Mix.png";
import Sevai from "../assets/AllCategoryImg/Rice Seval.png";
import Oil from "../assets/AllCategoryImg/Oil_New_2 2.png";
import HerbalOil from "../assets/AllCategoryImg/Hair Oil Product image.png";
import Pasta from "../assets/AllCategoryImg/Little Pasta.png";

const categories = [
  { id: 1, title: "Noodles", img: Noodles },
  { id: 2, title: "Healthy snacks", img: HealthySnacks },
  { id: 3, title: "Pongal", img: Pongal },
  { id: 4, title: "Sevai", img: Sevai },
  { id: 5, title: "Pasta", img: Pasta },
  { id: 6, title: "Cold Pressed Edible Oil", img: Oil },
  { id: 7, title: "Herbal Hair Oil", img: HerbalOil }
];

export default function TopCategory() {
  return (
    <section className=" pt-12  pb-16">
      <div className="mx-4 sm:mx-8 lg:mx-20">
        <h2 className="mb-8 text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-gray-900">
          All Category
        </h2>

        {/* RESPONSIVE GRID */}
        <div
          className="
            grid gap-4
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            xl:grid-cols-7
          "
        >
          {categories.map((item) => (
            <div
              key={item.id}
              className="
                group
                mt-2.5
                w-[172px]
                h-64
                mx-auto
                rounded
                border border-[#EDEDED]
                bg-white
                transition-all duration-300 ease-out
                hover:border-[#2C742F]
                hover:rounded-sm
                hover:shadow-[0_12px_30px_rgba(0,178,7,0.18)]
              "
            >
              <div
                className="
                  h-full
                  flex flex-col items-center
                  px-4 py-5
                  text-center
                  transition-transform duration-300 ease-out
                  group-hover:scale-[1.05]
                "
              >
                {/* IMAGE CONTAINER */}
                <div className="flex items-center justify-center h-[152px]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="
                      object-cover
                      w-40 h-[140px]
                      sm:w-[171px] sm:h-[151px]
                      lg:w-fit lg:h-[152px]
                    "
                  />
                </div>

                {/* TITLE (MOVED UP) */}
                <p
                  className="
                    mt-2
                    text-[16px]
                    font-medium
                    w-fit
                    text-gray-800
                    leading-tight
                    transition-colors duration-300
                    group-hover:text-[#2C742F]
                  "
                >
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
