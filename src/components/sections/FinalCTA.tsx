"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/FloatingWhatsApp";
import { Send, User, Mail, Phone, Briefcase } from "lucide-react";
import { useState } from "react";

export function FinalCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);

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

      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: CTA Content */}
          <div className="text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
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
              className="font-bold text-white tracking-tight leading-[1.1] mb-6 text-4xl md:text-5xl"
            >
              Stop Overpaying on Taxes.<br className="hidden md:block" /> Let&apos;s Fix That Together.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-blue-100/90 mb-10 max-w-lg leading-relaxed"
            >
              One conversation is all it takes. Request a free consultation with our team and walk away with a clear picture of what you can do better — at no cost and no commitment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full"
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-8 py-4 h-auto text-lg rounded-xl border-white/20 text-white hover:bg-white hover:text-[var(--color-navy)] group flex items-center justify-center gap-2 transition-colors"
                onClick={() => window.open("https://wa.me/918186918860?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20consultation", "_blank")}
              >
                <WhatsAppIcon className="w-5 h-5 text-[#25D366] group-hover:text-[#25D366] transition-colors" />
                Chat on WhatsApp
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col gap-3 text-sm text-blue-200/80"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <span className="text-[var(--color-red)] font-bold text-xs">✓</span>
                </div>
                <div>Call us: <a href="tel:+918186918860" className="hover:underline text-white font-medium hover:text-[var(--color-red)] transition-colors">+91 81869 18860</a></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <span className="text-[var(--color-red)] font-bold text-xs">✓</span>
                </div>
                <div>Email: <a href="mailto:usprimetax@gmail.com" className="hover:underline text-white font-medium hover:text-[var(--color-red)] transition-colors">usprimetax@gmail.com</a></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <span className="text-[var(--color-red)] font-bold text-xs">✓</span>
                </div>
                <div>Available Mon–Sat · 9AM to 7PM EST</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full relative"
          >
            {/* Form Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-red)] to-blue-600 rounded-[24px] blur opacity-20"></div>
            
            <div className="bg-[#0A1845]/90 backdrop-blur-xl border border-white/10 rounded-[20px] p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Request a Callback</h3>
                <p className="text-sm text-blue-100/70">Fill out the form below and our tax experts will get back to you shortly.</p>
              </div>

              <form 
                action="https://formsubmit.co/usprimetax@gmail.com" 
                method="POST"
                onSubmit={() => setIsSubmitting(true)}
                className="space-y-5"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New Website Inquiry - Global Prime Tax" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />

                <div className="space-y-4">
                  {/* Name Input */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-blue-200/50" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Full Name"
                      className="block w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-red)] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-blue-200/50" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email Address"
                      className="block w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-red)] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-blue-200/50" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Phone Number (with country code)"
                      className="block w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-red)] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Service Dropdown */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Briefcase className="h-5 w-5 text-blue-200/50" />
                    </div>
                    <select
                      name="service"
                      required
                      defaultValue=""
                      className="block w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[var(--color-red)] focus:border-transparent transition-all"
                      style={{ colorScheme: "dark" }}
                    >
                      <option value="" disabled className="bg-[#0A1845] text-blue-200/50">Select a Service...</option>
                      <option value="Individual Tax Filing" className="bg-[#0A1845] text-white">Individual Tax Filing</option>
                      <option value="Business Tax Return" className="bg-[#0A1845] text-white">Business Tax Return</option>
                      <option value="Bookkeeping" className="bg-[#0A1845] text-white">Bookkeeping Services</option>
                      <option value="Tax Planning" className="bg-[#0A1845] text-white">Tax Planning & Strategy</option>
                      <option value="ITIN Application" className="bg-[#0A1845] text-white">ITIN Application & Renewal</option>
                      <option value="Other" className="bg-[#0A1845] text-white">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full py-4 h-auto text-lg rounded-xl mt-4 group hover:shadow-[0_0_20px_rgba(214,40,40,0.4)]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">Processing...</span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Submit Request
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  )}
                </Button>
                
                <p className="text-center text-xs text-blue-200/40 mt-4">
                  Your information is secure. We never sell your data.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
