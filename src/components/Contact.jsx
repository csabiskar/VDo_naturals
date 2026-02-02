import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import Mail from '../assets/mail.svg'
import phone from '../assets/phone.svg'
import map from '../assets/Map.svg'

export default function Contact() {
  return (
    <section className="w-full xl:pb-64 pb-20">
      <div className=" mx-auto px-4 xl:px-0 xl:mx-10 xl:-mt-2.5">
        
        {/* TOP CARD */}
        <div className="bg-white rounded-xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-5">

          {/* LEFT INFO */}
          <div className="shadow-[0px_0px_56px_0px_#00260314] rounded-lg lg:h-[414px] flex flex-col divide-y divide-gray-200">
            
            {/* Location */}
            <div className="flex flex-col justify-center items-center py-8 lg:h-[139px]">
             <img src={map} alt="location" className="mb-5"/>
              <p className="text-sm font-normal">Chennai</p>
            </div>

            {/* Email */}
            <div className="flex flex-col justify-center items-center py-8 lg:h-[139px]">
              <img src={Mail} alt="location" className="mb-5"/>
              <p className="text-sm font-normal break-all">
                shop@vdonaturals.com
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col justify-center items-center py-8 lg:h-[139px]">
              <img src={phone} alt="location" className="mb-5"/>
              <p className="text-sm font-normal">9498088000</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="px-4 sm:px-6 md:px-10 py-8 md:py-10 xl:pb-14 rounded-2xl shadow-[0px_0px_56px_0px_#00260314]">
            <h2 className="text-2xl font-semibold mb-2">
              Just Say Hello!
            </h2>

            <p className="text-sm text-gray-400 mb-6 font-light">
              Do you fancy saying hi to me or you want to get started with your <br />
              project and you need my help? Feel free to contact me.
            </p>

            <form className="space-y-4 xl:mt-1.5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#00B207]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#00B207]"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#00B207]"
              />

              <textarea
                placeholder="Message"
                rows="4"
                className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#00B207] resize-none"
              />

              <button
                type="submit"
                className="bg-[#00B207] text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-green-700 transition xl:px-12 xl:py-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* MAP */}
        <div className="mt-12 overflow-hidden shadow-sm mx-auto px-4 xl:px-0 xl:mx-12 xl:mt-12">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Chennai&output=embed"
            className="w-full h-[280px] sm:h-80 md:h-[410px] border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
