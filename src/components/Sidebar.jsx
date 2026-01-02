import { BiUpArrow } from "react-icons/bi";
import { categories } from "../data/categories";
import { useProducts } from "../Context/ProductContext";

export default function Sidebar() {
  const { activeCategory, setActiveCategory } = useProducts();

  return (
    <aside className="w-full lg:w-[302px] lg:sticky lg:top-[142px] px-4 lg:pl-16 pt-6 lg:pt-36">
      <div className="flex justify-between">
        <h3 className="font-normal text-[20px]">All Categories</h3>
        <BiUpArrow />
      </div>

      <ul className="space-y-5 text-sm mt-[21px]">
        {categories.map((cat) => (
          <li
            key={cat.id}
            onClick={() => setActiveCategory(cat.label)} // 👈 IMPORTANT
            className="flex items-center gap-2 cursor-pointer"
          >
            <span
              className={`w-5 h-5 rounded-full border flex items-center justify-center
                ${
                  activeCategory === cat.label
                    ? "border-[#00B207]"
                    : "border-gray-300"
                }`}
            >
              {activeCategory === cat.label && (
                <span className="w-3 h-3 bg-[#00B207] rounded-full" />
              )}
            </span>

            <span className="text-gray-900 font-light">
              {cat.label}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
