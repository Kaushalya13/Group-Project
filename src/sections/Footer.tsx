// src/sections/Footer.tsx (Minimalist Contact Form)
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
    FiFacebook,
    FiInstagram,
    FiTwitter,
    FiYoutube,
    FiSend,
    FiMail
} from "react-icons/fi";

const socialLinks = [
    { name: "Facebook", icon: FiFacebook, href: "https://www.facebook.com/share/1A6uQv76aC/" },
    { name: "Instagram", icon: FiInstagram, href: "#" },
    { name: "YouTube", icon: FiYoutube, href: "#" },
    { name: "TikTok", icon: FiTwitter, href: "https://www.tiktok.com/@rds.lanka?_t=ZS-90KMmCaIJEr&_r=1" }, // Using Twitter icon as placeholder for TikTok
];

// Framer Motion Variants for staggered entrance
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};


export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionStatus("");

        // Placeholder API submission logic
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Simulate success or failure
        if (Math.random() > 0.1) {
            setSubmissionStatus("Success! Your message has been sent. We'll be in touch soon.");
            setFormData({ name: "", email: "", message: "" });
        } else {
            setSubmissionStatus("Error! Something went wrong. Please try emailing us directly.");
        }
        setIsSubmitting(false);
    };

    return (
        <footer id="contact" className="bg-dark-text bg-black text-white py-16 md:py-24">
            <div className="container mx-auto px-6">

                {/* Main Contact Grid (Form & Info) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                    className="grid lg:grid-cols-2 gap-10" // Reduced gap
                >

                    {/* 1. Contact Form */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <motion.h3 className="font-lora font-bold text-3xl text-lush-green" variants={itemVariants}>
                            Plan Your Journey
                        </motion.h3>
                        <p className="text-gray-300">
                            Ready to explore Kalutara? Send us a message and our local experts will craft your personalized itinerary.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <motion.div variants={itemVariants}>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-dark-text/70 border border-earthy-brown/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-lush-green"
                                    placeholder="Your name"
                                />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-dark-text/70 border border-earthy-brown/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-lush-green"
                                    placeholder="your.email@example.com"
                                />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 bg-dark-text/70 border border-earthy-brown/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-lush-green resize-none"
                                    placeholder="Tell us about your ideal trip..."
                                />
                            </motion.div>

                            {submissionStatus && (
                                <p className={`text-center font-semibold text-sm ${submissionStatus.includes("Success") ? 'text-lush-green' : 'text-earthy-brown'}`}>
                                    {submissionStatus}
                                </p>
                            )}

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-lush-green text-white font-extrabold py-3 px-8 rounded-lg shadow-xl hover:bg-earthy-brown transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                                variants={itemVariants}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                            >
                                {isSubmitting ? (
                                    <motion.div
                                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    />
                                ) : (
                                    <FiSend size={20} />
                                )}
                                {isSubmitting ? 'Sending Message...' : 'Send Message'}
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* 2. Brand Info and Socials */}
                    <motion.div variants={itemVariants} className="lg:pt-4 space-y-8">

                        {/* Brand Information */}
                        <div className="space-y-3">
                            <h3 className="font-lora font-bold text-3xl text-white">
                                Unseen Kalutara
                            </h3>
                            <p className="text-gray-400">
                                Your soulful sanctuary. A journey into nature, culture, and wellness.
                            </p>
                        </div>

                        {/* Direct Email Link (Simplified from two columns) */}
                        <div className="space-y-2">
                            <h4 className="font-semibold text-lush-green uppercase tracking-wider">
                                Email Us
                            </h4>
                            <div className="flex items-center space-x-2 text-md text-gray-300">
                                <FiMail className="text-earthy-brown" />
                                <a href="mailto:rangarisameesha@gmail.com" className="hover:text-white transition">rangarisameesha@gmail.com</a>
                            </div>
                        </div>

                        {/* Direct contact Link (Simplified from two columns) */}
                        <div className="space-y-2">
                            <h4 className="font-semibold text-lush-green uppercase tracking-wider">
                                Contact Us
                            </h4>
                            <div className="flex items-center space-x-2 text-md text-gray-300">
                                <FiMail className="text-earthy-brown" />
                                <a href="mailto:0761875606" className="hover:text-white transition">0761875606</a>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="space-y-2">
                            <h4 className="font-semibold text-lush-green uppercase tracking-wider">
                                Follow Us
                            </h4>
                            <div className="flex space-x-6">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-earthy-brown transition-colors duration-300"
                                        aria-label={`Follow us on ${social.name}`}
                                    >
                                        <social.icon size={26} />
                                    </a>
                                ))}
                            </div>
                        </div>

                    </motion.div>
                </motion.div>

                {/* Bottom Copyright */}
                <div className="border-t border-gray-700/50 mt-12 pt-6 text-center text-sm">
                    <p className="text-gray-500">
                        &copy; {new Date().getFullYear()} Unseen Kalutara. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}