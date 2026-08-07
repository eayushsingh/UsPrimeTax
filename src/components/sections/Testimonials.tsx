"use client";

import { motion, useInView } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";

const TESTIMONIALS = [
  {
    id: 1,
    text: "Switched to Global Prime Tax after years of doing it myself and immediately noticed the difference. They caught deductions I had been missing for three years straight.",
    author: "David R.",
    role: "Freelance Software Engineer",
    location: "San Francisco, CA",
    photo: "/images/testimonials/david.jpg",
    rating: 5,
    date: "2 months ago",
    highlight: "$12,400 saved in deductions",
  },
  {
    id: 2,
    text: "As a client managing income across different countries, the tax situation was overwhelming. This team walked me through every step and handled the complexity without breaking a sweat.",
    author: "Priya S.",
    role: "International Consultant",
    location: "New York, NY",
    photo: "/images/testimonials/priya.jpg",
    rating: 5,
    date: "3 months ago",
    highlight: "Multi-country filing handled",
  },
  {
    id: 3,
    text: "We brought them in to clean up our books and handle our S-Corp return. Six months later they helped us save nearly $30,000 in taxes through better planning. Worth every penny.",
    author: "Marcus T.",
    role: "Small Business Owner",
    location: "Austin, TX",
    photo: "/images/testimonials/marcus.jpg",
    rating: 5,
    date: "1 month ago",
    highlight: "$30,000 saved in taxes",
  },
  {
    id: 4,
    text: "Professional, responsive, and genuinely invested in our outcome. I've worked with three other firms before — none came close to this level of care. They feel like an extension of our own team.",
    author: "Angela W.",
    role: "Real Estate Investor",
    location: "Miami, FL",
    photo: "/images/testimonials/angela.jpg",
    rating: 5,
    date: "3 weeks ago",
    highlight: "Portfolio of 12 properties managed",
  },
  {
    id: 5,
    text: "Got our international filing processed without any stress. They prepared all the documents and communicated with the tax authorities directly. Everything was done in three weeks.",
    author: "Li W.",
    role: "Foreign National Business Owner",
    location: "Chicago, IL",
    photo: "/images/testimonials/li.jpg",
    rating: 5,
    date: "6 weeks ago",
    highlight: "ITIN + filing in 3 weeks",
  },
];

/* Animated star rating with stagger */
function StarRating({ rating, delay = 0 }: { rating: number; delay?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + i * 0.06, duration: 0.3, type: "spring", stiffness: 400 }}
        >
          <Star
            className={`w-4 h-4 ${
              i < rating
                ? "fill-amber-400 text-amber-400"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        </motion.div>
      ))}
    </div>
  );
}

/* Individual testimonial card */
function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="testimonial-card group"
    >
      {/* Quote icon */}
      <div className="testimonial-card__quote-icon">
        <Quote className="w-5 h-5 text-[var(--color-red)]/40" />
      </div>

      {/* Stars + date row */}
      <div className="flex items-center justify-between mb-5">
        <StarRating rating={testimonial.rating} delay={0.3 + index * 0.1} />
        <span className="text-[11px] text-[var(--color-text-muted)] font-medium">
          {testimonial.date}
        </span>
      </div>

      {/* Review text */}
      <p className="testimonial-card__text">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Highlight badge */}
      <div className="testimonial-card__highlight">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
        <span>{testimonial.highlight}</span>
      </div>

      {/* Divider */}
      <div className="testimonial-card__divider" />

      {/* Author row */}
      <div className="flex items-center gap-3.5">
        <div className="testimonial-card__avatar">
          <Image
            src={testimonial.photo}
            alt={testimonial.author}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h4 className="font-semibold text-[var(--color-navy)] text-[14px] leading-tight truncate">
              {testimonial.author}
            </h4>
            {/* Verified badge */}
            <svg
              viewBox="0 0 22 22"
              className="w-4 h-4 flex-shrink-0"
              fill="none"
            >
              <circle cx="11" cy="11" r="11" fill="#1DA1F2" />
              <path
                d="M9.5 14.25L6.75 11.5L7.81 10.44L9.5 12.13L14.19 7.44L15.25 8.5L9.5 14.25Z"
                fill="white"
              />
            </svg>
          </div>
          <p className="text-[12px] text-[var(--color-text-muted)] leading-tight mt-0.5">
            {testimonial.role}
          </p>
          <p className="text-[11px] text-[var(--color-text-muted)]/60 leading-tight">
            {testimonial.location}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollButtons, { passive: true });
    updateScrollButtons();
    return () => el.removeEventListener("scroll", updateScrollButtons);
  }, [updateScrollButtons]);

  const scrollBy = (dir: number) => {
    scrollContainerRef.current?.scrollBy({
      left: dir * 380,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="testimonials-section"
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-14 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-200/60 bg-amber-50/60 mb-5"
          >
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-amber-700">
              Trusted by 500+ Clients
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-[var(--color-navy)] tracking-tight leading-[1.15] mb-4 text-[28px] md:text-[36px] lg:text-[42px]"
          >
            Real Results from Real Clients
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[var(--color-text-secondary)] text-[15px] md:text-[16px] max-w-[520px] mx-auto"
          >
            Don&apos;t take our word for it. Here&apos;s what our clients have to say
            about working with us.
          </motion.p>

          {/* Aggregate rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="inline-flex items-center gap-3 mt-5 px-5 py-2.5 rounded-full bg-white border border-[var(--color-border)] shadow-sm"
          >
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-[13px] font-bold text-[var(--color-navy)]">
              5.0
            </span>
            <span className="text-[12px] text-[var(--color-text-muted)]">
              average rating
            </span>
          </motion.div>
        </div>

        {/* Testimonial cards */}
        <div className="relative">
          {/* Scroll buttons (desktop) */}
          <button
            onClick={() => scrollBy(-1)}
            className={`testimonial-scroll-btn testimonial-scroll-btn--left ${
              canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            className={`testimonial-scroll-btn testimonial-scroll-btn--right ${
              canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:gap-6"
          >
            {TESTIMONIALS.map((testimonial, i) => (
              <div
                key={testimonial.id}
                className="w-[85vw] min-w-[85vw] sm:w-[70vw] sm:min-w-[70vw] md:w-auto md:min-w-0 snap-center"
              >
                <TestimonialCard testimonial={testimonial} index={i} />
              </div>
            ))}
          </div>

          {/* Mobile scroll hint dots */}
          <div className="flex items-center justify-center gap-1.5 mt-5 md:hidden">
            {TESTIMONIALS.map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[var(--color-navy)]/20"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
