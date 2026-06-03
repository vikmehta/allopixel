"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const vp = { once: true, amount: 0 } as const;
const nums = ["01", "02", "03", "04"];

export default function Process() {
  const { tr } = useLanguage();
  const p = tr.process;

  return (
    <section className="py-14 md:py-20 lg:py-36" style={{ background: "var(--color-mint)" }}>
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <span className="section-label block mb-5">{p.label}</span>
            <motion.h2
              initial={{ y: 20 }} whileInView={{ y: 0 }}
              viewport={vp} transition={{ duration: 0.65, ease }}
              className="font-display font-bold tracking-display leading-[0.92] text-ink"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 4.5rem)" }}
            >
              {p.heading[0]}<br />{p.heading[1]}
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {p.steps.map((step, i) => (
            <motion.div key={nums[i]}
              initial={{ y: 24 }} whileInView={{ y: 0 }}
              viewport={vp} transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="border-t-2 border-black/10 pt-8 pr-8"
            >
              <div className="font-mono text-[0.85rem] text-ink/30 uppercase tracking-widest mb-4">{nums[i]}</div>
              <h3 className="font-display font-semibold tracking-display text-ink text-xl mb-3">{step.title}</h3>
              <p className="font-body text-sm text-ink/55 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
