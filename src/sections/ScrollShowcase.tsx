// src/sections/ScrollShowcase.tsx
"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
// FiMaximize replaces the non-existent FiRuler
import { FiMapPin, FiClock, FiMaximize, FiMap } from "react-icons/fi"; 

// The vertical height the user must scroll to complete the horizontal transition
const SCROLL_VERTICAL_HEIGHT = 450; 

// Data Structure (Updated with the fixed FiMaximize icon)
const sectionsData = [
  {
    title: "RANNAGALA ELLA",
    image: "/images/rannagala-ella.jpg",
    details: [
      { icon: FiMapPin, label: "Location", value: "Rannagala village in Neboda, Kalutara district." },
      { icon: FiMaximize, label: "Height", value: "Approx 6 meters (best seen during rainy season)." },
      { icon: FiMap, label: "Access", value: "5.7 km from Matugama town on the Neboda road." },
    ],
    full_description: "This small Rannagala Ella Waterfall is approx 6 meters in height and is best seen during the rainy season. You can reach this waterfall easily from Matugama or Neboda.",
  },
  {
    title: "NARTHUPANA BRIDGE",
    image: "/images/narthupana-bridge.jpg",
    details: [
      { icon: FiMapPin, label: "Location", value: "Crosses the Kalu Ganga River, 2 km from city center." },
      { icon: FiMaximize, label: "Nickname", value: "Known locally as the Rainbow Bridge." },
      { icon: FiClock, label: "Best Time", value: "Sunset, when the sky reflects on the water." },
    ],
    full_description: "Narthupana Bridge is admired for its calm surroundings and scenic views, making it a popular place for travelers and locals to relax and take photographs.",
  },
  {
    title: "KALUTARA BODHIYA",
    image: "/images/kaluthara-bodhiya.jpg",
    details: [
      { icon: FiMapPin, label: "Location", value: "Heart of Kalutara town beside the Kalu Ganga River." },
      { icon: FiMaximize, label: "Feature", value: "Home to one of the few hollow stupas in the world (walkable inside)." },
      { icon: FiClock, label: "Significance", value: "A peaceful and spiritual place for thousands of devotees." },
    ],
    full_description: "Kalutara Bodhiya is one of the most famous Buddhist temples in Sri Lanka, a symbol of faith and harmony.",
  },
  {
    title: "RICHMOND CASTLE",
    image: "/images/richmond-castle.jpg",
    details: [
      { icon: FiMapPin, label: "Location", value: "Sits on a hill 2 km (1.2 mi) from Kalutara, adjoining the Kalu Ganga." },
      { icon: FiMaximize, label: "Type", value: "Edwardian mansion built between 1900 and 1910." },
      { icon: FiClock, label: "Status", value: "Currently owned by the Public Trustee and open to the public." },
    ],
    full_description: "Richmond Castle was the country seat of Mudaliyar Don Arthur de Silva Wijesinghe Siriwardena. It offers a glimpse into colonial architecture.",
  },
  {
    title: "THUDUGALA ELLA",
    image: "/images/thudugala-ella.jpg",
    details: [
      { icon: FiMapPin, label: "Location", value: "Thudugala village, 8Km from Kalutara town." },
      { icon: FiMaximize, label: "Height", value: "Approx 8 meters (Rank 268th of Sri Lanka's waterfalls)." },
      { icon: FiClock, label: "Best For", value: "A refreshing dip and a peaceful day out in nature." },
    ],
    full_description: "The Thudugala Ella waterfall is a popular natural attraction in the Dodangoda Divisional Secretariat area of Kalutara District.",
  },
  {
    title: "KANDE VIHARAYA",
    image: "https://images.pexels.com/photos/1614860/pexels-photo-1614860.jpeg",
    details: [
      { icon: FiMapPin, label: "Location", value: "Aluthgama, a key cultural center." },
      { icon: FiMaximize, label: "Feature", value: "Famous for one of the largest sitting Buddha statues in the world." },
      { icon: FiClock, label: "Experience", value: "A major cultural and spiritual site for visitors seeking peace." },
    ],
    full_description: "Kande Viharaya is a highly respected Buddhist temple famous for its monumental Buddha statue and stunning architecture.",
  },
];


// Helper component for the individual slide layout
const Slide = ({ item, index }: { item: typeof sectionsData[0], index: number }) => {
    // Alternating direction for the "magical" effect (ensures alternating entry/exit)
    // 0, 2, 4... will slide Right on entry/Left on exit. 1, 3, 5... will slide Left on entry/Right on exit.
    const direction = index % 2 === 0 ? 1 : -1; 
    
    // Use useScroll on the slide itself to drive local animations while it is visible.
    const slideRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: slideRef,
        // Start the animation when the top of the slide section hits the viewport center (0.5) 
        // and end when the bottom hits the viewport center.
        offset: ["start 0.5", "end 0.5"] 
    });

    // Map scroll progress (0 to 1) to a local x-offset for dynamic convergence/divergence
    // The details block will be shifted more dramatically to simulate 'appearing from the opposite side'.
    const imageX = useTransform(scrollYProgress, [0, 0.5, 1], [`${direction * 15}px`, '0px', `${direction * -15}px`]);
    const detailsX = useTransform(scrollYProgress, [0, 0.5, 1], [`${direction * -50}px`, '0px', `${direction * 50}px`]);

    // Opacity for the magical fading effect
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

    // Scale/Shrink slightly for added magic
    const scale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.95, 1, 0.95]);

    return (
        <div ref={slideRef} className="flex-shrink-0 w-full h-full flex items-center justify-center bg-transparent">
            {/* The individual card container (Motion applied to fade in/out) */}
            <motion.div 
                style={{ opacity, scale }}
                className="flex w-11/12 lg:w-4/5 h-4/5 bg-white shadow-2xl rounded-xl overflow-hidden"
            >
                
                {/* Image (Left Side) - Magic movement applied */}
                <motion.div 
                    style={{ x: imageX }}
                    className="relative w-1/2 h-full"
                >
                    <Image 
                        src={item.image}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full"
                    />
                    {/* Dark gradient to ensure text readability on the left if we were to overlap text */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/0"></div>
                </motion.div>

                {/* Details/Text (Right Side) - Magic movement applied (Opposite Direction) */}
                <motion.div 
                    style={{ x: detailsX }}
                    className="w-1/2 p-8 flex flex-col justify-center"
                >
                    <h3 className="font-lora text-4xl font-bold text-lush-green mb-4">
                        {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm mb-6">{item.full_description}</p>
                    
                    <ul className="space-y-3">
                        {item.details.map((detail, dIndex) => (
                            <li key={dIndex} className="flex items-start text-dark-text">
                                <detail.icon className="text-earthy-brown text-lg mt-1 flex-shrink-0 mr-3" />
                                <div>
                                    <span className="font-bold text-sm block">{detail.label}:</span>
                                    <span className="text-xs text-gray-600">{detail.value}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </motion.div>
        </div>
    );
};


export default function ScrollShowcase() {
    const targetRef = useRef(null);
    
    // Calculate the total horizontal width required
    const totalWidth = sectionsData.length * 100;

    // 1. Use useScroll to track the vertical scroll position of the entire section
    const { scrollYProgress } = useScroll({
        target: targetRef,
        // The animation starts when the section begins entering the viewport and ends when it begins leaving
        offset: ["start end", "end start"], 
    });

    // 2. Use useTransform to map the vertical scroll progress (0 to 1) 
    //    to the overall horizontal position (0 to -500vw)
    const x = useTransform(scrollYProgress, [0, 1], [`0%`, `-${totalWidth - 100}%`]);
    
    // The total height of the scroll container must be proportional to the number of slides
    // This provides the vertical space needed to scroll through the horizontal content.
    const containerHeight = `${sectionsData.length * SCROLL_VERTICAL_HEIGHT}vh`;


    return (
        <section className="bg-light-bg">
            <div 
                ref={targetRef} 
                // Set the height of the outer container to drive the vertical scroll range
                style={{ height: containerHeight }}
                className="relative"
            >
                {/* Inner container that "pins" the content during vertical scroll */}
                <div className="sticky top-0 h-screen overflow-hidden flex items-center">
                    {/* The horizontal track that moves left/right */}
                    <motion.div
                        style={{ x }} // Global horizontal scroll position
                        className="flex h-screen"
                        // Width is 100vw * number of slides
                        initial={{ width: `${totalWidth}vw` }}
                        animate={{ width: `${totalWidth}vw` }}
                    >
                        {sectionsData.map((item, index) => (
                            // Pass motion value 'x' down if needed, but here we let Slide handle its own local scroll effects
                            <Slide key={index} item={item} index={index} /> 
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}