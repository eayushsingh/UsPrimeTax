"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { WhatsAppIcon } from "@/components/ui/FloatingWhatsApp";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-choose-us" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[64px] lg:h-[72px]",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_16px_rgba(0,0,0,0.08)]"
          : "bg-white border-b border-[var(--color-border)]"
      )}
    >
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center z-50 relative">
          <Image
            src="/logo.png"
            alt="US Prime Tax Logo"
            width={320}
            height={100}
            className="h-14 w-auto object-contain md:h-16 lg:h-20 block align-middle"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href.replace('#', ''))}
              className="relative text-sm font-medium transition-colors text-[var(--color-text-primary)] hover:text-[var(--color-red)] group py-4"
            >
              {link.name}
              <span className="absolute bottom-2 left-0 w-0 h-0.5 bg-[var(--color-red)] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 z-50">
          <Button
            className="animate-pulse-subtle hidden md:inline-flex min-h-[48px] min-w-[48px]"
            onClick={() => {
              setMobileMenuOpen(false);
              scrollTo("contact");
            }}
          >
            Book Free Call
          </Button>

          <div className="flex items-center gap-2">
            <a
              href="tel:+918186918860"
              title="Call Us"
              className="hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-[var(--color-bg-alt)] border border-[var(--color-border)] text-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white hover:border-[var(--color-navy)] hover:scale-105 transition-all shadow-sm"
            >
              <Phone className="w-[22px] h-[22px]" />
            </a>

            <a
              href="https://wa.me/918186918860?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp"
              className="hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-[#25D366] text-white hover:scale-105 transition-transform shadow-[0_4px_12px_rgba(37,211,102,0.3)]"
            >
              <WhatsAppIcon className="w-8 h-8" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center justify-center w-11 h-11 transition-colors text-[var(--color-navy)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 h-screen bg-white pt-[80px] px-6 pb-6 flex flex-col gap-6 z-40"
          >
            <nav className="flex flex-col items-center mt-8 w-full px-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    scrollTo(link.href.replace('#', ''));
                  }}
                  className="text-[24px] leading-[56px] font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-red)] transition-all block w-full text-center border-b border-[#E2E8F0] last:border-b-0"
                >
                  {link.name}
                </button>
              ))}
            </nav>
            <div className="mt-auto pb-12 w-full px-6 flex flex-col gap-3">
              <Button
                size="lg"
                className="w-full justify-center text-lg min-h-[52px]"
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollTo("contact");
                }}
              >
                Book Your Free Call
              </Button>
              <a
                href="tel:+918186918860"
                className="flex items-center justify-center gap-2 w-full min-h-[52px] rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-alt)] text-[var(--color-navy)] font-semibold text-lg hover:bg-[var(--color-border)] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="w-5 h-5" />
                +91 81869 18860
              </a>
              <a
                href="https://wa.me/918186918860?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full min-h-[52px] rounded-lg bg-[#25D366] text-white font-semibold text-lg hover:bg-[#20b858] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <WhatsAppIcon className="w-6 h-6" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
