const categories = [
  { id: "noodles", label: "Noodles" },
  { id: "sevai", label: "Sevai (Vermicelli)" },
  { id: "snacks", label: "Healthy Snacks" },
  { id: "oil", label: "Cold Pressed Edible Oil" },
  { id: "hair-oil", label: "Herbal Hair Oil" },
  { id: "pasta", label: "Pasta" },
  { id: "pongal", label: "Instant Pongal Mix" },
];

export default function Sidebar({ active, onChange }) {
  return (
    <aside
      className="
        w-full
        sm:w-full
        lg:w-[302px]
        h-auto
        lg:h-[737px]

        rounded-xl

        px-4
        sm:px-6
        lg:pl-16

        pt-6
        sm:pt-10
        lg:pt-36

        lg:sticky
        lg:top-[142px]
      "
    >
      <h3 className="font-normal text-[20px] -mt-1">
        All Categories
      </h3>

      <ul className="space-y-5 text-sm mt-[21px]">
        {categories.map((cat) => (
          <li
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span
              className={`w-5 h-5 rounded-full border flex items-center justify-center
                ${
                  active === cat.id
                    ? "border-[#00B207]"
                    : "border-gray-300"
                }`}
            >
              {active === cat.id && (
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
