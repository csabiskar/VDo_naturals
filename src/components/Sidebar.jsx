import { useState } from "react";
import CategoryFilter from "./filters/CategoryFilter";
import PriceFilter from "./filters/PriceFilter";
import RatingFilter from "./filters/RatingFilter";
import { FiX } from "react-icons/fi";

export default function Sidebar() {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <>
      {/* ================= MOBILE FILTER BAR ================= */}
      {/* ================= MOBILE FILTER BAR ================= */}
      <div className="lg:hidden fixed top-[124px] left-0 right-0 z-40 bg-white border-b border-gray-200 md:top-40">
        <div className="flex justify-between items-center px-4 py-3 cursor-pointer">
          <button
            onClick={() => setOpenFilter(true)}
            className="text-sm font-medium cursor-pointer"
          >
            Sort
          </button>

          <span className="h-5 w-px bg-gray-300" />

          <button
            onClick={() => setOpenFilter(true)}
            className="text-sm font-medium cursor-pointer"
          >
            Filter
          </button>
        </div>
      </div>

      {/* ================= MOBILE FILTER DRAWER ================= */}
      {openFilter && (
        <div className="fixed inset-0 z-9999 lg:hidden transition-all">
          {/* backdrop */}
          <div
            onClick={() => setOpenFilter(false)}
            className="absolute inset-0 bg-black/40"
          />

          {/* drawer */}
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-[360px] bg-white">
            {/* header */}
            <div className="flex items-center justify-between px-4 h-14 border-b">
              <span className="font-medium">Filters</span>
              <FiX
                size={22}
                onClick={() => setOpenFilter(false)}
                className="cursor-pointer"
              />
            </div>

            {/* filters */}
            <div className="p-4 space-y-10 overflow-y-auto h-[calc(100%-56px)]">
              <CategoryFilter />
              <PriceFilter />
              <RatingFilter />
            </div>
          </div>
        </div>
      )}

      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside
        className="
          hidden lg:block
          w-full
          px-4
          pt-6
          space-y-10

          lg:w-[260px]
          lg:px-0
          lg:pl-10
          lg:pt-36
          lg:pb-36
          lg:sticky
          lg:top-[142px]

          xl:w-[280px]
          xl:pl-12
          2xl:w-[302px]
        "
      >
        <CategoryFilter />
        <PriceFilter />
        <RatingFilter />
      </aside>
    </>
  );
}
