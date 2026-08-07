"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/Button";

function AnimatedCounter({ value, suffix = "", duration = 2.5 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const hasStarted = useRef(false);

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) => {
    return Math.floor(current) + suffix;
  });

  useEffect(() => {
    if (isInView && !hasStarted.current) {
      spring.set(value);
      hasStarted.current = true;
    }
  }, [isInView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export function About() {
  return (
    <section id="about" className="py-12 md:py-[100px] bg-white relative overflow-hidden">
      {/* Background Subtle Gradient Animation */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-red)] mb-4">
              WHO WE ARE
            </span>
            <h2 className="font-bold text-[var(--color-navy)] mb-6 tracking-tight leading-[1.2]">
              We Believe Tax Work Should Work for You — Not Against You
            </h2>
            <div className="flex flex-col gap-4 text-[var(--color-text-secondary)] leading-[1.8] mb-8">
              <p>
                US Prime Tax was built on a straightforward idea: every business owner and individual deserves expert tax guidance without the confusion or the runaround. We started because we saw too many clients getting buried in paperwork, overpaying on taxes, and working with firms that treated them like a number.
              </p>
              <p>
                Today, we serve hundreds of clients worldwide — from first-time filers and self-employed professionals to multi-entity business owners and NRIs managing international financial obligations. Our job is to make your financial life simpler, smarter, and more profitable.
              </p>
            </div>
            <Button
              className="bg-[var(--color-navy)] hover:bg-[#0A2472] hover:shadow-[0_0_20px_rgba(7,26,82,0.3)]"
              onClick={() => document.getElementById("why-choose-us")?.scrollIntoView({ behavior: "smooth", block: "start" })}
            >
              Meet Our Approach
            </Button>
          </motion.div>

          {/* Right Column: Stats */}
          <div className="grid grid-cols-3 lg:flex lg:flex-col items-stretch lg:items-end gap-2 sm:gap-6 w-full">
            {[
              {
                number: 500,
                suffix: "+",
                label: "Clients Served",
                subtext: "Across multiple countries globally",
              },
              {
                number: 50,
                suffix: "M+",
                prefix: "$",
                label: "Savings Identified",
                subtext: "For our client base collectively",
              },
              {
                number: 99,
                suffix: ".2%",
                label: "Accuracy Rate",
                subtext: "Zero penalties on our watch",
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="w-full lg:w-[280px] bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-xl p-2 sm:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center lg:items-start lg:text-left justify-center"
              >
                <div className="text-lg sm:text-[48px] font-bold text-[var(--color-red)] leading-none mb-1 sm:mb-2 whitespace-nowrap">
                  {stat.prefix}
                  <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] sm:text-base font-semibold text-[var(--color-text-secondary)] mb-1 leading-tight">
                  {stat.label}
                </div>
                <div className="hidden sm:block text-xs text-[var(--color-text-muted)] italic">
                  {stat.subtext}
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
