// src/app/page.tsx
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import OurBookingProcess from "@/sections/OurBookingProcess";

import DestinationShowcase from "@/sections/DestinationShowcase";
import ScrollShowcase from "@/sections/ScrollShowcase";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ScrollShowcase />
      <OurBookingProcess />
      <DestinationShowcase />
      <Footer />
    </>
  );
}