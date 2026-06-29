"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Calendar, Folder, Search, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    title: "Schedule a Call",
    desc: "Start with a free 30-minute discovery call. We learn about your situation, answer your questions, and explain how we can help.",
    icon: Calendar,
  },
  {
    title: "Send Your Documents",
    desc: "We'll send you a simple checklist of what we need. Upload securely through our portal — no paperwork, no back-and-forth.",
    icon: Folder,
  },
  {
    title: "We Handle the Work",
    desc: "Our team reviews, analyzes, and prepares everything. We identify opportunities to save and ensure full compliance.",
    icon: Search,
  },
  {
    title: "Review, Approve & File",
    desc: "You review your final return, ask any questions, and we file on your behalf. Clean, complete, and on time.",
    icon: CheckCircle,
  },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-12 md:py-[100px] bg-[var(--color-bg-alt)] overflow-hidden" ref={containerRef}>
      <div className="max-w-[1000px] mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-red)] mb-3 block">
            HOW IT WORKS
          </span>
          <h2 className="font-bold text-[var(--color-navy)] tracking-tight leading-[1.2] mb-4">
            From First Call to Final Filing — We Make It Simple
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            A clear, four-step process designed to eliminate confusion and keep you informed every step of the way.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Vertical Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[4px] bg-[var(--color-border)] md:-translate-x-1/2" />
          
          {/* Animated Line Fill */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[24px] md:left-1/2 top-0 w-[4px] bg-[var(--color-navy)] md:-translate-x-1/2 origin-top"
          />

          <div className="flex flex-col gap-12 lg:gap-24 relative z-10">
            {STEPS.map((step, i) => {
              const isEven = i % 2 === 0;

              return (
                <div
                  key={step.title}
                  className={cn(
                    "flex flex-col md:flex-row items-start md:items-center w-full",
                    isEven ? "md:flex-row-reverse" : ""
                  )}
                >
                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Step Number Circle */}
                  <div className="absolute left-[24px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center -ml-[18px] md:-ml-0 mt-2 md:mt-0">
                    <motion.div
                      initial={{ scale: 0, backgroundColor: "var(--color-white)" }}
                      whileInView={{ scale: 1, backgroundColor: "var(--color-navy)" }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5 }}
                      className="w-9 h-9 md:w-12 md:h-12 rounded-full shadow-md flex items-center justify-center text-white font-bold text-base md:text-lg relative z-20"
                    >
                      {i + 1}
                    </motion.div>
                  </div>

                  {/* Card Content */}
                  <div
                    className={cn(
                      "w-full pl-14 md:pl-0 md:w-1/2 flex",
                      isEven ? "md:pr-16 lg:pr-24 justify-end" : "md:pl-16 lg:pl-24 justify-start"
                    )}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="w-full max-w-full md:max-w-[380px]"
                    >
                      <Card hoverEffect className="p-5 md:p-8 relative overflow-hidden bg-white shadow-[var(--shadow-card)]">
                        <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                          <step.icon className="w-24 h-24" />
                        </div>
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="font-semibold text-[var(--color-navy)] pr-4 !text-base md:!text-xl">
                            {step.title}
                          </h3>
                          <step.icon className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-red)] flex-shrink-0" />
                        </div>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed relative z-10 !text-sm">
                          {step.desc}
                        </p>
                      </Card>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
