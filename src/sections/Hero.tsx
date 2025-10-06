"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function Hero() {
  const heroImage =
    "https://i.pinimg.com/736x/c9/fd/5a/c9fd5ac44a1b05cbb1b300b80f2d4e97.jpg"; // beautiful waterfall image

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Navbar */}
      <Navbar />

      {/* Background Image */}
      <div className="absolute inset-0 z-0 -top-20">
        <img
          src={heroImage}
          alt="Lush waterfall in a forest"
          className="w-full h-full object-cover absolute "
        />
        {/* Optional dark overlay for readability */}
        <div className="absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center container mx-auto px-4 pt-24">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-lora text-5xl md:text-7xl font-bold leading-tight text-white"
        >
          Feel The Unity With The Power of Nature
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-6 text-xl md:text-2xl font-light text-gray-200 max-w-3xl mx-auto"
        >
          Routes to waterfalls and fresh forests along fairytale trails.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="mt-10 flex gap-4 justify-center"
        >
          <a
            href="#about"
            className="bg-white bg-opacity-20 backdrop-blur-md border border-balck text-black font-bold py-4 px-10 rounded-full text-lg hover:bg-opacity-40 transition duration-300 shadow-lg"
          >
            Explore More
          </a>
        </motion.div>
      </div>
    </section>
  );
}
