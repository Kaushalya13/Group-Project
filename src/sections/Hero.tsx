// src/sections/Hero.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
// CHANGED: Replaced FiArrowDown with FiChevronsDown for the double arrow look
import { FiChevronsDown } from "react-icons/fi"; 

// Define the custom bounce animation variants
const bounceArrow: Variants = {
  animate: {
    y: [0, 10, 0], // Move 10px down and back up
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export default function Hero() {
  const heroVideo = "/videos/hero-video.mp4";
  const heroPoster = "https://i.pinimg.com/73x/c9/fd/5a/c9fd5ac44a1b05cbb1b300b80f2d4e97.jpg";

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden"
    >
      {/* Background Video Element */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroPoster}
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          <Image src={heroPoster} alt="Lush waterfall in a forest" layout="fill" objectFit="cover" />
        </video>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div
        className="relative z-10 text-center container mx-auto px-4 pt-40 sm:pt-32 pb-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-lora text-5xl md:text-8xl font-extrabold leading-tight text-white drop-shadow-xl"
        >
          The Hidden Beauty of Kaluganthota
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-6 text-xl md:text-3xl font-light text-gray-100 max-w-4xl mx-auto drop-shadow-lg"
        >
          Routes to waterfalls and fresh forests along fairytale trails. Your journey into slow travel begins here.
        </motion.p>

        <div className="mt-10 h-12">
            {/* Empty div to maintain spacing where the button was */}
        </div>
      </div>

      {/* Scroll Down Arrow with Animation */}
      <motion.div
        className="absolute bottom-10 z-20 cursor-pointer"
      >
        <a href="#our-process" aria-label="Scroll down to discover more">
          <motion.div
            variants={bounceArrow}
            animate="animate"
            className="p-3  hover:border-earthy-brown transition-colors duration-300"
          >
            {/* CHANGED ICON HERE */}
            <FiChevronsDown className="text-3xl text-white relative drop-shadow-lg" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}