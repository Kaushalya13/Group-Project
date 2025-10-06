// src/sections/Navbar.tsx
"use client";

import Image from "next/image";
import menuIcon from "@/assets/images/menu.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Defines the full list of links, grouped conceptually
const groupedNavLinks = [
  { 
    label: "Home", 
    href: "#home", 
    isMain: true 
  },
  { 
    label: "Explore", 
    href: "#explore-hub", 
    isMain: true,
    subLinks: [
      { label: "Natural Attractions", href: "#attractions" },
      { label: "Walks & Adventure", href: "#walks" },
      { label: "Wildlife", href: "#wildlife" },
    ]
  },
  { 
    label: "Culture", 
    href: "#culture", 
    isMain: true 
  },
  { 
    label: "Cuisine & Wellness", 
    href: "#cuisine", 
    isMain: true,
    subLinks: [
      { label: "Local Cuisine", href: "#cuisine" },
      { label: "Ayurvedic Wellness", href: "#wellness" },
    ]
  },
  { 
    label: "Mission", 
    href: "#why-promote", 
    isMain: true 
  },
  { 
    label: "Contact", 
    href: "#contact", 
    isMain: true 
  },
];

// Flat list for the primary (desktop) navigation
const mainNavLinks = groupedNavLinks.filter(link => link.isMain);


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const logoUrl = `https://i.pinimg.com/1200x/6c/8e/3d/6c8e3d589d47dfc2f1907bdf9d30d77c.jpg`;
  const logoText = "Kalutara";

  return (
    <>
      <header className="py-4 lg:py-5 fixed w-full top-0 z-50 bg-black">
        <div className="mx-auto flex w-full max-w-6xl px-6 items-center justify-between">
          <a href="#home" className="text-3xl font-bold text-white tracking-wider">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src={logoUrl}
                alt="Unseen Kalutara Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
              <span className="ml-3">{logoText}</span>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex gap-x-8 font-semibold text-white">
            {mainNavLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
                // The hover style is using a CSS variable which needs to be defined in globals.css
                className="hover:text-[var(--accent)] transition-colors uppercase text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* MOBILE TOGGLE BUTTON */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <Image
                src={menuIcon}
                alt="menu"
                width={28}
                height={28}
                className="invert"
              />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden lg:hidden bg-gray-900"
            >
              <div className="flex flex-col gap-2 py-4 text-gray-200 w-full">
                {groupedNavLinks.map((link) => (
                  <div key={link.label} className="w-full">
                    {/* Main Category Link */}
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-center py-2 hover:bg-gray-800 font-semibold uppercase text-white"
                    >
                      {link.label}
                    </a>
                    
                    {/* Sub-Section Links (if they exist) */}
                    {link.subLinks && (
                      <div className="flex flex-col items-center bg-gray-800 border-t border-gray-700/50">
                        {link.subLinks.map((subLink) => (
                          <a
                            href={subLink.href}
                            key={subLink.label}
                            onClick={() => setIsOpen(false)}
                            className="w-full text-center py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors"
                          >
                            — {subLink.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {/* Spacer to prevent content from hiding under the fixed navbar */}
      <div className="pb-[72px] lg:pb-[84px]" />
    </>
  );
}