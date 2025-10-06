"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Attractions", href: "#attractions" },
  { label: "Wellness", href: "#wellness" },
  { label: "Culture", href: "#culture" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const logoUrl = `https://i.pinimg.com/1200x/6c/8e/3d/6c8e3d589d47dfc2f1907bdf9d30d77c.jpg`;

  return (
    <>
      <header className="py-4 lg:py-6 fixed w-full top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="border border-lush-green/15 rounded-full bg-light-bg/80 backdrop-blur-lg shadow-md">
            <div className="grid grid-cols-2 lg:grid-cols-3 p-2 px-6 items-center">
              {/* Logo */}
              <div>
                <Image
                  src={logoUrl}
                  alt="Unseen Kalutara Logo"
                  width={56}
                  height={56}
                  className="rounded-full"
                />
              </div>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex justify-center items-center">
                <ul className="flex gap-x-8 font-medium text-dark-text">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="hover:text-earthy-brown transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Buttons & Mobile Menu */}
              <div className="flex justify-end gap-4 items-center">
                 <a href="#contact" className="hidden lg:block bg-lush-green text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all">
                    Book Now
                 </a>
                <div onClick={() => setIsOpen(!isOpen)} className="lg:hidden cursor-pointer">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </div>
              </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden lg:hidden"
                >
                  <nav className="flex flex-col items-center gap-6 py-6">
                    {navLinks.map((link) => (
                      <a href={link.href} key={link.label} onClick={() => setIsOpen(false)} className="hover:text-earthy-brown transition-colors">
                        {link.label}
                      </a>
                    ))}
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>
       {/* Spacer */}
       <div className="pb-[86px] md:pb-[98px]" />
    </>
  );
}