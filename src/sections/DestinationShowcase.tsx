// src/sections/DestinationShowcase.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
// Importing Chevron icons for navigation
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Data Structure (using your latest provided list)
const destinations = [
    {
        title: "KALUTARA JUMMA MOSQUE",
        subtitle: "KALUTARA, SRI LANKA",
        image: "/images/Mosque.jpg",
    },
    {
        title: "KALUTHARA BODHIYA",
        subtitle: "KALUTHARA BODHIYA, SRI LANKA",
        image: "/images/kaluthara-bodhiya.jpg",
    },
    {
        title: "KALUTHARA KOVIL",
        subtitle: "KALUTARA, SRI LANKA",
        image: "/images/kovil.jpg",
    },
    {
        title: "THUDUGALA ELLA",
        subtitle: "KALUTARA, SRI LANKA",
        image: "/images/thudugala-ella.jpg",
    },
    {
        title: "NARTHUPANA BRIDGE",
        subtitle: "KALUGAN THOTA, SRI LANKA",
        image: "/images/narthupana-bridge.jpg",
    },
    {
        title: "RICHMOND CASTLE",
        subtitle: "PALACE, KALUTARA",
        image: "/images/richmond-castle.jpg",
    },
    {
        title: "RANNAGALA ELLA",
        subtitle: "NEBODA, SRI LANKA",
        image: "/images/rannagala-ella.jpg",
    }
];

// Framer Motion Variants for smooth cross-fade animation
const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
};

export default function DestinationShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // ADDED: Auto-advance logic (reintroduced)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                (prevIndex + 1) % destinations.length
            );
        }, 3000); // Cycles every 5 seconds

        return () => clearInterval(timer);
    }, []);

    // Manual navigation functions (kept for buttons/dots)
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + destinations.length) % destinations.length);
    };

    const currentDest = destinations[currentIndex];

    return (
        // Height h-[85vh] maintained
        <section id="destinations" className="relative h-[90vh] overflow-hidden">

            {/* 1. Background Image Container with Cross-Fade */}
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentDest.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={currentDest.image}
                        alt={currentDest.title}
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full"
                        priority
                    />
                    {/* Dark Overlay maintained */}
                    <div className="absolute inset-0 bg-dark-text/50 backdrop-brightness-[0.7]"></div>
                </motion.div>
            </AnimatePresence>

            {/* 2. Destination Content (Overlaid) */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentDest.title + "content"}
                        variants={contentVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="text-center"
                    >
                        {/* Main Title */}
                        <h1 className="font-lora text-6xl md:text-8xl font-extrabold tracking-widest leading-none drop-shadow-lg mb-1">
                            {currentDest.title}
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl md:text-3xl font-light tracking-widest drop-shadow-md">
                            {currentDest.subtitle}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* 3. Manual Navigation Buttons (Left/Right) - Kept for user control */}
            <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
                aria-label="Previous destination"
            >
                <FiChevronLeft size={30} />
            </button>
            <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
                aria-label="Next destination"
            >
                <FiChevronRight size={30} />
            </button>


            {/* 4. Navigation Dots (Visual Feedback) - Kept for visual continuity */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                {destinations.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                            }`}
                        aria-label={`Go to destination ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}