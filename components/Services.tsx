"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const vp = { once: true, amount: 0.05 } as const;

const services = [
  { num: "01", title: "Brand Identity", desc: "Logo, color systems, typography, and brand guidelines that make you instantly recognizable across every touchpoint." },
  { num: "02", title: "Web Design & Development", desc: "Beautiful, fast websites built from scratch — not templates. Responsive, accessible, and built to convert." },
  { num: "03", title: "Logo Design", desc: "A focused logo project — 2 concepts, multiple rounds of refinement, delivered in every format you'll ever need." },
  { num: "04", title: "Social Media Design", desc: "Consistent content templates that make maintaining a polished, on-brand presence genuinely effortless." },
  { num: "05", title: "Print & Collateral", desc: "Business cards, brochures, menus, and signage that carry your brand into the physical world with confidence." },
  { num: "06", title: "Creative Direction", desc: "Ongoing strategic creative oversight for brands that need a coherent visual story across every channel." },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-chalk py-28 lg:py-36">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={vp} className="section-label block mb-5">
              What we do
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={vp} transition={{ duration: 0.65, ease }}
              className="font-display font-bold tracking-display leading-[0.92] text-ink"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 4.5rem)" }}
            >
              Everything your<br />brand needs.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={vp} transition={{ duration: 0.6, delay: 0.1, ease }}
            className="font-body text-lg text-ink/55 leading-relaxed self-end max-w-md"
          >
            Under one roof, without the agency overhead. Every service is
            available standalone or as part of a package.
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={vp} transition={{ delay: 0.1 }}>
          {services.map((s, i) => (
            <div key={s.num}>
              <div className="rule" />
              <div
                className="grid grid-cols-[3rem_1fr] lg:grid-cols-[3rem_1fr_1fr_1.5rem] gap-x-8 gap-y-2 items-center py-7 cursor-default transition-all duration-200 group"
                style={{
                  borderLeft: `2px solid ${hovered === i ? "var(--color-coral)" : "transparent"}`,
                  paddingLeft: hovered === i ? "1.25rem" : "0",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className={`font-mono text-xs transition-colors duration-200 ${hovered === i ? "text-coral" : "text-ink/25"}`}>
                  {s.num}
                </span>
                <h3 className="font-display font-semibold tracking-display text-ink leading-tight"
                  style={{ fontSize: "clamp(1.3rem, 2.5vw, 2rem)" }}>
                  {s.title}
                </h3>
                <p className="hidden lg:block font-body text-sm text-ink/50 leading-relaxed col-start-2 lg:col-start-auto">
                  {s.desc}
                </p>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                  className={`hidden lg:block transition-all duration-200 ${hovered === i ? "text-coral translate-x-1" : "text-ink/15"}`}
                  aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
          <div className="rule" />
        </motion.div>
      </div>
    </section>
  );
}
