// src/sections/Navbar.tsx
"use client";

// REMOVED: import Image from "next/image"; 
import { useState, useEffect } from "react"; // Import useEffect for scroll logic
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

// UPDATED: Simplified link structure, focusing on essential sections
const simplifiedNavLinks = [
  { label: "Home", href: "#home" },
  { label: "Explore", href: "#explore" },
  { label: "Our process", href: "#our-process" },
  { label: "Destinations", href: "#destinations" },
  { label: "Contact", href: "#contact" },
];

// Custom NavLink component for desktop with animated underline
const NavLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    key={label}
    className="relative group block uppercase text-sm font-semibold tracking-wider text-white hover:text-earthy-brown transition-colors duration-300"
  >
    {label}
    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-earthy-brown transition-all duration-300 group-hover:w-full"></span>
  </a>
);


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // New state for scroll status
  const logoText = "Unseen Kalutara";

  // Hook to handle scroll event and change the Navbar background
  useEffect(() => {
    const handleScroll = () => {
      // Set the scroll trigger point to 80px (usually past the top of the Hero)
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Define dynamic classes based on scroll state
  const headerClasses = `
    py-4 lg:py-5 fixed w-full top-0 z-[999] shadow-xl transition-all duration-500
    ${isScrolled
      // State 1: Scrolled (Solid Black for contrast)
      ? 'bg-black'
      // State 2: Top of page (Semi-transparent dark-text/95 with blur)
      : 'bg-dark-text/95 backdrop-blur-sm'
    }
  `;

  return (
    <div className="z-[999]">
      <header
        className={headerClasses} // Apply dynamic classes
      >
        <div className="mx-auto flex w-full max-w-6xl px-6 items-center justify-between">
          <a href="#home" className="text-3xl font-bold text-white tracking-wider group">
            <span className="text-2xl font-lora group-hover:text-earthy-brown transition-colors duration-300">
              {logoText}
            </span>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex gap-x-10 font-semibold text-white items-center">
            {simplifiedNavLinks.map((link) => (
              <NavLink href={link.href} label={link.label} key={link.label} />
            ))}
          </nav>

          {/* MOBILE TOGGLE BUTTON */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none p-2 text-white"
            >
              {isOpen ? (
                <FiX size={28} className="text-white" />
              ) : (
                <FiMenu size={28} className="text-white" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU - Remains solid LUSH-GREEN for brand identity */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden lg:hidden bg-lush-green shadow-inner"
            >
              <div className="flex flex-col gap-1 py-4 text-gray-200 w-full">
                {simplifiedNavLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center py-3 hover:bg-earthy-brown/80 font-lora text-xl font-bold uppercase text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}