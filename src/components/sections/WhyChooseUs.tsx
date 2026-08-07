"use client";

import { motion } from "framer-motion";
import { Users, Shield, DollarSign, Receipt, Headphones, Award } from "lucide-react";

const FEATURES = [
  {
    title: "Seasoned Professionals",
    desc: "Our advisors bring decades of real-world experience across individual, business, and international tax scenarios.",
    icon: Users,
  },
  {
    title: "Secure Document Handling",
    desc: "All client files are encrypted end-to-end and processed under strict data security protocols.",
    icon: Shield,
  },
  {
    title: "Refund Maximization",
    desc: "We go beyond the basics — finding credits and deductions most filers miss to put more money back in your pocket.",
    icon: DollarSign,
  },
  {
    title: "Clear, Upfront Pricing",
    desc: "No hidden charges. No surprise invoices. You'll always know exactly what you're paying for before we begin.",
    icon: Receipt,
  },
  {
    title: "Support Beyond Tax Season",
    desc: "Questions don't wait for April. Our team is available year-round to address your concerns as they come up.",
    icon: Headphones,
  },
  {
    title: "Verified & Credentialed",
    desc: "Our team holds active credentials and stays current on international tax regulations, tax law updates, and jurisdictional rules.",
    icon: Award,
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-12 md:py-[100px] bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-red)] mb-3 block">
            OUR DIFFERENCE
          </span>
          <h2 className="font-bold text-[var(--color-navy)] mb-4 tracking-tight leading-[1.2]">
            Built for Businesses That Demand More
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            We don&apos;t just file returns. We build long-term financial clarity for our clients.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-full text-sm font-medium text-[var(--color-text-primary)] shadow-sm">
            <span className="text-[var(--color-red)] font-bold">✓</span> Reachable by phone & WhatsApp · Mon–Sat, 9AM–7PM EST
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div
                className="flex items-start gap-4 p-4 group transition-all duration-300"
              >
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <feature.icon className="w-8 h-8 text-[var(--color-red)]" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-[var(--color-navy)] mb-1 relative inline-block w-fit">
                    {feature.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-red)] transition-all duration-300 group-hover:w-full" />
                  </h3>
                  <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed mt-2">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
