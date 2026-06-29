"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Facebook = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const Twitter = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const Linkedin = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const Instagram = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Footer() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <footer className="bg-[var(--color-navy)] text-white pt-16 pb-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
            <Link href="/" className="flex items-center w-fit bg-white px-2 py-1.5 rounded-lg hover:opacity-90 transition-opacity mx-auto lg:mx-0">
              <Image
                src="/logo.png"
                alt="US Prime Tax Logo"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-[#94A3B8] mt-2">
              Expert tax and business solutions for individuals, entrepreneurs, and growing companies across the United States.
            </p>
            <div className="flex items-center gap-4 mt-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-[#94A3B8] hover:text-[var(--color-red)] transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const id = link === "Why Us" ? "why-choose-us" : link.toLowerCase().replace(" ", "-");
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="text-sm text-[#94A3B8] hover:text-[var(--color-red)] transition-colors w-fit group relative text-left"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-red)] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Our Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider">Our Services</h4>
            <div className="flex flex-col gap-3">
              {[
                "Individual Tax Filing",
                "Business Tax Returns",
                "Bookkeeping Services",
                "Tax Planning & Strategy",
                "ITIN Application",
              ].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                  className="text-sm text-[#94A3B8] hover:text-[var(--color-red)] transition-colors w-fit group relative text-left"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-red)] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider">Contact Us</h4>
            <div className="flex flex-col gap-4 text-sm text-[#94A3B8]">
              <div>
                <a href="tel:+918186918860" className="flex items-start gap-2 hover:text-[var(--color-red)] transition-colors group">
                  <span className="mt-0.5 text-base">📞</span>
                  <div className="flex flex-col">
                    <span className="text-white group-hover:text-[var(--color-red)] transition-colors">+91 81869 18860</span>
                    <span className="text-xs">(Click to call)</span>
                  </div>
                </a>
              </div>
              
              <div>
                <a href="https://wa.me/918186918860" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-[var(--color-red)] transition-colors group">
                  <span className="mt-0.5 text-base">💬</span>
                  <div className="flex flex-col">
                    <span className="text-white group-hover:text-[var(--color-red)] transition-colors">WhatsApp</span>
                    <span className="text-xs">wa.me/918186918860<br/>(Tap to chat)</span>
                  </div>
                </a>
              </div>

              <div className="flex items-start gap-2">
                <span className="mt-0.5 text-base">📧</span>
                <a href="mailto:info@usprimetax.com" className="hover:text-[var(--color-red)] transition-colors text-white">
                  info@usprimetax.com
                </a>
              </div>

              <div className="flex items-start gap-2">
                <span className="mt-0.5 text-base">📍</span>
                <div className="flex flex-col">
                  <span className="text-white">Hyderabad, India</span>
                  <span className="text-xs">Serving Clients Across the USA</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="mt-0.5 text-base">🕐</span>
                <span className="text-white">Mon – Sat · 9AM – 7PM IST</span>
              </div>
            </div>
          </div>

          {/* Column 5: Newsletter */}
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <h4 className="text-xs font-semibold uppercase tracking-wider">Stay Tax-Smart</h4>
            <p className="text-xs text-[#94A3B8]">
              Get practical tax tips and business insights delivered monthly. No spam, ever.
            </p>
            <form className="mt-2 relative" onSubmit={(e) => e.preventDefault()}>
              <div className="flex w-full relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-white/10 text-white placeholder:text-gray-500 text-sm py-2.5 px-3 rounded-l focus:outline-none"
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
                <button
                  type="submit"
                  className="bg-[var(--color-red)] hover:bg-[var(--color-red-hover)] transition-colors px-3 rounded-r flex items-center justify-center"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("Newsletter Subscribe clicked");
                  }}
                >
                  <span className="text-sm font-semibold text-white mr-2">Subscribe</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
              <div
                className={cn(
                  "absolute -bottom-0.5 left-0 h-0.5 bg-[var(--color-red)] transition-all duration-300",
                  isFocused ? "w-full shadow-[0_0_8px_rgba(214,40,40,0.6)]" : "w-0"
                )}
              />
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#E8EAED]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#94A3B8] text-center md:text-left">
            © 2025 US Prime Tax. All rights reserved.
          </p>
          <p className="text-xs font-semibold text-[var(--color-red)] text-center md:text-right">
            Expertise · Integrity · Results
          </p>
        </div>
      </div>
    </footer>
  );
}
