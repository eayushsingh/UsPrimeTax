"use client";

import { motion } from "framer-motion";
import { User, Briefcase, Receipt, Lightbulb, IdCard, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";

const SERVICES = [
  {
    title: "Individual Tax Filing",
    desc: "Federal and state returns prepared with precision. We identify every deduction available to you and file with zero errors.",
    icon: User,
    href: "https://wa.me/918186918860?text=Hi%2C%20I%27m%20interested%20in%20Individual%20Tax%20Filing%20services.",
  },
  {
    title: "Business Tax Returns",
    desc: "From single-member LLCs to C-Corporations — accurate, compliant, and strategically filed business returns.",
    icon: Briefcase,
    href: "https://wa.me/918186918860?text=Hi%2C%20I%27m%20interested%20in%20Business%20Tax%20Return%20services.",
  },
  {
    title: "Bookkeeping Services",
    desc: "Monthly reconciliation, financial reports, and clean books so you always know exactly where your business stands.",
    icon: Receipt,
    href: "https://wa.me/918186918860?text=Hi%2C%20I%27m%20interested%20in%20Bookkeeping%20Services.",
  },
  {
    title: "Tax Planning & Strategy",
    desc: "Year-round planning to reduce your tax burden legally and strategically. We look ahead so you're never caught off guard.",
    icon: Lightbulb,
    href: "https://wa.me/918186918860?text=Hi%2C%20I%27m%20interested%20in%20Tax%20Planning%20%26%20Strategy.",
  },
  {
    title: "ITIN Application & Renewal",
    desc: "We handle ITIN applications and renewals for non-resident individuals, foreign nationals, and international filers.",
    icon: IdCard,
    href: "https://wa.me/918186918860?text=Hi%2C%20I%27m%20interested%20in%20ITIN%20Application%20%26%20Renewal.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-12 md:py-[100px] bg-[var(--color-bg-alt)]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-red)] mb-3">
            WHAT WE OFFER
          </span>
          <h2 className="font-bold text-[var(--color-navy)] mb-6 tracking-tight leading-[1.2]">
            Every Service Your Business Will Ever Need
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-1 bg-[var(--color-red)] rounded-full mb-6"
          />
          <p className="text-[var(--color-text-secondary)] max-w-2xl">
            Whether you're filing your first return or managing a multi-state operation, we have a solution built for your situation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="w-full flex"
            >
              <Card
                hoverEffect
                className="w-full h-full p-5 md:p-8 flex flex-col items-center text-center group cursor-pointer border-t-[3px] border-t-transparent hover:border-t-[var(--color-red)] rounded-xl"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[var(--color-bg-alt)] flex items-center justify-center mb-4 md:mb-6 transition-transform duration-300 group-hover:scale-110">
                  <service.icon className="w-7 h-7 md:w-8 md:h-8 text-[var(--color-red)]" />
                </div>
                <h3 className="font-semibold text-[var(--color-navy)] mb-2 md:mb-4 !text-base md:!text-xl">
                  {service.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed flex-grow mb-4 md:mb-6 !text-sm">
                  {service.desc}
                </p>
                <a
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center gap-1 text-sm font-semibold text-[var(--color-red)] group-hover:text-[var(--color-red-hover)] transition-colors"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
