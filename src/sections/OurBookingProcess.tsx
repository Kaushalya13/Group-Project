// src/sections/OurBookingProcess.tsx (Minimal Floating Icons - Final)
"use client";

import { motion, Variants } from "framer-motion";
import { FiSend, FiMap, FiCheckCircle } from "react-icons/fi"; 

// Data mapping the three steps from your screenshot
const guideSteps = [
  {
    icon: FiSend, 
    title: "CONSULT WITH AN EXPERT",
    description: "Match with an expert guide to craft a journey tailored to your pace and soul.",
    delay: 0.2
  },
  {
    icon: FiMap,
    title: "GET A CUSTOMIZED PLAN",
    description: "Receive insider maps and recommendations for hidden trails, cuisine, and retreats.",
    delay: 0.4
  },
  {
    icon: FiCheckCircle,
    title: "BOOK YOUR TRIP",
    description: "Seamlessly secure the best rates for all accommodations and authentic activities.",
    delay: 0.6
  },
];

// Animation for the icon to gently float/pulse
const iconAnimate: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-2, 2, -2],
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export default function OurBookingProcess() {
  return (
    // MINIMAL SECTION HEIGHT
    <section 
      id="our-process" 
      className="relative py-12 md:py-16 overflow-hidden" 
      style={{ background: `radial-gradient(circle at 50% 50%, rgba(248, 249, 250, 1) 40%, rgba(220, 230, 220, 1) 100%)` }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-lora text-3xl md:text-4xl font-bold text-center mb-4 text-dark-text">
            Three Steps to Your Sanctuary
          </h2>
          <p className="text-center text-md text-dark-text/80 mb-12 max-w-2xl mx-auto">
            Your personalized slow-travel adventure begins here. Simple steps for profound experiences.
          </p>
        </motion.div>

        {/* The Process Grid - Content now floats freely */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {guideSteps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center group p-3 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: step.delay }}
            >
              {/* ICON CONTAINER: Increased size to w-20 h-20 and simplified structure */}
              <div className="relative mx-auto w-20 h-20 flex items-center justify-center">
                
                {/* 1. Subtle pulsing glow (Base Green Circle) - PULSE IS LARGER NOW */}
                <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.2 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    className="absolute w-full h-full rounded-full bg-lush-green/20 opacity-40" 
                ></motion.div>
                
                {/* 2. Outer Ring/Border Accent - EARTHY BROWN */}
                <div className="absolute w-16 h-16 rounded-full border-2 border-earthy-brown/70 transition-colors duration-300"></div>

                {/* 3. Icon with Subtle Floating Animation (Applied directly) */}
                <motion.div
                    variants={iconAnimate}
                    animate="animate" 
                    className="relative z-10"
                >
                    {/* ICON: Increased size to text-3xl for focus */}
                    <step.icon className="text-4xl text-lush-green group-hover:text-dark-text transition-colors duration-300" />
                </motion.div>
              </div>
              
              {/* TEXT: Reduced margins, Title style maintained */}
              <h3 className="font-lora text-base font-bold mt-4 mb-1 uppercase text-dark-text tracking-wider">
                {step.title}
              </h3>
              <p className="text-dark-text/70 text-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* ADDED: The "Say Hello" Button with Enhanced Animation and Theming */}
         <div className="text-center mt-12">
             <motion.a 
                href="mailto:rangarisameesha@gmail.com" 
                // Set initial scale and whileHover to create the "pop" effect
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                // Thematic colors: Lush Green for base, Earthy Brown for hover
                className="bg-black text-white hover:bg-earthy-brown px-10 py-3 rounded-full font-extrabold inline-block transition-colors duration-300 shadow-2xl uppercase tracking-wider"
            >
                Book Your Trip
            </motion.a>
        </div>
      </div>
    </section>
  );
}