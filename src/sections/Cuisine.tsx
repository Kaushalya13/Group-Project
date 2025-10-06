"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const dishes = [
  {
    name: "Authentic Rice & Curry",
    description: "Experience a symphony of flavors with traditional Sri Lankan rice and curry.",
    image: "https://i.pinimg.com/1200x/c8/a3/93/c8a39396e945c29a202a6e38a41755a9.jpg",
  },
  {
    name: "Fresh Seafood Delights",
    description: "Savor the taste of the ocean with locally sourced, freshly prepared seafood.",
    image: "https://i.pinimg.com/1200x/2a/3b/a5/2a3ba589d5a3d7dbe9f1e32e85e13a96.jpg",
  },
  {
    name: "Tropical Fruit Platters",
    description: "Indulge in a colorful array of exotic fruits, bursting with natural sweetness.",
    image: "https://i.pinimg.com/1200x/5d/1b/2a/5d1b2a9d70a3f4e3c9896dc032a21e4a.jpg",
  },
];

const Cuisine = () => {
  return (
    <section id="cuisine" className="bg-light-bg py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-dark-text mb-4 font-lora">
          Taste the Local Flavors
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Embark on a culinary journey and discover the rich and diverse tastes of Kalutara.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              className="group bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-lora text-2xl font-bold mb-2">{dish.name}</h3>
                <p className="text-gray-600">{dish.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cuisine;