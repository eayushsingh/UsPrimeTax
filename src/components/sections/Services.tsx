"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import {
  User,
  Briefcase,
  Receipt,
  Lightbulb,
  IdCard,
  ArrowRight,
} from "lucide-react";
import { useRef, useState } from "react";

const SERVICES = [
  {
    title: "Individual Tax Filing",
    desc: "Federal and state returns prepared with precision. We identify every deduction available to you and file with zero errors.",
    icon: User,
    image: "/images/services/individual-tax-v2.jpg",
    href: "https://wa.me/918186918860?text=Hi%2C%20I%27m%20interested%20in%20Individual%20Tax%20Filing%20services.",
  },
  {
    title: "Business Tax Returns",
    desc: "From single-member LLCs to C-Corporations — accurate, compliant, and strategically filed business returns.",
    icon: Briefcase,
    image: "/images/services/business-tax-v2.jpg",
    href: "https://wa.me/918186918860?text=Hi%2C%20I%27m%20interested%20in%20Business%20Tax%20Return%20services.",
  },
  {
    title: "Bookkeeping Services",
    desc: "Monthly reconciliation, financial reports, and clean books so you always know exactly where your business stands.",
    icon: Receipt,
    image: "/images/services/bookkeeping.jpg",
    href: "https://wa.me/918186918860?text=Hi%2C%20I%27m%20interested%20in%20Bookkeeping%20Services.",
  },
  {
    title: "Tax Planning & Strategy",
    desc: "Year-round planning to reduce your tax burden legally and strategically. We look ahead so you're never caught off guard.",
    icon: Lightbulb,
    image: "/images/services/tax-planning.jpg",
    href: "https://wa.me/918186918860?text=Hi%2C%20I%27m%20interested%20in%20Tax%20Planning%20%26%20Strategy.",
  },
  {
    title: "ITIN Application & Renewal",
    desc: "We provide guidance on ITIN applications and renewals for non-resident individuals, foreign nationals, and international filers.",
    icon: IdCard,
    image: "/images/services/itin-application-v3.jpg",
    href: "https://wa.me/918186918860?text=Hi%2C%20I%27m%20interested%20in%20ITIN%20Application%20%26%20Renewal.",
  },
];

/* ——— 3D tilt card wrapper ——— */
function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6]);

  function handleMouseMove(e: React.MouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
      className="w-full flex group"
    >
      <div
        className="service-card"
        style={{
          boxShadow: isHovered
            ? "0 25px 50px -12px rgba(7,26,82,0.18), 0 0 0 1px rgba(214,40,40,0.08)"
            : "0 4px 16px rgba(0,0,0,0.06), 0 0 0 1px rgba(226,232,240,0.8)",
          transform: isHovered ? "translateY(-8px)" : "translateY(0)",
          transition: "box-shadow 0.4s ease, transform 0.4s ease",
        }}
      >
        {/* ——— Image area ——— */}
        <div className="service-card__image-wrap">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="service-card__image"
            style={{
              transform: isHovered ? "scale(1.08)" : "scale(1)",
              transition: "transform 0.7s cubic-bezier(0.22,1,0.36,1)",
            }}
          />

          {/* Dark gradient overlay */}
          <div className="service-card__overlay" />

          {/* Shimmer sweep on hover */}
          <div
            className="service-card__shimmer"
            style={{
              transform: isHovered
                ? "translateX(100%) skewX(-15deg)"
                : "translateX(-100%) skewX(-15deg)",
              transition: "transform 0.8s cubic-bezier(0.22,1,0.36,1)",
            }}
          />

          {/* Glassmorphism icon badge */}
          <div
            className="service-card__icon-badge"
            style={{
              transform: isHovered
                ? "translateZ(30px) scale(1.1)"
                : "translateZ(0) scale(1)",
              transition: "transform 0.4s ease",
            }}
          >
            <service.icon className="w-5 h-5 text-white" strokeWidth={2} />
          </div>
        </div>

        {/* ——— Content area ——— */}
        <div className="service-card__content">
          <h3 className="service-card__title">{service.title}</h3>

          {/* Animated accent line */}
          <motion.div
            className="service-card__accent-line"
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.12 + 0.4 }}
          />

          <p className="service-card__desc">{service.desc}</p>

          <a
            href={service.href}
            target="_blank"
            rel="noopener noreferrer"
            className="service-card__link"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
        </div>

        {/* Bottom accent border on hover */}
        <div
          className="service-card__bottom-border"
          style={{
            transform: isHovered ? "scaleX(1)" : "scaleX(0)",
            transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-12 md:py-[100px] bg-[var(--color-bg-alt)]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-wider text-[var(--color-red)] mb-3"
          >
            WHAT WE OFFER
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-[var(--color-navy)] mb-6 tracking-tight leading-[1.2]"
          >
            Every Service Your Business Will Ever Need
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="h-1 bg-[var(--color-red)] rounded-full mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[var(--color-text-secondary)] max-w-2xl"
          >
            Whether you&apos;re filing your first return or managing a multi-state
            operation, we have a solution built for your situation.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-5 md:gap-7 lg:gap-8 max-w-5xl mx-auto">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
