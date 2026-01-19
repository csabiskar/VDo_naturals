import { useProducts } from "../../context/ProductContext";
import { useCategories } from "../../context/CategoryContext";
import { IoIosArrowUp } from "react-icons/io";
import { memo } from "react";
import Loader from "../Loader";

const CategoryFilter = memo(() => {
  const { activeCategory, setCategoryFromUI } = useProducts();
  const { categories, loading } = useCategories();

  if (loading) return <Loader/>;

  return (
    <section className="w-full">
      <div className="relative w-full lg:w-[302px] flex items-center mb-4">
        <h3 className="font-normal text-[20px]">All Categories</h3>
        <IoIosArrowUp
          size={18}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-700"
        />
      </div>

      <ul className="space-y-5 text-sm mt-[21px] w-full lg:w-[302px]">
        {categories.map((cat) => (
          <li
            key={cat._id}
            onClick={() => setCategoryFromUI(cat.categoryName, cat._id)}
            className="flex items-center gap-3 cursor-pointer"
          >
            <span
              className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                activeCategory === cat.categoryName
                  ? "border-[#00B207]"
                  : "border-gray-300"
              }`}
            >
              {activeCategory === cat.categoryName && (
                <span className="w-3 h-3 bg-[#00B207] rounded-full" />
              )}
            </span>
            <span className="font-light text-gray-900">{cat.categoryName}</span>
          </li>
        ))}
      </ul>
    </section>
  );
});

export default CategoryFilter;
