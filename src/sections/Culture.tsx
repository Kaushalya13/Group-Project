"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const culturalSites = [
  {
    name: "Sacred Temples",
    image: "https://images.pexels.com/photos/1614860/pexels-photo-1614860.jpeg" // Buddhist temple
  },
  {
    name: "Vibrant Kovils",
    image: "https://images.pexels.com/photos/10057973/pexels-photo-10057973.jpeg" // Hindu Kovil
  },
  {
    name: "Historic Churches",
    image: "https://images.pexels.com/photos/161116/church-stained-glass-light-the-dark-161116.jpeg" // Church interior
  }
];

export default function Culture() {
  return (
    <section id="culture" className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-lora text-4xl md:text-5xl font-bold text-center mb-4">A Rich Cultural Tapestry</h2>
          <p className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            Experience the spiritual heart of Sri Lanka through its diverse and harmonious places of worship.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {culturalSites.map((site, index) => (
            <motion.div
              key={site.name}
              className="group relative h-96 w-full rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Image src={site.image} alt={site.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-lora text-2xl font-bold text-white">{site.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}