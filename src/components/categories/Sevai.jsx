import ProductGrid from "../ProductGrid";
import { products } from "../../data/products";

export default function Sevai() {
  const sevai = products.filter(p => p.category === "sevai");

  return <ProductGrid products={sevai} />;
}
