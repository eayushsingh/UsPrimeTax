"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, TrendingUp, Users, Calculator, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const FLOATING_CARDS = [
  {
    title: "Tax Strategy",
    desc: "Reduce liability. Keep more of what you earn.",
    icon: TrendingUp,
    delay: 0,
    yOffset: -20,
  },
  {
    title: "Business Setup",
    desc: "LLC, S-Corp, C-Corp — structured for success.",
    icon: ShieldCheck,
    delay: 0.2,
    yOffset: 20,
  },
  {
    title: "Clean Books",
    desc: "Monthly financials, done right every time.",
    icon: Calculator,
    delay: 0.4,
    yOffset: 0,
  },
];

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <section
      id="home"
      className="hero-section"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle mesh gradient */}
        <div className="hero-mesh" />

        {/* Floating ambient orbs */}
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[15%] w-[500px] h-[500px] rounded-full bg-[#071A52]/[0.03] blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] rounded-full bg-[var(--color-red)]/[0.025] blur-[120px]"
        />
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-5 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-12">

        {/* ── Hero Content ── */}
        <div className="w-full lg:w-[55%] xl:w-[58%] text-center lg:text-left flex flex-col items-center lg:items-start">

          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-eyebrow"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-red)] animate-pulse" />
            <span className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[var(--color-text-secondary)]">
              Global Tax & Business Solutions
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="hero-headline"
          >
            Take Control of Your{" "}
            <br className="hidden lg:block" />
            Taxes. Grow Your Business{" "}
            <br className="hidden lg:block" />
            with <span className="hero-headline__accent">Confidence.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="hero-subheadline"
          >
            We handle the complexity of US tax compliance so you can focus
            on what you do best — running and growing your business.
          </motion.p>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-trust-bar"
          >
            {[
              { icon: Users, value: "500+", label: "Clients Served" },
              { icon: TrendingUp, value: "15+", label: "Years in Practice" },
              { icon: ShieldCheck, value: "99.2%", label: "Filing Accuracy" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="hero-stat"
              >
                <stat.icon className="hero-stat__icon" />
                <div className="hero-stat__content">
                  <span className="hero-stat__value">{stat.value}</span>
                  <span className="hero-stat__label">{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-8"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto !rounded-full !px-8 !h-13 !text-[15px] group"
              onClick={() =>
                window.open(
                  "https://wa.me/918186918860?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20consultation.",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Book Your Free Call
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto !rounded-full !px-8 !h-13 !text-[15px] !border-[var(--color-border)] hover:!border-gray-300"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              See What We Do
            </Button>
          </motion.div>

          {/* Contact hints */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-x-5 gap-y-2 mt-6 text-[13px] text-[var(--color-text-muted)] justify-center lg:justify-start"
          >
            <a
              href="tel:+918186918860"
              className="hover:text-[var(--color-text-secondary)] transition-colors"
            >
              📞 +91 81869 18860
            </a>
            <a
              href="mailto:usprimetax@gmail.com"
              className="hover:text-[var(--color-text-secondary)] transition-colors"
            >
              ✉️ usprimetax@gmail.com
            </a>
            <a
              href="https://wa.me/918186918860"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-text-secondary)] transition-colors"
            >
              💬 WhatsApp — we reply fast
            </a>
          </motion.div>
        </div>

        {/* ── Floating Cards (Desktop) ── */}
        <div className="w-full lg:w-[45%] xl:w-[42%] relative h-[400px] lg:h-[480px] hidden lg:block">
          <motion.div style={{ y: y1 }} className="absolute inset-0">
            {FLOATING_CARDS.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + card.delay }}
                className="absolute"
                style={{
                  top: `${12 + i * 26}%`,
                  left: `${8 + (i % 2) * 28}%`,
                  zIndex: 10 - i,
                }}
              >
                <motion.div
                  animate={{
                    y: [card.yOffset, card.yOffset - 12, card.yOffset],
                    rotateZ: [-1.5, 1.5, -1.5],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 1.5,
                  }}
                  className="hero-float-card"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="hero-float-card__icon">
                      <card.icon className="w-5 h-5 text-[var(--color-red)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-navy)] mb-0.5 !text-[15px] leading-tight">
                        {card.title}
                      </h3>
                      <p className="!text-[12px] text-[var(--color-text-secondary)] leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
