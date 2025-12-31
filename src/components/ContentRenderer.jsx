import Noodles from "./categories/Noodles";
import Sevai from "./categories/Sevai";
import Snacks from "./categories/Snacks";

const COMPONENT_MAP = {
  noodles: Noodles,
  sevai: Sevai,
  snacks: Snacks,
};

export default function ContentRenderer({ category }) {
  const Component = COMPONENT_MAP[category];

  return (
    <div className="flex-1">
      {Component ? <Component /> : <p>No category found</p>}
    </div>
  );
}
