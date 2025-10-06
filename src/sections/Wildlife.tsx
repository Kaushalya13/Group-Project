"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const animals = [
  {
    name: "Vibrant Birdlife",
    image: "https://i.pinimg.com/736x/5b/63/7e/5b637e5d36645aa317daefa9d242d5d5.jpg",
    description: "Discover a paradise for birdwatchers with countless species of tropical birds.",
  },
  {
    name: "Playful Monkeys",
    image: "https://i.pinimg.com/736x/fb/b1/51/fbb15111167e7ba47b63a778e61c4a58.jpg",
    description: "Observe native monkeys as they swing through the lush canopy of the forests.",
  },
  {
    name: "Elusive Leopards",
    image: "https://i.pinimg.com/1200x/5c/6b/d4/5c6bd46abe2633f809c6b4c76e6505ac.jpg",
    description: "Catch a rare glimpse of the majestic Sri Lankan leopard in its natural habitat.",
  },
];

const Wildlife = () => {
  return (
    <section id="wildlife" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="font-lora text-4xl md:text-5xl font-bold text-center mb-4">
          Meet the Local Wildlife
        </h2>
        <p className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
          Kalutara is home to a rich diversity of fauna. Explore the wild side of this beautiful region.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {animals.map((animal, index) => (
            <motion.div
              key={animal.name}
              className="group relative h-96 w-full rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Image
                src={animal.image}
                alt={animal.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-lora text-2xl font-bold text-white">{animal.name}</h3>
                <p className="text-white/90 mt-1">{animal.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wildlife;