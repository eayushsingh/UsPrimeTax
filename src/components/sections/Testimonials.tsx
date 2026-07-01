"use client";

import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    text: "Switched to US Prime Tax after years of doing it myself and immediately noticed the difference. They caught deductions I had been missing for three years straight.",
    author: "David R.",
    role: "Freelance Software Engineer",
    rating: 5,
  },
  {
    id: 2,
    text: "As an NRI managing income from both India and the US, the tax situation was overwhelming. This team walked me through every step and handled the complexity without breaking a sweat.",
    author: "Priya S.",
    role: "International Consultant",
    rating: 5,
  },
  {
    id: 3,
    text: "We brought them in to clean up our books and handle our S-Corp return. Six months later they helped us save nearly $30,000 in taxes through better planning. Worth every penny.",
    author: "Marcus T.",
    role: "Small Business Owner, Texas",
    rating: 5,
  },
  {
    id: 4,
    text: "Professional, responsive, and genuinely invested in our outcome. I've worked with three other firms before — none came close to this level of care.",
    author: "Angela W.",
    role: "Real Estate Investor",
    rating: 5,
  },
  {
    id: 5,
    text: "Got our ITIN processed without any stress. They prepared all the documents and communicated with the IRS directly. Everything was done in three weeks.",
    author: "Li W.",
    role: "Foreign National Business Owner",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-[100px] bg-[var(--color-bg-alt)] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-red)] mb-3 block">
            CLIENT STORIES
          </span>
          <h2 className="font-bold text-[var(--color-navy)] tracking-tight leading-[1.2] mb-4">
            Real Results from Real Clients
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            We let our work speak for itself.
          </p>
        </div>

        {/* Testimonials Grid / Slider */}
        <div className="relative max-w-[1400px] mx-auto">
          <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 pb-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible">
            {TESTIMONIALS.map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="w-full min-w-full sm:min-w-[80vw] md:min-w-0 snap-center shrink-0 flex flex-col bg-white border border-[var(--color-border)] rounded-xl p-6 md:p-8 shadow-[var(--shadow-card)]"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[var(--color-red)] text-[var(--color-red)]" />
                  ))}
                </div>

                <p className="text-[var(--color-text-secondary)] italic leading-[1.8] mb-8 flex-grow">
                  &quot;{testimonial.text}&quot;
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-navy)] text-white flex items-center justify-center font-bold overflow-hidden">
                    <span>{testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-navy)] !text-sm">
                      {testimonial.author}
                    </h4>
                    <span className="text-xs text-[var(--color-text-muted)]">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile swipe hint */}
          <div className="flex items-center justify-center gap-2 mt-2 md:hidden text-[var(--color-text-muted)] text-sm">
            <ChevronLeft className="w-4 h-4" />
            Swipe to see more
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>

      </div>
    </section>
  );
}
