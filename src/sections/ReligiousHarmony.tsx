// src/sections/ReligiousHarmony.tsx
"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
// Icons representing faith and unity
import { FiTarget, FiStar, FiSun, FiFeather } from "react-icons/fi";

// --- START: FILE-LEVEL DATA AND VARIANTS DEFINITIONS ---

const religiousHighlights = [
    {
        icon: FiTarget, // Focus/Purpose
        title: "Symbol of Unity",
        description: "Kalutara showcases centuries of peaceful coexistence among multiple faiths.",
    },
    {
        icon: FiStar, // Light/Guidance
        title: "Sacred Sanctuaries",
        description: "Visit ancient Buddhist temples, Hindu kovils, mosques, and historic churches.",
    },
    {
        icon: FiSun, // Peace/Light
        title: "Pilgrimage Hub",
        description: "The region hosts some of Sri Lanka's most significant sites for devotees and tourists alike.",
    },
];

const heroBackgroundImages = [
    "/images/kaluthara-bodhiya.jpg", 
    "/images/mosque.JPG",             
    "/images/kovil.JPG",              
    "/images/church.jpg",             
];

// Animation for the cycling background images (Smooth cross-fade)
const bgImageVariants: Variants = {
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: "easeInOut" } },
    exit: { opacity: 0, scale: 1.05, transition: { duration: 1.5, ease: "easeInOut" } },
};

// Defined at the file level
const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

// Animation variants for the whole text block entrance (SLIDES IN FROM LEFT)
const contentBlockVariants: Variants = {
    hidden: { opacity: 0, x: -100 }, 
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, type: "spring", stiffness: 50, staggerChildren: 0.15 } },
};

// Animation variants for the highlight items (SLIDES IN FROM LEFT)
const highlightItemVariants: Variants = {
    hidden: { opacity: 0, x: -50 }, 
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
};

// --- END: FILE-LEVEL DATA AND VARIANTS DEFINITIONS ---


export default function ReligiousHarmony() {
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
        <section id="religious" className="bg-white overflow-hidden">
            
            {/* 1. SEPARATE TITLE HEADER */}
            <div className="container mx-auto px-4 py-12 md:py-16">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={containerVariants}
                    className="text-center"
                >
                    <motion.h2 variants={highlightItemVariants} className="font-lora text-4xl md:text-5xl font-bold text-dark-text mb-3">
                        A Tapestry of Faith
                    </motion.h2>
                    <motion.p variants={highlightItemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
                        {/* FIX APPLIED: Escaped apostrophe */}
                        Experience the profound harmony and cultural unity in Kalutara&apos;s sacred spaces.
                    </motion.p>
                </motion.div>
            </div>

            <div className="relative w-full h-[70vh] md:h-[75vh] flex overflow-hidden"> 
                
                {/* Left Side: FLOATING CONTENT & HIGHLIGHTS (ALIGNED LEFT) */}
                <div className="absolute left-0 top-0 w-full lg:w-3/5 h-full flex justify-start items-center px-4 md:px-8 z-10">
                    
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={contentBlockVariants} // Slides the entire block in from the left
                        className="w-full max-w-lg p-6 md:p-8 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl text-left"
                    >
                        <h3 className="font-lora text-2xl font-bold text-lush-green mb-4 flex items-center">
                            Religious Coexistence <FiFeather className="ml-2 text-earthy-brown text-4xl" />
                        </h3>
                        
                        <div className="space-y-4">
                            {/* Animated Highlights */}
                            {religiousHighlights.map((highlight, index) => (
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


                {/* Right Side: CYCLING BACKGROUND IMAGE (Image Dominates Right Side) */}
                <AnimatePresence>
                    <motion.div
                        key={heroBackgroundImages[currentBgIndex]}
                        variants={bgImageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        // PLACEMENT: Aligned to the right, taking up the majority of the background space
                        className="absolute right-0 top-0 w-full lg:w-4/5 h-full z-0"
                    >
                        <Image
                            src={heroBackgroundImages[currentBgIndex]}
                            alt="Sacred sites of Kalutara"
                            layout="fill"
                            objectFit="cover"
                            className="w-full h-full"
                        />
                        <div className="absolute inset-0 bg-dark-text/70 lg:bg-gradient-to-l from-dark-text/80 to-dark-text/30"></div>
                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    );
}