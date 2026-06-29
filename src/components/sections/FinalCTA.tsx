"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/FloatingWhatsApp";

export function FinalCTA() {
  return (
    <section id="contact" className="py-16 md:py-[120px] relative overflow-hidden bg-[var(--color-navy)] flex items-center justify-center">
      {/* Animated Background Gradient & Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            background: [
              "linear-gradient(to bottom right, #071A52, #041138)",
              "linear-gradient(to bottom right, #0A2472, #071A52)",
              "linear-gradient(to bottom right, #071A52, #041138)",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
        
        {/* Floating Orbs */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-[10%] w-[300px] h-[300px] bg-[var(--color-red)]/10 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-[10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-[800px] mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold uppercase tracking-wider text-[var(--color-red)] mb-4 block"
        >
          READY TO START?
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-bold text-white tracking-tight leading-[1.2] mb-6"
        >
          Stop Overpaying on Taxes. Let's Fix That Together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          One conversation is all it takes. Book a free 30-minute call with our team and walk away with a clear picture of what you can do better — at no cost and no commitment.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full sm:w-auto"
          >
            <Button size="lg" className="w-full sm:w-auto px-8 py-4 h-auto text-lg rounded-xl hover:shadow-[0_0_20px_rgba(214,40,40,0.4)]">
              Book My Free Call
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-8 py-4 h-auto text-lg rounded-xl border-white/20 text-white hover:bg-white hover:text-[var(--color-navy)] group flex items-center justify-center gap-2 transition-colors"
              onClick={() => window.open("https://wa.me/918186918860?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20consultation", "_blank")}
            >
              <WhatsAppIcon className="w-5 h-5 text-[#25D366] group-hover:text-[var(--color-navy)] transition-colors" />
              Call or WhatsApp Us
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-sm text-blue-200/80"
        >
          <div className="flex items-center gap-2">
            <span className="text-[var(--color-red)] font-bold">✓</span> Call us: <a href="tel:+918186918860" className="hover:underline hover:text-[var(--color-red)] transition-colors">+91 81869 18860</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[var(--color-red)] font-bold">✓</span> WhatsApp: Same number — we reply within minutes
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[var(--color-red)] font-bold">✓</span> Mon–Sat · 9AM to 7PM IST
          </div>
        </motion.div>
      </div>
    </section>
  );
}
