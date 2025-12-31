import { IoChevronDown } from "react-icons/io5";

function SelectInputs({
  label,
  options = [],
  error,
  width,
  className = "",
  ...props
}) {
  return (
    <div className={`relative ${className}`} style={{ width }}>
      <label className="text-sm font-light text-gray-900 whitespace-nowrap">
        {label}
      </label>

      {/* Select */}
      <select
        {...props}
        className={`mt-1.5 w-full h-[49px] rounded-md border 
        pl-4 pr-12 text-sm text-gray-900 
        outline-none bg-white appearance-none
        ${
          error
            ? "border-red-500"
            : "border-gray-200 focus:border-green-600"
        }`}
      >
        <option value="" disabled>
          Select
        </option>

        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {/* Custom Arrow */}
      <IoChevronDown
        size={18}
        className="pointer-events-none absolute 
        right-4 top-[56px] -translate-y-1/2 
        text-gray-500"
      />

      {error && (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
}

export default SelectInputs;
