import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BestSeller from "../components/BestSeller";
import TopCategory from "../components/TopCategory";
import HotDeals from "../components/HotDeals";
import WhyNaturals from "../components/WhyNaturals";
import PromoBanners from "../components/PromoBanners";
import Testimonials from "../components/Testimonials";
import HeroBanner from "../components/HeroBanner";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#FFFFFF]">
        <Navbar/>
        <Hero />
        <BestSeller />
        <TopCategory />
        <HotDeals />
        <WhyNaturals />
        <PromoBanners />
        <Testimonials />
        <HeroBanner />
        <Footer />
      </div>
    </>
  );
}

export default Home;
