import Sidebar from "../components/Sidebar";
import ProductGrid from "../components/ProductGrid";

export default function CategoryPage() {
  return (
    <div className="max-w-[1600px] mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-20">
        <Sidebar />
        <div className="flex-1">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}
