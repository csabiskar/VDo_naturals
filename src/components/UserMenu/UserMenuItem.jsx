export default function UserMenuItem({
  icon: Icon,
  label,
  danger = false,
  onClick,
}) {
  return (
    <button
      type="button"
      role="menuitem"
      onClick={onClick}
      className={`
        flex items-center gap-4
        text-left  transition-colors
        cursor-pointer

        /* Figma exact */
        w-[214px] h-[52px]
        pt-2.5 pr-2.5 pb-2.5 pl-4

        /* Mobile safety */
        max-sm:w-full
        max-sm:h-14

        ${
          danger
            ? "text-red-500 hover:bg-red-50"
            : "text-gray-900 hover:bg-[#00B2071A]"
        }
      `}
    >
      <Icon size={32} />
      <span className="text-[14px] font-medium">
        {label}
      </span>
    </button>
  );
}
