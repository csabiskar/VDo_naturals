import React from "react";
import Snacks from '../assets/snacks.png'

const categories = [
  { id: 1, title: "Noodles", count: 8, img: Snacks },
  { id: 2, title: "Rice & Flour Balls", count: 3, img: Snacks },
  { id: 3, title: "Sevai (Vermicelli)", count: 4, img: Snacks },
  { id: 4, title: "Healthy snacks & Red Rice Laddu", count: 2, img: Snacks },
  { id: 5, title: "Cold Pressed Edible Oil", count: 4, img: Snacks },
  { id: 6, title: "Herbal Hair Oil", count: 4, img: Snacks },
];

export default function TopCategory() {
  return (
    <section className="py-12">
      <div className="mx-20">
        {/* Section title */}
        <h2 className="mb-8 text-3xl font-extrabold text-gray-900">
          Top Category
        </h2>

        {/* Cards Row */}
        <div className="flex gap-6">
          {categories.map((item) => (
            <div
              key={item.id}
              className="
                group
                w-[171.81px] h-[247px]
                flex-shrink-0
                border border-gray-200
                bg-white
                transition-all duration-300 ease-out
                hover:border-[#00B207]
                hover:rounded-sm
                hover:shadow-[0_12px_30px_rgba(0,178,7,0.18)]
              "
            >
              {/* Inner scaling wrapper (prevents layout jump) */}
              <div
                className="
                  h-full
                  flex flex-col items-center justify-between
                  px-4 py-5
                  text-center
                  transition-transform duration-300 ease-out
                  group-hover:scale-[1.05]
                "
              >
                {/* Image */}
                <div className="h-[120px] flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="max-h-fit max-w-[96px] object-contain"
                  />
                </div>

                {/* Title */}
                <p
                  className="
                    text-md
                    font-medium
                    text-gray-800
                    leading-tight
                    transition-colors duration-300
                    group-hover:text-[#00B207]
                  "
                >
                  {item.title}
                </p>

                {/* Product count */}
                <p className="text-[13px] text-gray-400">
                  {item.count} Products
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
