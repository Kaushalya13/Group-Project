// src/sections/Attractions.tsx
"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

// UPDATED: Attraction details and order, including Narthupana Bridge.
const attractions = [
  {
    name: "Thudugala Ella",
    description: "The Thudugala Ella is an 8-meter high waterfall located about 8Km from Kalutara town. Ranked 268th in Sri Lanka, it's perfect for a refreshing dip and a peaceful day out in nature.",
    image: "https://i.pinimg.com/736x/5e/4d/4f/5e4d4fdc2a8a602ad75107daf7c56bb9.jpg"
  },
  {
    name: "Richmond Castle",
    description: "An impressive Edwardian mansion built between 1900 and 1910, sitting on a hill 2 km (1.2 mi) from the Kalutara city center, adjoining the Kalu Ganga. Open to the public for heritage tours.",
    image: "/images/richmond-castle.jpg"
  },
  {
    name: "Narthupana Bridge (Rainbow Bridge)",
    description: "A beautiful bridge that crosses the Kalu Ganga River, connecting the two sides of the town. Admired for its calm surroundings and scenic views, especially during a beautiful sunset.",
    // NOTE: This image is a placeholder for the bridge, as one was not provided in the original file.
    image: "https://i.pinimg.com/originals/81/7e/4d/817e4d84c0e62d4e6d3c35b5a7a7263c.jpg"
  },
  {
    name: "Rannagala Ella Waterfall",
    description: "This small, approximately 6-meter high waterfall is located in Rannagala village in Neboda. It is best seen during the rainy season and is easily accessible from Matugama or Neboda.",
    image: "https://i.pinimg.com/736x/86/3a/f1/863af1f7daec39ad7b918e98ec34c47f.jpg"
  }
];

// Explicitly type the variants with the 'Variants' type from Framer Motion
const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

export default function Attractions() {
  return (
    <section id="attractions" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          {/* UPDATED: Section Title to reflect the mix of sites */}
          <h2 className="font-lora text-4xl md:text-5xl font-bold text-center mb-4">Attractions & Heritage Sites</h2>
          <p className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            Immerse yourself in the pristine natural beauty and rich cultural history that Kalutara has to offer.
          </p>
        </motion.div>
        
        {/* Parent container for the animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.3 }} // Stagger the animation of children
        >
          {attractions.map((attraction) => (
            <motion.div
              key={attraction.name}
              className="group bg-white rounded-xl shadow-lg overflow-hidden"
              variants={cardVariants} // Variants are now correctly applied to each child
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={attraction.image}
                  alt={attraction.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="font-lora text-2xl font-bold mb-2">{attraction.name}</h3>
                <p className="text-gray-600">{attraction.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}