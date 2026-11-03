"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const vp = { once: true, amount: 0 } as const;

export default function HomeIntro() {
  const { tr } = useLanguage();
  const t = tr.intro;

  return (
    <section className="bg-cream py-14 md:py-20 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        <div>
          <span className="section-label block mb-5">{t.label}</span>
          <motion.h2
            initial={{ y: 20 }} whileInView={{ y: 0 }}
            viewport={vp} transition={{ duration: 0.65, ease }}
            className="font-display font-bold tracking-display leading-[1.02] text-ink"
            style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
          >
            {t.heading}
          </motion.h2>
        </div>
        <motion.p
          initial={{ y: 16 }} whileInView={{ y: 0 }}
          viewport={vp} transition={{ duration: 0.6, delay: 0.1, ease }}
          className="font-body text-lg text-ink/80 leading-relaxed lg:pt-9"
        >
          {t.text}
        </motion.p>
      </div>
    </section>
  );
}
