import { IoIosArrowUp } from "react-icons/io";
import { categories } from "../../data/categories";
import { useProducts } from "../../context/ProductContext";
import { memo } from "react";

const CategoryFilter = memo(() => {
  const { activeCategory, setActiveCategory } = useProducts();

  return (
    <section className="w-full">
      {/* WIDTH-LOCKED HEADER */}
      <div
        className="
          relative
          w-full
          lg:w-[302px]
          flex
          items-center
          mb-4
        "
      >
        <h3 className="font-normal text-[20px]">All Categories</h3>

        {/* FIXED RIGHT ARROW */}
        <IoIosArrowUp
          size={18}
          className="
            absolute
            right-0
            top-1/2
            -translate-y-1/2
            text-gray-700
          "
        />
      </div>

      {/* CATEGORY LIST */}
      <ul className="space-y-5 text-sm mt-[21px] w-full lg:w-[302px]">
        {categories.map((cat) => (
          <li
            key={cat.id}
            onClick={() => setActiveCategory(cat.label)}
            className="flex items-center gap-3 cursor-pointer"
          >
            <span
              className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                activeCategory === cat.label
                  ? "border-[#00B207]"
                  : "border-gray-300"
              }`}
            >
              {activeCategory === cat.label && (
                <span className="w-3 h-3 bg-[#00B207] rounded-full" />
              )}
            </span>

            <span className="font-light text-gray-900">
              {cat.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
});

export default CategoryFilter;
