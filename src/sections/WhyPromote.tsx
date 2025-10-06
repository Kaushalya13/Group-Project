// src/sections/WhyPromote.tsx
"use client";

import { motion } from "framer-motion";
// Assuming you have 'react-icons' installed for these icons
import { FaMoneyBillWave, FaHandshake, FaLeaf } from "react-icons/fa"; 

const whyPoints = [
  {
    icon: FaMoneyBillWave,
    title: "Economic Empowerment",
    description: "Tourism is a key driver of economic growth for Sri Lanka. Promoting hidden gems ensures foreign exchange earnings and employment are spread directly to local, underserved communities, fostering new small businesses and job opportunities.",
    delay: 0.2
  },
  {
    icon: FaHandshake,
    title: "Preservation of Heritage",
    description: "Responsible tourism supports the protection of our natural environment and drives cultural revival. By valuing local traditions, we empower communities to maintain and proudly showcase their unique identity and heritage.",
    delay: 0.4
  },
  {
    icon: FaLeaf,
    title: "A Model for Sustainable Travel",
    description: "By focusing on lesser-known areas, we help reduce the pressure of over-tourism on popular sites. This approach promotes slow travel, ecological responsibility, and a deeper, more meaningful connection with the land and its people.",
    delay: 0.6
  },
];

export default function WhyPromote() {
  return (
    <section id="why-promote" className="py-20 md:py-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-lora text-4xl md:text-5xl font-bold text-center mb-4">
            The Heartbeat of Our Mission
          </h2>
          <p className="text-center text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
            Promoting Kalutara's hidden gems is not just about travel—it's about creating a sustainable, equitable future for Sri Lanka.
          </p>
        </motion.div>

        {/* Grid for the three key points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {whyPoints.map((point, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: point.delay }}
            >
              <point.icon className="mx-auto text-6xl text-lush-green mb-6" />
              <h3 className="font-lora text-2xl font-bold mb-3">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}