import React from "react";
import { useNavigate } from "react-router-dom";
import { useCategories } from "../context/CategoryContext";
import Noodles from "../assets/AllCategoryImg/Millet Noodles - MORINGA.png";
import { FaArrowRight } from "react-icons/fa";


function CategoriesDropdown({ onClose }) {
  const navigate = useNavigate();
  const { categories, loading } = useCategories();

  const handleCategoryClick = (categoryId) => {
    onClose?.();
    navigate(`/categories?categoryId=${categoryId}`);
  };

  if (loading) {
    return <div className="bg-white shadow-lg rounded-xl p-4">Loading...</div>;
  }

  return (
    <div
      role="menu"
      className="
        bg-white shadow-lg
        opacity-100
        rounded-[10px]
        rotate-0
        w-full max-w-[422px] h-auto max-h-[614px]
        xl:w-[422px] xl:h-[614px]
        overflow-y-auto
        p-4
      "
    >
      <ul className="flex flex-col "> {/* gap 12px = gap-3 */}
        {categories?.map((item) => (
          <li
            key={item._id}
            onClick={() => handleCategoryClick(item._id)}
            className="
              flex justify-between items-center gap-3 px-4 py-1.5
              cursor-pointer hover:text-[#00B207]
              rounded-md
            "
          >
            <div className=" flex gap-3 items-center">
              <img src={Noodles} alt="" className="w-[70px] h-[70px] bg-white rounded-2xl shadow-2xl" />
            <span className="text-sm text-black/50 hover:text-[#00B207]">{item.categoryName}</span>
            </div>
            <FaArrowRight size={12}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesDropdown;
