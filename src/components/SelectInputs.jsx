function SelectInputs({
  label,
  options = [],
  error,
  width,
  className = "",
  ...props
}) {
  return (
    <div className={className} style={{ width }}>
      <label className="text-sm font-light text-gray-900">{label}</label>

      <select
        {...props}
        className={`mt-1.5 w-full h-[49px] rounded-md border px-4 text-sm outline-none bg-white ${
          error ? "border-red-500" : "border-gray-200 focus:border-green-600"
        }`}
      >
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

export default SelectInputs;
