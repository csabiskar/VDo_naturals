import Sidebar from "../components/Sidebar";
import ProductGrid from "../components/ProductGrid";

export default function CategoryPage() {
  return (
    <div className="max-w-[1600px] min-h-screen mx-auto px-4 sm:px-6 md:px-8">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 xl:gap-[88px]">
        
        {/* SIDEBAR */}
        <div className="w-full lg:w-[302px] lg:sticky lg:top-[142px] self-start">
          <Sidebar />
        </div>

        {/* PRODUCT GRID */}
        <div className="flex-1">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}
