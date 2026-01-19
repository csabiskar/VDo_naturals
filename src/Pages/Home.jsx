import Hero from "../components/Hero";
import BestSeller from "../components/BestSeller";
import TopCategory from "../components/TopCategory";
import HotDeals from "../components/HotDeals";
import WhyNaturals from "../components/WhyNaturals";
import PromoBanners from "../components/PromoBanners";
import Testimonials from "../components/Testimonials";
import HeroBanner from "../components/HeroBanner";
import FeaturedProducts from "../components/FeaturedProducts";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts/>
      {/* <BestSeller /> */}
      <TopCategory />
      <HotDeals />
      <WhyNaturals />
      <PromoBanners />
      <Testimonials />
      <HeroBanner />
    </>
  );
}

export default Home;
