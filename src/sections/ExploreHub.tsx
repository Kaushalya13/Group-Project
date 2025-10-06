// src/sections/ExploreHub.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Natural Attractions",
    description: "Discover serene waterfalls and peaceful natural wonders.",
    image: "https://i.pinimg.com/736x/5e/4d/4f/5e4d4fdc2a8a602ad75107daf7c56bb9.jpg", 
    href: "#attractions", // Links to the existing Attractions section
  },
  {
    name: "Local Cuisine",
    description: "Embark on a culinary journey with authentic Sri Lankan flavors.",
    image: "https://i.pinimg.com/1200x/c8/a3/93/c8a39396e945c29a202a6e38a41755a9.jpg", 
    href: "#cuisine", // Links to the existing Cuisine section
  },
  {
    name: "Culture & Heritage",
    description: "Explore the sacred temples and rich, diverse heritage.",
    image: "https://images.pexels.com/photos/1614860/pexels-photo-1614860.jpeg", 
    href: "#culture", // Links to the existing Culture section
  },
  {
    name: "Adventure & Walks",
    description: "Find your perfect forest path, from family walks to epic hikes.",
    image: "https://i.pinimg.com/736x/1d/25/6a/1d256abc70b1d8e3a6b33a1940fa8830.jpg", 
    href: "#walks", // Links to the existing Walks section
  },
  {
    name: "Wildlife & Eco-Tourism",
    description: "Meet the vibrant birdlife, playful monkeys, and majestic creatures.",
    image: "https://i.pinimg.com/736x/5b/63/7e/5b637e5d36645aa317daefa9d242d5d5.jpg", 
    href: "#wildlife", // Links to the existing Wildlife section
  },
  {
    name: "Ayurvedic Wellness",
    description: "Reconnect with ancient healing traditions for mind, body, and spirit.",
    image: "https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg", 
    href: "#wellness", // Links to the existing Wellness section
  },
];

export default function ExploreHub() {
  return (
    <section id="explore-hub" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-lora text-4xl md:text-5xl font-bold text-center mb-4">
            Attractions & Activities: Find Your Sanctuary
          </h2>
          <p className="text-center text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
            Select a theme to jump to a section and begin crafting your unforgettable journey through Kalutara&apos;s soulful heart.
          </p>
        </motion.div>

        {/* The Hub Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer h-80"
            >
              <Link href={category.href}>
                <div className="absolute inset-0">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors"></div>
                </div>

                <div className="absolute bottom-0 left-0 p-6 text-white z-10">
                  <h3 className="text-2xl font-bold font-lora">{category.name}</h3>
                  <p className="text-md mt-1">{category.description}</p>
                  <button className="mt-4 text-white border border-white font-bold py-2 px-6 rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300">
                    Explore
                  </button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}