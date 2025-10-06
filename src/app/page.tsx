import Attractions from "@/sections/Attractions";
import Brands from "@/sections/Brands";
import Cuisine from "@/sections/Cuisine";
import Culture from "@/sections/Culture";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import PromoSection from "@/sections/PromoSection";
import Walks from "@/sections/Walks";
import Wellness from "@/sections/Wellness";
import Wildlife from "@/sections/Wildlife";
import WhyPromote from "@/sections/WhyPromote"; 

import ExploreHub from "@/sections/ExploreHub";

export default function Home() {
  return (
    <>
    <Navbar />
      <Hero />
      <WhyPromote /> 
      <ExploreHub /> 
      <Attractions />
      <Wellness />
      <Cuisine />
      <Wildlife />
      <PromoSection />
      <Walks />
      <Culture />
      <Brands />
      <Footer />
    </>
  );
}