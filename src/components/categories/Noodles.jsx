import ProductGrid from "../ProductGrid";
import { products } from "../../data/products";

export default function Noodles() {
  const noodles = products.filter(
    (p) => p.category === "noodles"
  );

  return <ProductGrid products={noodles} />;
}
