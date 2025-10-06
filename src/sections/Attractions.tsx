"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const attractions = [
  {
    name: "Thudugala Waterfall",
    description: "A serene and accessible waterfall perfect for a refreshing dip and a peaceful day out in nature.",
    image: "https://i.pinimg.com/736x/5e/4d/4f/5e4d4fdc2a8a602ad75107daf7c56bb9.jpg"
  },
  {
    name: "Rannagala Waterfall",
    description: "Hike through lush greenery to discover hidden streams and natural pools on this scenic and rewarding trail.",
    image: "https://i.pinimg.com/736x/86/3a/f1/863af1f7daec39ad7b918e98ec34c47f.jpg"
  },
  {
    name: "Rechman Casula",
    description: "A peaceful and historic site in Kalutara, perfect for exploring local heritage and enjoying calm surroundings.",
    image: "/images/richmond-castle.jpg"
  },
  {
    name: "Kalutara Bodhiya",
    description: "One of Sri Lanka’s sacred Buddhist sites, offering a serene atmosphere for reflection and spiritual connection.",
    image: "https://i.pinimg.com/1200x/2e/e4/00/2ee400ba82131f256606eb5b7df6d63f.jpg"
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
          <h2 className="font-lora text-4xl md:text-5xl font-bold text-center mb-4">Natural Attractions</h2>
          <p className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            Immerse yourself in the pristine natural beauty that Kalutara has to offer.
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