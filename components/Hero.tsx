"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  const { tr } = useLanguage();
  const h = tr.hero;

  return (
    <section className="min-h-screen bg-chalk grain flex flex-col">
      <div className="flex-1 flex flex-col max-w-[1600px] mx-auto w-full px-8 md:px-12 lg:px-16 pt-28 pb-20">

        <motion.div
          initial={{ y: 8 }} animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="section-label">{h.label}</span>
        </motion.div>

        <div className="flex-1 flex items-center">
          <div className="w-full">
            <motion.h1
              initial={{ y: 24 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease }}
              className="font-display font-bold tracking-display leading-[0.9] text-ink"
              style={{ fontSize: "clamp(3.2rem, 12vw, 10rem)" }}
            >
              {h.headline[0]}<br />
              {h.headline[1]}<br />
              <span className="text-coral">{h.headline[2]}</span>
            </motion.h1>

            <motion.div
              initial={{ y: 20 }} animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease }}
              className="mt-12 flex flex-col sm:flex-row sm:items-end justify-between gap-10"
            >
              <p className="font-body text-lg text-ink/55 leading-relaxed max-w-md">{h.sub}</p>
              <div className="flex flex-wrap gap-3 sm:shrink-0">
                <Link href="/work" className="btn btn-ink">{h.cta1}</Link>
                <Link href="/contact" className="btn btn-outline">{h.cta2}</Link>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-3">
          {h.tags.map((tag) => (
            <span key={tag}
              className="font-mono text-[0.85rem] uppercase tracking-[0.14em] text-ink/50 border border-black/12 px-4 py-2 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-center pb-8" aria-hidden>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-black/20 to-transparent"
        />
      </div>
    </section>
  );
}
