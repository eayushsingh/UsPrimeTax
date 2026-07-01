"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, ShieldCheck, TrendingUp, Users, Calculator } from "lucide-react";
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
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <section
      id="home"
      className="relative min-h-[580px] lg:min-h-[700px] flex items-center justify-center overflow-hidden pt-[112px] md:pt-[136px] lg:pt-[172px] pb-12 lg:pb-20"
      style={{ background: "linear-gradient(135deg, #F0F4FF 0%, #FFFFFF 60%, #FFF5F5 100%)" }}
    >
      {/* Background Animated Gradient & Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Animated Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-[#071A52]/[0.04] rounded-full blur-[80px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-[var(--color-red)]/[0.04] rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-5 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Hero Content */}
        <div className="w-full lg:w-[55%] xl:w-[60%] text-center lg:text-left flex flex-col items-center lg:items-start pt-4 lg:pt-0">
          <div className="inline-block px-3 py-1 bg-white border border-[var(--color-border)] rounded-full mb-6 shadow-sm">
            <span
              className="text-sm font-semibold tracking-wide uppercase text-[var(--color-red)]"
              suppressHydrationWarning
            >
              GLOBAL TAX &amp; BUSINESS SOLUTIONS
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-[var(--color-navy)] mb-6 tracking-tight text-[32px] md:text-[40px] lg:text-[56px] leading-[1.25] md:leading-tight"
          >
            Take Control of Your <br className="hidden lg:block" /> Taxes. Grow Your Business with <span className="text-[var(--color-red)]">Confidence.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[15px] md:text-lg text-[var(--color-text-secondary)] max-w-[600px] mb-8"
          >
            We handle the complexity of US tax compliance so you can focus on what you do best — running and growing your business. Serving individuals, NRIs, startups, and established companies worldwide.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-10 w-full"
          >
            {[
              { icon: Users, text: "500+ Clients Served" },
              { icon: TrendingUp, text: "15+ Years in Practice" },
              { icon: ShieldCheck, text: "99.2% Filing Accuracy" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex flex-col sm:flex-row items-center gap-2 bg-white border border-[var(--color-border)] rounded-lg px-3 py-2 shadow-sm text-center sm:text-left"
              >
                <stat.icon className="w-5 h-5 text-[var(--color-red)]" />
                <span className="text-xs sm:text-sm font-semibold text-[var(--color-text-primary)]">{stat.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4"
          >
            <Button size="lg" className="w-full sm:w-auto min-h-[52px]" onClick={() => window.open("https://wa.me/918186918860?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20consultation.", "_blank", "noopener,noreferrer")}>
              Book Your Free Call
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto min-h-[52px] bg-white text-[var(--color-navy)] border-[var(--color-navy)] hover:bg-[var(--color-bg-alt)]" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
              See What We Do
            </Button>
          </motion.div>

          {/* Sub CTA Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col gap-2 md:gap-3 mt-6 text-[14px] font-medium text-[#64748B] w-full items-center lg:items-start"
          >
            <a 
              href="tel:+918186918860" 
              className="flex items-center justify-center lg:justify-start w-full md:w-auto min-h-[44px] md:min-h-0 bg-[rgba(214,40,40,0.04)] md:bg-transparent border border-[#E2E8F0] md:border-transparent rounded-lg md:rounded-none px-4 md:px-0 py-2 md:py-0 hover:text-[var(--color-red)] md:hover:underline transition-all"
            >
              📞 Prefer to call? +91 81869 18860
            </a>
            <a 
              href="https://wa.me/918186918860" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center lg:justify-start w-full md:w-auto min-h-[44px] md:min-h-0 bg-[rgba(214,40,40,0.04)] md:bg-transparent border border-[#E2E8F0] md:border-transparent rounded-lg md:rounded-none px-4 md:px-0 py-2 md:py-0 hover:text-[var(--color-red)] md:hover:underline transition-all"
            >
              💬 Or chat on WhatsApp — we reply fast
            </a>
          </motion.div>
        </div>

        {/* Floating Cards (Desktop/Tablet) */}
        <div className="w-full lg:w-[45%] xl:w-[40%] relative h-[400px] lg:h-[500px] hidden lg:block perspective-1000">
          <motion.div style={{ y: y1 }} className="absolute inset-0">
            {FLOATING_CARDS.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 + card.delay }}
                className="absolute"
                style={{
                  top: `${15 + i * 25}%`,
                  left: `${10 + (i % 2) * 30}%`,
                  zIndex: 10 - i,
                }}
              >
                <motion.div
                  animate={{
                    y: [card.yOffset, card.yOffset - 15, card.yOffset],
                    rotateZ: [-2, 2, -2],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 1.5,
                  }}
                  className="bg-white rounded-xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.10)] w-[260px] lg:w-[280px] border border-[var(--color-border)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-[var(--color-bg-alt)] p-2 rounded-lg">
                      <card.icon className="w-6 h-6 text-[var(--color-red)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-navy)] mb-1 !text-base">
                        {card.title}
                      </h3>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed !text-xs">
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
