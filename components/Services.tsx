"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const vp = { once: true, amount: 0 } as const;
const nums = ["01", "02", "03", "04", "05", "06"];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);
  const { tr } = useLanguage();
  const s = tr.services;

  return (
    <section className="bg-chalk py-28 lg:py-36">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <span className="section-label block mb-5">{s.label}</span>
            <motion.h2
              initial={{ y: 20 }} whileInView={{ y: 0 }}
              viewport={vp} transition={{ duration: 0.65, ease }}
              className="font-display font-bold tracking-display leading-[0.92] text-ink"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 4.5rem)" }}
            >
              {s.heading[0]}<br />{s.heading[1]}
            </motion.h2>
          </div>
          <motion.p
            initial={{ y: 16 }} whileInView={{ y: 0 }}
            viewport={vp} transition={{ duration: 0.6, delay: 0.1, ease }}
            className="font-body text-lg text-ink/55 leading-relaxed self-end max-w-md"
          >
            {s.sub}
          </motion.p>
        </div>

        <div>
          {s.items.map((item, i) => (
            <div key={nums[i]}>
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
                  {nums[i]}
                </span>
                <h3 className="font-display font-semibold tracking-display text-ink leading-tight"
                  style={{ fontSize: "clamp(1.3rem, 2.5vw, 2rem)" }}>
                  {item.title}
                </h3>
                <p className="hidden lg:block font-body text-sm text-ink/50 leading-relaxed col-start-2 lg:col-start-auto">
                  {item.desc}
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
        </div>
      </div>
    </section>
  );
}
