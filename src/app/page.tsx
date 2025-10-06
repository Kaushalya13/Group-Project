// src/app/page.tsx
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
import OurBookingProcess from "@/sections/OurBookingProcess";

import ExploreHub from "@/sections/ExploreHub";
import DestinationShowcase from "@/sections/DestinationShowcase";
import ScrollShowcase from "@/sections/ScrollShowcase";

export default function Home() {
  return (
    <>
      {/* Navbar should be the first element, fixed to the top */}
      <Navbar />
      {/* Hero now handles its own top padding to start content below the fixed Navbar */}
      <Hero />
      <OurBookingProcess />
      <DestinationShowcase />
      <ScrollShowcase />
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