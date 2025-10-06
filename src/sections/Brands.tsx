"use client";

import Image from "next/image";
import React, { Fragment } from "react";
import { motion } from "framer-motion";

const logos = [
  {
    name: "Nike",
    image: "https://i.pinimg.com/1200x/57/8a/aa/578aaaef028c80d5fbef2b990e6c51a9.jpg",
  },
  {
    name: "Louis Vuitton",
    image: "https://i.pinimg.com/1200x/0b/77/45/0b774523102522d97edc4b247775fcfb.jpg",
  },
  {
    name: "Chanel",
    image: "https://i.pinimg.com/736x/d4/87/5a/d4875a2874ad205f34c9796791859366.jpg",
  },
  {
    name: "Levis",
    image: "https://i.pinimg.com/1200x/16/18/03/16180362d03da923012bc94b4b537ad7.jpg",
  },
  {
    name: "Adidas",
    image: "https://i.pinimg.com/1200x/c3/0a/b8/c30ab88c6252eee1fcc2e440859e6591.jpg",
  },
  {
    name: "Puma",
    image: "https://i.pinimg.com/736x/cf/46/78/cf4678145189072f8bc7fb5b5e874eb2.jpg",
  },
  {
    name: "Calvin Klein",
    image: "https://i.pinimg.com/1200x/09/37/76/0937769409d5a4f459558e309ffa2825.jpg",
  },
];


export default function LogoTicker() {
  return (
    <section className="py-24 overflow-x-clip">
      
      <div className="container mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
            Explore Our Exclusive Brands
        </h2>
        <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to right, transparent, black_10%, black_90%, transparent)]">
          <motion.div
            animate={{ x: "-50%" }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            className="flex flex-none gap-24 pr-24"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {logos.map((logo) => (
                  <img
                    src={logo.image}
                    key={logo.name}
                    alt={logo.name}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
