"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const walks = [
  {
    name: "Forest Path",
    image: "https://i.pinimg.com/736x/1d/25/6a/1d256abc70b1d8e3a6b33a1940fa8830.jpg",
    description: "Route for seniors and families with children",
  },
  {
    name: "Path to the Spring",
    image: "https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg",
    description: "Road to a place of special beauty (18 km)",
  },
  {
    name: "Forest Odyssey",
    image: "https://i.pinimg.com/1200x/38/6c/69/386c6936e4ad585d7eef6260571d5eb3.jpg",
    description: "6-hour forest hike with special gear",
  },
];

const Walks = () => {
  return (
    <section className="bg-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-dark-text mb-4 font-lora">
          Find The Perfect Walk For Yourself
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose from a variety of trails that cater to all levels of fitness and adventure. Each path offers a unique perspective of the reserve's stunning landscapes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {walks.map((walk, index) => (
            <motion.div
              key={walk.name}
              className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group h-[450px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Image
                src={walk.image}
                alt={walk.name}
                fill
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white z-10">
                <h3 className="text-2xl font-bold font-lora">{walk.name}</h3>
                <p className="text-md mt-1">{walk.description}</p>
                <Link href={`/walks/${walk.name.toLowerCase().replace(" ", "-")}`}>
                  <button className="mt-4 bg-black text-lush-green font-bold py-2 px-6 rounded-full text-sm hover:scale-105 transition-transform duration-300 shadow-lg">
                    Explore
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
         <div className="text-center mt-16">
             <a href="#all-walks" className="bg-lush-green text-black font-bold py-4 px-10 rounded-full text-lg hover:scale-105 transition-transform duration-300 shadow-lg">
                View All Walks
            </a>
        </div>
      </div>
    </section>
  );
};

export default Walks;