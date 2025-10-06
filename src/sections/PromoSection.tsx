"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const PromoSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
          
          {/* Left Image */}
          <div className="relative h-96 w-full hidden lg:block rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://i.pinimg.com/1200x/3a/56/23/3a56234b1eb40cf5b0c010bd7cfe649d.jpg"
              alt="Promo fashion 1"
              fill
              style={{ objectFit: "cover" }}
              className="hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Center Text Block */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-500 text-white text-center py-16 px-8 rounded-3xl shadow-2xl relative overflow-hidden">
            {/* Animated "20% OFF" */}
            <motion.h2
              className="font-montserrat font-extrabold text-6xl md:text-7xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.2 }}
            >
              20% OFF
            </motion.h2>

            {/* Animated Subtitle */}
            <motion.h3
              className="font-montserrat font-semibold text-3xl md:text-4xl mt-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Spring Collection
            </motion.h3>

            <motion.p
              className="mt-6 text-white/90 max-w-md mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Limited time offer! Refresh your look with our vibrant new arrivals. Don’t miss out!
            </motion.p>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 120 }}
            >
              <Link href="/sale">
                <button className="mt-10 bg-white text-purple-600 font-bold py-3 px-12 rounded-full shadow-lg hover:scale-105 hover:bg-white/90 transition-all">
                  Shop Now
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 w-full hidden lg:block rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://i.pinimg.com/1200x/56/3d/96/563d96fcfabedc3b712658ed642c4278.jpg"
              alt="Promo fashion 2"
              fill
              style={{ objectFit: "cover" }}
              className="hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>

      {/* Optional Extra Animation Styles */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default PromoSection;
