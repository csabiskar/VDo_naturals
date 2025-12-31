import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ContentRenderer from "../components/ContentRenderer";

export default function CategoryPage() {
  const [activeCategory, setActiveCategory] = useState("noodles");

  return (
    <div className="max-w-[1600px] mx-auto px-4">

      <div className="
        flex
        flex-col
        lg:flex-row
        gap-6
      ">
        {/* Sidebar */}
        <Sidebar
          active={activeCategory}
          onChange={setActiveCategory}
        />

        {/* Content */}
        <ContentRenderer category={activeCategory} />
      </div>

    </div>
  );
}
