"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const testimonials = [
  {
    quote: "Working with Allôpixel was the best decision I made for my business. They took my scattered ideas and turned them into a brand I'm genuinely proud to show off everywhere.",
    name: "Sarah C.",
    role: "Owner, The Bloom Bakery",
    project: "Brand Identity",
  },
  {
    quote: "The website they built has already brought in three new clients. It looks premium, loads fast, and I can update it myself. Worth every single penny — and then some.",
    name: "Marco R.",
    role: "Founder, Reno Pro Plus",
    project: "Web Design",
  },
  {
    quote: "I needed a portfolio that felt like me — not another template. What I got exceeded every expectation. The process was clear, fast, and genuinely enjoyable.",
    name: "Jess P.",
    role: "Photographer, Jess Blackwell Studio",
    project: "Web Design",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="bg-chalk py-28 lg:py-36">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="mb-16">
          <span className="section-label block mb-5">Kind words</span>
          <h2 className="font-display font-bold tracking-display leading-[0.92] text-ink"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}>
            Our clients say it best.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {testimonials.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease }}
              className="border-t border-black/10 pt-8 pr-0 md:pr-10"
            >
              <blockquote className="font-body text-base lg:text-lg text-ink/70 leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <div className="font-display font-semibold text-xl tracking-display text-ink">{t.name}</div>
                <div className="font-mono text-[0.6rem] text-ink/40 uppercase tracking-wider mt-1">{t.role}</div>
                <div className="font-mono text-[0.6rem] text-coral uppercase tracking-wider mt-0.5">{t.project}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
