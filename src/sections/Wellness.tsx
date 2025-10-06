"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Wellness() {
  const wellnessImage = "https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg"; // Ayurvedic herbs

  return (
    <section id="wellness" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src={wellnessImage}
            alt="Ayurvedic herbs and oils for wellness treatment"
            fill
            className="object-cover"
          />
        </motion.div>
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-lora text-4xl md:text-5xl font-bold mb-4">Embrace Wellness</h2>
          <p className="text-lg text-gray-600 mb-6">
            Reconnect with yourself through the ancient healing traditions of Ayurveda. Our local wellness centers offer authentic treatments designed to restore balance and rejuvenate your mind, body, and spirit.
          </p>
          <button className="bg-ayurvedic-ochre text-white font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform">
            Discover Treatments
          </button>
        </motion.div>
      </div>
    </section>
  );
}