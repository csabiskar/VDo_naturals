// src/components/LogoutDialog.jsx
export default function LogoutDialog({ open, onClose, onConfirm }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="min-w-[280px] w-40 md:w-fit sm:rounded-4xl rounded-xl bg-white sm:p-10 p-5 shadow-xl">
        <h2 className="sm:text-[32px] font-normal text-gray-900 text-lg">Logout</h2>

        <p className="mt-4 sm:text-[18px] text-gray-600 text-sm ">
          Are sure you want to logout?
        </p>

        <div className="mt-10 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="sm:px-8 sm:py-3 px-5 py-1 sm:rounded-2xl  rounded border border-gray-300 text-gray-700 text-md sm:text-lg font-medium hover:bg-gray-50 transition"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-8 py-3 rounded sm:rounded-2xl bg-red-600 text-white text-lg font-medium hover:bg-red-700 transition"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
