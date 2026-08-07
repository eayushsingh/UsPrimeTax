"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "Is the first consultation really free?",
    answer: "Yes, completely. Our initial discovery call has no cost and no obligation. It's simply a chance for us to understand your situation and for you to evaluate if we're the right fit.",
  },
  {
    question: "Can you help with international and cross-border taxes?",
    answer: "Absolutely. We specialize in assisting clients worldwide with cross-border tax obligations — including international tax compliance, foreign asset reporting, and treaty-based filings.",
  },
  {
    question: "What documents will I need to provide?",
    answer: "It depends on your situation. After your first call, we send a tailored checklist. In general, expect to share income statements, prior year returns, business records, and relevant receipts.",
  },
  {
    question: "How long does a typical return take to complete?",
    answer: "Most individual returns are completed within 5–10 business days. Business returns and complex situations may take 2–3 weeks. We'll give you an honest timeline before we begin.",
  },
  {
    question: "Do you support multiple tax jurisdictions globally?",
    answer: "Yes. We handle filings across multiple major international jurisdictions and states, managing tax obligations for international clients and businesses worldwide.",
  },
  {
    question: "What happens if I haven't filed taxes for several years?",
    answer: "We handle back-year filings and non-filer situations regularly. It's more common than you'd think, and the sooner we address it, the better your options.",
  },
  {
    question: "How are my documents kept secure?",
    answer: "All files are transmitted and stored using encrypted, secure systems. We follow strict data handling protocols and your information is never shared with third parties.",
  },
  {
    question: "Can you represent me if I receive a tax authority notice?",
    answer: "Yes. Our credentialed professionals can respond to tax authority correspondence and represent clients in examinations and audits. Contact us as soon as you receive any communication.",
  },
  {
    question: "Do you offer ongoing bookkeeping, not just tax filing?",
    answer: "We do. Our bookkeeping service provides monthly reconciliation, categorized expenses, and clean financial reports so your records are always accurate and audit-ready.",
  },
  {
    question: "What business structures do you work with?",
    answer: "We work with sole proprietors, single-member LLCs, multi-member LLCs, S-Corporations, C-Corporations, and partnerships of all sizes.",
  },
  {
    question: "Are there payment plans available?",
    answer: "Yes. We offer flexible payment arrangements. Ask us about available options during your initial consultation.",
  },
  {
    question: "How do I get started?",
    answer: "Simply click 'Book Your Free Call' anywhere on this page. Choose a time that works for you and we'll take it from there.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 md:py-[100px] bg-white">
      <div className="max-w-[800px] mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-red)] mb-3 block">
            COMMON QUESTIONS
          </span>
          <h2 className="font-bold text-[var(--color-navy)] tracking-tight leading-[1.2]">
            Everything You Need to Know Before Getting Started
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div
                  className={cn(
                    "border rounded-lg overflow-hidden transition-colors duration-300",
                    isOpen
                      ? "border-[var(--color-border)] bg-[var(--color-bg-alt)]"
                      : "border-[var(--color-border)] bg-white hover:border-[var(--color-border)] hover:bg-[var(--color-bg-alt)]"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex items-center justify-between w-full p-4 md:p-5 text-left focus:outline-none min-h-[52px]"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[15px] md:text-lg font-semibold text-[var(--color-navy)]">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 ml-4"
                    >
                      <ChevronDown className="w-6 h-6 text-[var(--color-red)]" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: "auto" },
                          collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-4 md:px-5 pb-4 md:pb-5 pt-0 text-[14px] md:text-sm text-[var(--color-text-secondary)] leading-[1.8]">
                          {/* Animated Divider */}
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="h-px bg-gradient-to-r from-[var(--color-red)]/30 to-transparent mb-4"
                          />
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
