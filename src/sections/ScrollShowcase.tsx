// src/sections/ScrollShowcase.tsx
"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import React from "react";
// FiMaximize replaces the non-existent FiRuler
import { FiMapPin, FiClock, FiMaximize, FiMap } from "react-icons/fi";

// Data Structure 
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
            { icon: FiClock, label: "Significance", value: "A peaceful and spiritual place where thousands of devotees come to pray and make offerings." },
        ],
        full_description: "Kalutara Bodhiya is one of the most famous Buddhist temples in Sri Lanka, a symbol of faith and harmony.",
    },
    {
        title: "RICHMOND CASTLE",
        image: "/images/richmond-castle.jpg",
        details: [
            { icon: FiMapPin, label: "Location", value: "Sits on a hill 2 km (1.2 mi) from Kalutara, adjoining the Kalu Ganga." },
            { icon: FiMaximize, label: "Type", value: "Edwardian mansion built between 1900 and 1910." },
            {
                icon: FiClock, label: "Status", value: "Currently owned by the Public Trustee and open to the public.",
            },
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
];

// Animation variants for the image (entering from side)
const imageVariants: Variants = {
    hidden: (direction) => ({
        x: direction > 0 ? -100 : 100, // Enters from left (1) or right (-1)
        opacity: 0,
    }),
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 70,
            damping: 20,
            duration: 1,
        },
    },
};

// Animation variants for the text/details (entering from opposite side)
const textVariants: Variants = {
    hidden: (direction) => ({
        x: direction > 0 ? 50 : -50, // Enters from right (-1) or left (1)
        opacity: 0,
    }),
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 20,
            delay: 0.3, // Text slides in slightly after image
        },
    },
};

// UPDATED VARIANT for continuous pulse/scale loop
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


// Component for the visibly soft patterned background overlay
const PatternOverlay = () => (
    <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
            backgroundImage: 'url(/background-pattern.png)',
            backgroundSize: '150px',
            backgroundRepeat: 'repeat',
            backgroundColor: '#f5fff5', // Subtle green tint to layer over
        }}
    />
);


export default function ScrollShowcase() {
    return (
        <section id="explore" className="bg-light-bg">
            <div className="container mx-auto px-4">
                {/* TITLE ANIMATION AND ICON - Added TOP PADDING */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="font-lora text-center mb-16 text-dark-text pt-8 md:pt-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold inline-flex items-center">
                        Discover Kalutara's Jewels
                        {/* LOCATION ICON WITH CONTINUOUS PULSE/LOOP */}
                        <motion.span
                            variants={mapPinVariants}
                            initial="initial"
                            // Animate to visible ("animate"), then start the infinite loop ("loop")
                            animate={["animate", "loop"]}
                            className="ml-4 text-lush-green"
                        >
                            <FiMapPin className="inline-block text-4xl" />
                        </motion.span>
                    </h2>
                </motion.div>
            </div>

            <div className="flex flex-col gap-0">
                {sectionsData.map((item, index) => {
                    const isEven = index % 2 === 0;
                    const direction = isEven ? 1 : -1;

                    return (
                        <div key={index} className="py-0">
                            <motion.div
                                className={`flex flex-col lg:flex-row w-full overflow-hidden ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    }`}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                {/* Image Section */}
                                <motion.div
                                    custom={direction}
                                    variants={imageVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    className="relative w-full lg:w-1/2 h-80 lg:h-[65vh] flex-shrink-0 shadow-2xl"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="w-full h-full"
                                    />
                                    {/* Image Title Overlay */}
                                    <div className="absolute inset-0 bg-black/30 flex items-end p-8">
                                        {/* ADDED MAP ICON HERE */}
                                        <h2 className="font-lora text-4xl font-extrabold text-white drop-shadow-lg inline-flex items-center">
                                            {item.title}
                                            <FiMap className="ml-3 text-3xl" />
                                        </h2>
                                    </div>
                                </motion.div>

                                {/* Details/Text Section */}
                                <motion.div
                                    custom={direction}
                                    variants={textVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white relative"
                                >
                                    {/* Pattern Overlay - Now clearly visible behind content */}
                                    <PatternOverlay />

                                    {/* Content Wrapper (z-10) */}
                                    <div className="relative z-10">
                                        <h3 className="font-lora text-2xl font-bold text-lush-green mb-3">
                                            Overview
                                        </h3>
                                        {/* Animated paragraph */}
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 0.6, duration: 1 }}
                                            className="text-dark-text font-medium text-lg mb-6"
                                        >
                                            {item.full_description}
                                        </motion.p>

                                        <h4 className="font-bold text-sm text-lush-green uppercase tracking-wider mb-2">Key Details</h4>
                                        <ul className="space-y-3">
                                            {item.details.map((detail, dIndex) => (
                                                <motion.li
                                                    key={dIndex}
                                                    className="flex items-start text-dark-text border-l-4 border-earthy-brown pl-3"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true, amount: 0.4 }}
                                                    transition={{ delay: 0.3 + dIndex * 0.1, duration: 0.5 }}
                                                >
                                                    <detail.icon className="text-earthy-brown text-lg mt-1 flex-shrink-0 mr-3" />
                                                    <div>
                                                        <span className="font-bold text-sm block">{detail.label}:</span>
                                                        <span className="text-xs text-gray-600">{detail.value}</span>
                                                    </div>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}