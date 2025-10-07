// src/sections/CulturalImmersion.tsx
"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
// Using icons to represent the three aspects of the cultural experience
import { FiHome, FiSmile, FiHeart, FiFeather, FiMapPin } from "react-icons/fi";

// --- START: FILE-LEVEL DATA AND VARIANTS DEFINITIONS ---

const culturalHighlights = [
    {
        icon: FiHeart, // Hospitality
        title: "Genuine Hospitality",
        description: "Experience the warmth of Kalutara, where every greeting is sincere.",
    },
    {
        icon: FiHome, // Village/Community
        title: "Village Immersion",
        description: "Explore cultural villages and participate in traditional crafts.",
    },
    {
        icon: FiSmile, // Food/Cuisine
        title: "The Local Table",
        description: "Join a family kitchen for authentic cooking and shared meals.",
    },
];

// Use a rotating set of images for the background
const heroBackgroundImages = [
    // Note: User must verify these paths exist in /public/images/
    "/images/culture-food.jpg",
    "/images/culture-village.jpg",
    "/images/culture-village2.jpg",
    "/images/culture-tea.jpg",
    "/images/culture-village3.JPG",
    "/images/culture-tree.jpg",
];

// FIX: New variant for smooth cross-fade (removed vertical movement and ensured overlap)
const bgImageVariants: Variants = {
    initial: {
        opacity: 0,
        scale: 1.05, // Starts slightly zoomed in
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1.5, // Slow, soft entrance
            ease: "easeInOut",
        },
    },
    exit: {
        opacity: 0,
        scale: 1.05,
        transition: {
            duration: 1.5, // Matching exit time for smooth overlap/cross-fade
            ease: "easeInOut",
        },
    },
};

// Defined at the file level - FIX: Ensure all variants are defined at the root level.
const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

// Defined at the file level
const contentBlockVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, type: "spring", stiffness: 50, staggerChildren: 0.15 } },
};

// Defined at the file level
const highlightItemVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
};

const mapPinVariants: Variants = {
    initial: {
        scale: 0.5, // Reduced initial scale for better visual start
        opacity: 0,
        y: -10,
    },
    animate: {
        scale: 1, // Ends at normal size
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.5,
        },
    },
    loop: {
        scale: [1, 1.05, 1], // Subtle scale pulse
        opacity: [1, 0.9, 1], // Subtle opacity pulse
        transition: {
            duration: 1.2,
            ease: "easeInOut",
            repeat: Infinity,
        },
    },
};

export default function CulturalImmersion() {
    // Re-declare state variables locally
    const [currentBgIndex, setCurrentBgIndex] = useState(0);

    // Auto-cycle background images
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentBgIndex((prevIndex) =>
                (prevIndex + 1) % heroBackgroundImages.length
            );
        }, 5000);
        return () => clearInterval(timer);
    }, []);


    return (
        <section id="culture" className="bg-white overflow-hidden">

            {/* 1. SEPARATE TITLE HEADER */}
            <div className="container mx-auto px-4 py-12 md:py-16">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={containerVariants}
                    className="text-center"
                >
                    <motion.h2
                        variants={highlightItemVariants}
                        // FIX: Added inline-flex and items-center to align text and icon horizontally
                        className="font-lora text-4xl md:text-5xl font-bold text-dark-text mb-3 inline-flex items-center justify-center"
                    >
                        Culture in the Soul of Kalutara
                        {/* ICON MOVED INSIDE H2 TAG */}
                        <motion.span
                            variants={mapPinVariants}
                            initial="initial"
                            // Animate to visible ("animate"), then start the infinite loop ("loop")
                            animate={["animate", "loop"]}
                            className="ml-4 text-lush-green"
                        >
                            <FiMapPin className="inline-block text-4xl" />
                        </motion.span>
                    </motion.h2>
                </motion.div>
            </div>


            {/* 2. ASYMMETRICAL IMMERSION BLOCK (Cycling Background + Floating Details) */}
            <div className="relative w-full h-[70vh] md:h-[75vh] flex overflow-hidden">

                {/* Left Side: CYCLING BACKGROUND IMAGE */}
                <AnimatePresence>
                    <motion.div
                        key={heroBackgroundImages[currentBgIndex]}
                        variants={bgImageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="absolute left-0 top-0 w-full lg:w-4/5 h-full z-0"
                    >
                        {/* FIX: Using the cycling image array for the src */}
                        <Image
                            src={heroBackgroundImages[currentBgIndex]}
                            alt="Cultural immersive experience in Kalutara"
                            layout="fill"
                            objectFit="cover"
                            className="w-full h-full"
                        />
                        {/* Gradient Overlay for blending and text contrast */}
                        <div className="absolute inset-0 bg-dark-text/70 lg:bg-gradient-to-r from-dark-text/80 to-dark-text/30"></div>
                    </motion.div>
                </AnimatePresence>

                {/* Right Side: Floating Content & Highlights (Aligned Right) */}
                <div className="absolute right-0 top-0 w-full lg:w-3/5 h-full flex justify-end items-center px-4 md:px-8 z-10">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={contentBlockVariants}
                        className="w-full max-w-lg p-6 md:p-8 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl text-left"
                    >
                        <h3 className="font-lora text-2xl font-bold text-lush-green mb-4 flex items-center">
                            The Local Experience <FiFeather className="ml-2 text-earthy-brown text-4xl text-green-600" />
                        </h3>

                        <div className="space-y-4">
                            {/* Animated Cultural Highlights */}
                            {culturalHighlights.map((highlight, index) => (
                                <motion.div
                                    key={index}
                                    variants={highlightItemVariants}
                                    className="flex items-start space-x-3"
                                >
                                    <highlight.icon className="text-2xl text-earthy-brown flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-dark-text text-md mb-1">
                                            {highlight.title}
                                        </h4>
                                        <p className="text-gray-700 text-sm">{highlight.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}