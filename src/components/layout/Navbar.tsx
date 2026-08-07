"use client";

import { useState, useEffect, useCallback } from "react";
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
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Track which section is visible for the active indicator */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "navbar--scrolled"
          : "navbar--top"
      )}
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-8 h-full flex items-center justify-between">
        {/* ── Logo ── */}
        <Link href="/" className="flex items-center z-50 relative flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Global Prime Tax Logo"
            width={320}
            height={100}
            className={cn(
              "w-auto object-contain block transition-all duration-500",
              scrolled ? "h-14 md:h-16" : "h-16 md:h-20 lg:h-24"
            )}
            priority
          />
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <button
                key={link.name}
                onClick={() => scrollTo(id)}
                className={cn(
                  "relative px-3 lg:px-4 py-2 text-[13px] font-medium tracking-wide rounded-full transition-all duration-300",
                  isActive
                    ? "text-[var(--color-red)]"
                    : "text-[var(--color-text-primary)]/80 hover:text-[var(--color-text-primary)]"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-[var(--color-red)]/[0.06] -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* ── Actions ── */}
        <div className="flex items-center gap-2.5 z-50">
          {/* Phone */}
          <a
            href="tel:+918186918860"
            title="Call Us"
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full text-[var(--color-text-secondary)] hover:text-[var(--color-navy)] hover:bg-[var(--color-bg-alt)] transition-all duration-300"
          >
            <Phone className="w-[18px] h-[18px]" strokeWidth={1.8} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918186918860?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full text-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300"
          >
            <WhatsAppIcon className="w-5 h-5" />
          </a>

          {/* Divider */}
          <div className="hidden md:block w-px h-5 bg-[var(--color-border)]" />

          {/* CTA */}
          <Button
            className="hidden md:inline-flex !h-9 !px-5 !text-[13px] !font-semibold !rounded-full !shadow-none hover:!shadow-md"
            onClick={() => {
              setMobileMenuOpen(false);
              scrollTo("contact");
            }}
          >
            Book a Call
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-[var(--color-bg-alt)] transition-colors text-[var(--color-navy)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-[64px] left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_16px_64px_rgba(0,0,0,0.12)] border border-[var(--color-border)] p-6 z-50 max-h-[calc(100vh-80px)] overflow-y-auto"
            >
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      scrollTo(link.href.replace("#", ""));
                    }}
                    className={cn(
                      "text-left text-[16px] font-medium py-3 px-4 rounded-xl transition-all",
                      activeSection === link.href.replace("#", "")
                        ? "text-[var(--color-red)] bg-[var(--color-red)]/[0.06]"
                        : "text-[var(--color-text-primary)] hover:bg-[var(--color-bg-alt)]"
                    )}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </nav>

              <div className="mt-5 pt-5 border-t border-[var(--color-border)] flex flex-col gap-3">
                <Button
                  size="lg"
                  className="w-full justify-center !rounded-xl !text-base"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    scrollTo("contact");
                  }}
                >
                  Book Your Free Call
                </Button>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:+918186918860"
                    className="flex items-center justify-center gap-2 h-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-alt)] text-[var(--color-navy)] font-medium text-sm hover:bg-[var(--color-border)] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Phone className="w-4 h-4" />
                    Call Us
                  </a>
                  <a
                    href="https://wa.me/918186918860?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 h-12 rounded-xl bg-[#25D366] text-white font-medium text-sm hover:bg-[#20b858] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
