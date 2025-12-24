import { GoHome } from "react-icons/go";
import Breadcrumbs from "../assets/Breadcrumbs.png";
import { IoIosArrowForward } from "react-icons/io";

function Breadcrumb() {
  return (
    <>
      <div
        className="h-[120px] flex items-center"
        style={{
          backgroundImage: `url(${Breadcrumbs})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-20 flex items-center gap-2 text-sm">
          <GoHome className="text-gray-400" size={22} />
          <IoIosArrowForward className="text-gray-400" />
          <span className="text-[#00B207] text-[16px] font-light">
            Wishlist
          </span>
        </div>
      </div>
    </>
  );
}

export default Breadcrumb;
