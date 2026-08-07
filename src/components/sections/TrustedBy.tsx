"use client";

import { motion } from "framer-motion";

const LOGOS = [
  "Tech Startup",
  "Real Estate Firm",
  "E-commerce Brand",
  "Healthcare Practice",
  "Restaurant Group",
  "Law Office",
];

export function TrustedBy() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-semibold text-[var(--color-navy)] mb-3 tracking-tight"
        >
          Helping Clients Worldwide
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base text-[var(--color-text-secondary)]"
        >
          They chose Global Prime Tax. It&apos;s time you did too. From solo founders to multi-entity businesses — we&apos;ve got the experience to handle it.
        </motion.p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full h-[60px] flex items-center group">
        {/* Left Gradient Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        
        {/* Right Gradient Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-fit animate-marquee group-hover:[animation-play-state:paused]">
          {/* Double the logos to create seamless loop */}
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center w-[160px] md:w-[240px]"
            >
              <div className="text-xl md:text-2xl font-bold text-[var(--color-text-muted)] opacity-70 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:text-[var(--color-navy)] hover:scale-105 cursor-default">
                {logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
