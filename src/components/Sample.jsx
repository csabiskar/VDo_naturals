import { useState } from "react";
import { FaStar } from "react-icons/fa";
import HairOil from "../assets/HairOil.png";
import { FaHeart } from "react-icons/fa";
import Batch from "../assets/batch.png"
import cookies from "../assets/product/Cookies.png"
import ccokiesmockup from "../assets/product/ccokiesmockup.png"
import Cookiesbiscut from "../assets/product/Cookiesbiscut.png"
import pricing from "../assets/product/pricing.png"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";




export default function Productsssss() {
  const [selected, setSelected] = useState(0);

  const images = [HairOil, HairOil, HairOil, HairOil];

  return (
    <>
        <div className="w-[1440px] h-[3409px] relative bg-white overflow-hidden">
  <div className="w-7xl h-[2665px] left-20 top-[239px] absolute">
    <div className="w-[648px] h-[558px] left-[632px] top-16 absolute overflow-hidden">
      <div className="size- left-0 top-0 absolute inline-flex flex-col justify-start items-start gap-6">
        <div className="size- inline-flex justify-start items-start gap-6">
          <div className="size- inline-flex flex-col justify-start items-start gap-6">
            <div className="size- flex flex-col justify-start items-start gap-3">
              <div className="size- inline-flex justify-start items-center gap-2">
                <div className="justify-start text-zinc-900 text-4xl font-semibold font-['Poppins'] leading-10">Dia Caare Millet Cookies</div>
              </div>
              <div className="size- inline-flex justify-start items-start gap-3">
                <div className="size- flex justify-start items-center">
                  <FaStar className="text-orange-400"/>
                   <FaStar className="text-orange-400"/>
                    <FaStar className="text-orange-400"/>
                     <FaStar className="text-orange-400"/>
                  <div className="justify-start text-stone-500 text-sm font-normal font-['Poppins'] leading-5"> 133 Reviews</div>
                </div>
              </div>
            </div>
            <div className="size- flex flex-col justify-start items-start gap-6">
              <div className="size- inline-flex justify-start items-center gap-3">
                <div className="size- flex justify-start items-center gap-1">
                  <div className="justify-start text-green-800 text-2xl font-medium font-['Poppins'] leading-9">₹42.00</div>
                  <div className="justify-start text-zinc-400 text-xl font-normal font-['Poppins'] line-through leading-8">₹70.00</div>
                </div>
              </div>
              <div className="size- inline-flex justify-start items-start gap-4">
                <div className="h-20 relative inline-flex flex-col justify-center items-start">
                  <div className="w-24 flex-1 bg-green-600/5 rounded-[10px] outline -outline-offset-1 outline-green-600 flex flex-col justify-center items-center gap-1">
                    <div className="justify-start text-black text-sm font-medium font-['Poppins'] leading-4">70gm</div>
                    <div className="justify-start text-black text-xl font-medium font-['Poppins'] leading-5">₹42</div>
                  </div>
                  <div className="w-14 h-4 left-[17px] -top-1 absolute overflow-hidden">
                    <img src={Batch} alt="" />
                    <div className="left-2.5 top-1 absolute justify-start text-white text-[10px] font-medium font-['Poppins'] leading-2.5">20% off</div>
                  </div>
                </div>
                <div className="h-20 relative inline-flex flex-col justify-center items-start">
                  <div className="w-24 flex-1 bg-white/5 rounded-[10px] outline -outline-offset-1 outline-green-600 flex flex-col justify-center items-center gap-1">
                    <div className="justify-start text-black text-sm font-medium font-['Poppins'] leading-4">20gm</div>
                    <div className="justify-start text-black text-xl font-medium font-['Poppins'] leading-5">₹20</div>
                  </div>
                  <div className="w-14 h-4 left-[17px] -top-1 absolute overflow-hidden">
                   <img src={Batch} alt="" />
                    <div className="left-2.5 top-1 absolute justify-start text-white text-[10px] font-medium font-['Poppins'] leading-2.5">20% off</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="size- flex flex-col justify-start items-start gap-4">
          <div className="w-[648px] inline-flex justify-between items-center">
            <div className="size- flex justify-start items-center gap-3">
              <div className="justify-start text-zinc-900 text-sm font-normal font-['Poppins'] leading-5">Brand:</div>
            </div>
            <div className="size- flex justify-start items-center gap-2.5">
              <div className="justify-start text-zinc-900 text-sm font-normal font-['Poppins'] leading-5">Share item:</div>
              <div className="size- flex justify-start items-start gap-[5px]">
                  <FaFacebookF/>
               <FaTwitter/>
               < FaPinterestP/>
               <FaInstagram/>
              </div>
            </div>
          </div>
          <div className="w-[568px] justify-start text-zinc-500 text-sm font-normal font-['Poppins'] leading-5">V DO Naturalss Dia Caare Millet Cookies 70gm are crafted with nutrient-rich millets to offer a light, satisfying snack that supports balanced energy and everyday health. These cookies are positioned as a better alternative to regular refined-flour biscuits, making them ideal for tea-time or on-the-go munching.</div>
        </div>
        <div className="w-[648px] py-4 bg-white shadow-[0px_1px_0px_0px_rgba(229,229,229,1.00)] shadow-[0px_-1px_0px_0px_rgba(229,229,229,1.00)] outline outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-3">
          <div className="size- p-2 bg-white rounded-full outline outline-1 outline-offset-[-1px] outline-neutral-200 flex justify-center items-center">
            <div className="size-8 bg-zinc-100 rounded-full" />
            <div className="size-3.5 relative overflow-hidden">
              <div className="w-2.5 h-0 left-[2.33px] top-[7px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-stone-500" />
            </div>
            <div className="w-10 text-center justify-start text-zinc-900 text-base font-normal font-['Poppins'] leading-6">1</div>
            <div className="size-8 bg-zinc-100 rounded-full" />
            <div className="size-3.5 relative overflow-hidden">
              <div className="size-2.5 left-[2.33px] top-[2.33px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-zinc-900" />
            </div>
          </div>
          <div className="w-96 h-12 p-2.5 bg-green-600/5 rounded-[5px] outline outline-1 outline-offset-[-1px] outline-green-600 flex justify-center items-center gap-2.5">
            <div className="justify-start text-green-600 text-base font-semibold font-['Poppins']">ADD</div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-[648px] h-[571px] left-[632px] top-[622px] absolute">
      <div className="w-[583.74px] h-[477px] left-0 top-[80px] absolute inline-flex flex-col justify-start items-start gap-8">
        <div className="w-[648px] justify-start text-zinc-500 text-sm font-normal font-['Poppins'] leading-5">V DO Naturalss Dia Caare Millet Cookies 70gm are wholesome millet-based cookies designed as a healthier snack choice, especially suitable for people mindful of sugar and overall wellness.<br/><br/>Available in multiple sizes, it’s a premium choice for families seeking authentic, chemical-free Cookies for daily use.</div>
        <div className="size- flex flex-col justify-start items-start gap-3.5">
          <div className="size- inline-flex justify-start items-start gap-2">
            <div className="size-5 relative overflow-hidden">
              <div className="size-5 left-0 top-[-0.16px] absolute bg-green-600 rounded-[100px]" />
              <div className="size-3 left-[4px] top-[3.84px] absolute overflow-hidden">
              <IoMdCheckmark className="text-white"/>
              </div>
            </div>
            <div className="w-[620px] justify-start text-zinc-500 text-sm font-normal font-['Poppins'] leading-5">100% millet-based cookies made with carefully selected grains for better nutrition and sustained energy release</div>
          </div>
          <div className="size- inline-flex justify-start items-start gap-2">
            <div className="size-5 relative overflow-hidden">
              <div className="size-5 left-0 top-[-0.16px] absolute bg-green-600 rounded-[100px]" />
              <div className="size-3 left-[2px] top-[3] absolute overflow-hidden">
              <IoMdCheckmark className="text-white"/>
              </div>
            </div>
            <div className="w-[620px] justify-start text-zinc-500 text-sm font-normal font-['Poppins'] leading-5">Suitable for daily snacking for health-conscious and diabetic-friendly lifestyles when consumed in moderation</div>
          </div>
          <div className="size- inline-flex justify-start items-start gap-2">
            <div className="size-5 relative overflow-hidden">
              <div className="size-5 left-0 top-[-0.16px] absolute bg-green-600 rounded-[100px]" />
              <div className="size-3 left-[4px] top-[3.84px] absolute overflow-hidden">
              <IoMdCheckmark className="text-white"/>
              </div>
            </div>
            <div className="w-[620px] justify-start text-zinc-500 text-sm font-normal font-['Poppins'] leading-5">Free from artificial colors and harsh preservatives, offering a cleaner label snack option for families.</div>
          </div>
          <div className="size- inline-flex justify-start items-start gap-2">
            <div className="size-5 relative overflow-hidden">
              <div className="size-5 left-0 top-[-0.16px] absolute bg-green-600 rounded-[100px]" />
              <div className="size-3 left-[4px] top-[3.84px] absolute overflow-hidden">
              <IoMdCheckmark className="text-white"/>
              </div>
            </div>
            <div className="w-[620px] justify-start text-zinc-500 text-sm font-normal font-['Poppins'] leading-5">Light, crunchy texture and mildly sweet taste that pairs well with tea, coffee, or milk without feeling heavy.</div>
          </div>
        </div>
        <div className="w-[648px] justify-start text-zinc-500 text-sm font-normal font-['Poppins'] leading-5">Choose V DO Naturalss Dia Caare Millet Cookies 70gm for a light, wholesome snack made with nutrient-rich millets. Enjoy a tasty, health-conscious cookie that supports everyday wellness with every bite.</div>
      </div>
      <div className="w-[648px] left-0 top-0 absolute bg-white shadow-[0px_1px_0px_0px_rgba(229,229,229,1.00)] inline-flex justify-start items-start">
        <div data-property-1="Active" className="w-32 p-4 bg-white shadow-[inset_0px_-2px_0px_0px_rgba(32,181,38,1.00)] flex justify-start items-start">
          <div className="justify-start text-zinc-900 text-base font-medium font-['Poppins'] leading-6">Descriptions</div>
        </div>
      </div>
    </div>
    <div className="w-[648px] h-96 left-[632px] top-[1193px] absolute">
      <div className="size- left-0 top-[100px] absolute inline-flex flex-col justify-start items-start gap-3">
        <div className="size- inline-flex justify-start items-start">
          <div className="w-28 justify-start text-zinc-900 text-sm font-normal font-['Poppins'] leading-5">Weight:</div>
          <div className="justify-start text-stone-500 text-sm font-normal font-['Poppins'] leading-5">70gm</div>
        </div>
        <div className="size- inline-flex justify-start items-start">
          <div className="w-28 justify-start text-zinc-900 text-sm font-normal font-['Poppins'] leading-5">Color:</div>
          <div className="justify-start text-stone-500 text-sm font-normal font-['Poppins'] leading-5">Light brown (baked cookie color)</div>
        </div>
        <div className="size- inline-flex justify-start items-start">
          <div className="w-28 justify-start text-zinc-900 text-sm font-normal font-['Poppins'] leading-5">Type:</div>
          <div className="justify-start text-stone-500 text-sm font-normal font-['Poppins'] leading-5">Millet-based cookies, suitable for <br/>health-conscious and diabetic-friendly <br/>diets when consumed in moderation.</div>
        </div>
        <div className="size- inline-flex justify-start items-start">
          <div className="w-28 justify-start text-zinc-900 text-sm font-normal font-['Poppins'] leading-5">Category:</div>
          <div className="justify-start text-stone-500 text-sm font-normal font-['Poppins'] leading-5">Cookies</div>
        </div>
        <div className="size- inline-flex justify-start items-start">
          <div className="w-28 justify-start text-zinc-900 text-sm font-normal font-['Poppins'] leading-5">Stock Status:</div>
          <div className="justify-start text-stone-500 text-sm font-normal font-['Poppins'] leading-5">Available</div>
        </div>
      </div>
      <div className="w-[648px] h-20 left-0 top-0 absolute bg-white shadow-[0px_1px_0px_0px_rgba(229,229,229,1.00)] inline-flex justify-start items-start">
        <div data-property-1="Active" className="size- p-4 bg-white shadow-[inset_0px_-2px_0px_0px_rgba(32,181,38,1.00)] flex justify-start items-start">
          <div className="justify-start text-zinc-900 text-base font-medium font-['Poppins'] leading-6">Additional Information</div>
        </div>
      </div>
    </div>
    <div className="w-[648px] h-[935px] left-[632px] top-[1549px] absolute">
      <div className="w-[648px] h-20 left-0 top-0 absolute bg-white shadow-[0px_1px_0px_0px_rgba(229,229,229,1.00)] inline-flex justify-start items-start">
        <div data-property-1="Active" className="size- p-4 bg-white shadow-[inset_0px_-2px_0px_0px_rgba(32,181,38,1.00)] flex justify-start items-start">
          <div className="justify-start text-zinc-900 text-base font-medium font-['Poppins'] leading-6">Customer Reviews</div>
        </div>
      </div>
      <div className="h-72 left-0 top-[100px] absolute inline-flex flex-col justify-start items-start gap-4">
        <div className="size- flex flex-col justify-start items-start gap-2.5">
          <img className="size-9 rounded-full" src="https://placehold.co/34x34" />
          <div className="w-24 pb-[1.66px] flex flex-col justify-start items-start gap-[1.66px]">
            <div className="justify-start text-zinc-900 text-xs font-medium font-['Poppins'] leading-4">Sanjay</div>
            <div className="size- inline-flex justify-start items-center">
                <FaStar className="text-orange-400"/>
            <FaStar className="text-orange-400"/>
            <FaStar className="text-orange-400"/>
            <FaStar className="text-orange-400"/>
            <FaStar className="text-orange-400"/>
            </div>
          </div>
          <div className="w-16 text-right justify-start text-neutral-400 text-xs font-normal font-['Poppins'] leading-4">2 min ago</div>
          <div className="w-[632px] justify-start text-zinc-500 text-xs font-normal font-['Poppins'] leading-4">The aroma of this gingelly oil reminds me of the traditional chekku oil my grandparents used. It tastes fresh, and idli podi and sambar feel more flavorful now.</div>
        </div>
        <div className="size- inline-flex justify-start items-start gap-4">
          <img className="w-60 h-48 rounded-[5px]" src="https://placehold.co/240x200" />
          <img className="w-60 h-48 rounded-[5px]" src="https://placehold.co/240x200" />
        </div>
        <div className="w-[632px] h-0 outline outline-[0.83px] outline-offset-[-0.42px] outline-neutral-200"></div>
        <div className="h-72 flex flex-col justify-start items-start gap-4">
          <div className="size-9 bg-neutral-200 rounded-full" />
          <div className="size-6 relative overflow-hidden">
            <div className="size-2 left-[7.10px] top-[2.81px] absolute bg-zinc-400" />
            <div className="w-3.5 h-2 left-[4.68px] top-[12.61px] absolute bg-zinc-400" />
          </div>
          <div className="w-24 pb-[1.66px] flex flex-col justify-start items-start gap-[1.66px]">
            <div className="justify-start text-zinc-900 text-xs font-medium font-['Poppins'] leading-4">Prassana</div>
            <div className="size- inline-flex justify-start items-center">
          <FaStar className="text-orange-400"/>
            <FaStar className="text-orange-400"/>
            <FaStar className="text-orange-400"/>
            <FaStar className="text-orange-400"/>
            <FaStar className="text-orange-400"/>
            </div>
          </div>
          <div className="w-20 text-right justify-start text-neutral-400 text-xs font-normal font-['Poppins'] leading-4">30 Apr, 2021</div>
          <div className="w-[632px] justify-start text-zinc-500 text-xs font-normal font-['Poppins'] leading-4">Have been using this oil for oil-pulling and weekend oil bath, and it feels very gentle on the gums and skin. Happy that it is cold pressed and doesn’t feel heavy after cooking.</div>
          <div className="w-60 h-48 px-24 py-20 rounded-[5px] inline-flex justify-start items-center gap-2.5">
            <div className="size-12 bg-zinc-300" />
            <div className="size-10 bg-white" />
          </div>
        </div>
        <div className="w-[632px] h-0 outline outline-[0.83px] outline-offset-[-0.42px] outline-neutral-200"></div>
        <div className="h-36 flex flex-col justify-start items-start gap-4">
          <img className="size-9 rounded-full" src="https://placehold.co/34x34" />
          <div className="size- pb-[1.66px] flex flex-col justify-start items-start gap-[1.66px]">
            <div className="justify-start text-zinc-900 text-xs font-medium font-['Poppins'] leading-4">Sathish</div>
            <div className="size- inline-flex justify-start items-center">
            <FaStar className="text-orange-400"/>
            <FaStar className="text-orange-400"/>
            <FaStar className="text-orange-400"/>
            <FaStar className="text-orange-400"/>
            <FaStar className="text-orange-400"/>
            </div>
          </div>
          <div className="text-right justify-start text-neutral-400 text-xs font-normal font-['Poppins'] leading-4">2 min ago</div>
          <div className="w-[538.86px] justify-start text-zinc-500 text-xs font-normal font-['Poppins'] leading-4">Good quality and packaging. The bottle arrived without any leakage, and there is no harsh smell while frying. The oil color and texture look very natural.</div>
         
        </div>
      </div>
    </div>
    <div className="size- pt-44 left-0 top-[-175px] absolute inline-flex justify-start items-center gap-2.5">
      <div className="w-[540px] h-[558px] relative flex justify-start items-center gap-3">
        <div className="self-stretch inline-flex flex-col justify-center items-center gap-6">
          <div className="h-96 flex flex-col justify-start items-start gap-5">
            <img className="size-20 rounded-[5px]" src={cookies} />
            <img className="size-20" src={ccokiesmockup} />
            <img className="size-20" src={Cookiesbiscut} />
            <img className="size-20 rounded-[5px]" src={pricing} />
          </div>
        </div>
        <img className="size-96 rounded-[5px]" src={cookies} />
        <div className="size-12 left-[490px] top-0  absolute">
          <div className="size-12 left-0 top-0 absolute bg-white rounded-full border border-slate-200" />
          <AiOutlineHeart size={32}/>
        </div>
      </div>
    </div>
  </div>

  {/* breadcrumb */}
  <div className="size- left-[712px] top-[239px] absolute inline-flex justify-start items-center gap-3">
    <div className="w-12 h-6 relative">
      <div className="left-0 top-0 absolute justify-start text-zinc-500 text-base font-normal font-['Poppins'] leading-6">Home</div>
    </div>
    <div className="w-3.5 h-1 origin-top-left -rotate-90 outline outline-1 outline-offset-[-0.50px] outline-neutral-400" />
    <div className="justify-start text-neutral-400 text-base font-normal font-['Poppins'] leading-6">Category</div>
    <div className="w-3.5 h-1 origin-top-left -rotate-90 outline outline-1 outline-offset-[-0.50px] outline-neutral-400" />
    <div className="justify-start text-neutral-400 text-base font-normal font-['Poppins'] leading-6">Healthy Snacks</div>
    <div className="w-3.5 h-1 origin-top-left -rotate-90 outline outline-1 outline-offset-[-0.50px] outline-neutral-400" />
    <div className="justify-start text-green-600 text-base font-normal font-['Poppins'] leading-6">Dia Caare Millet Cookies</div>
  </div>
</div>
    </>
  );
}


