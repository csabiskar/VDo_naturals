import CategoryFilter from "./filters/CategoryFilter";
import PriceFilter from "./filters/PriceFilter";
import RatingFilter from "./filters/RatingFilter";

export default function Sidebar() {
  return (
    <aside
      className="
        w-full
        px-4
        pt-6
        space-y-10

        md:px-6
        md:pt-8

        /* LG */
        lg:w-[260px]
        lg:px-0
        lg:pl-10
        lg:pt-36
        lg:pb-36
        lg:sticky
        lg:top-[142px]

        /* XL */
        xl:w-[280px]
        xl:pl-12

        /* 2XL */
        2xl:w-[302px]
      "
    >
      <div className="w-full">
        <CategoryFilter />
      </div>

      <div className="w-full">
        <PriceFilter />
      </div>

      <div className="w-full">
        <RatingFilter />
      </div>
    </aside>
  );
}
