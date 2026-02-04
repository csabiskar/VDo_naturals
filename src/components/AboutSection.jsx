import Img from '../assets/aboutImg.png'

const AboutSection = () => {
  return (
    <section className="max-w-7xl mx-auto  pb-16 px-6 pt-16 xl:pt-[72px] lg:pb-32 xl:pb-40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-[53px] font-semibold leading-tight text-black">
            100% Trusted <br />
            Nature Food Store
          </h1>
          <p className="mt-6 text-[#666666] leading-7 max-w-xl font-light">
            V DO Naturalss is an online store based in Chennai that specializes
            in natural, homemade food products and cold-pressed oils like
            coconut, gingelly, and groundnut oil. The site also offers
            traditional South Indian items such as Chettinad snacks, millet
            noodles, Pongal mixes, herbal hair oils, and millet cookies, with
            several popular products featured as on-demand and top-rated.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full">
          <img
            src={Img} // replace with your image path
            alt="About us image"
            className="w-full h-80 lg:h-[420px] object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
