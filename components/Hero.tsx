"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const tags = ["Fast turnaround", "Transparent pricing", "No hidden fees"];

export default function Hero() {
  return (
    <section className="min-h-screen bg-chalk grain flex flex-col">
      <div className="flex-1 flex flex-col max-w-[1600px] mx-auto w-full px-8 md:px-12 lg:px-16 pt-28 pb-20">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="section-label">Boutique Creative Studio · Montréal</span>
        </motion.div>

        {/* Headline */}
        <div className="flex-1 flex items-center">
          <div className="w-full">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease }}
              className="font-display font-bold tracking-display leading-[0.9] text-ink"
              style={{ fontSize: "clamp(3.2rem, 12vw, 10rem)" }}
            >
              Great design.<br />
              No agency<br />
              <span className="text-coral">price tag.</span>
            </motion.h1>

            {/* Sub + CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease }}
              className="mt-12 flex flex-col sm:flex-row sm:items-end justify-between gap-10"
            >
              <p className="font-body text-lg text-ink/55 leading-relaxed max-w-md">
                Brand identity, web design, and creative direction for small businesses,
                artists, and individuals — starting from{" "}
                <span className="text-ink font-medium">$299.</span>
              </p>
              <div className="flex flex-wrap gap-3 sm:shrink-0">
                <Link href="/work" className="btn btn-ink">See our work</Link>
                <Link href="/contact" className="btn btn-outline">Free quote</Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom tags */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="mt-16 flex flex-wrap gap-3"
        >
          {tags.map((tag) => (
            <span key={tag}
              className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink/50 border border-black/12 px-4 py-2 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="flex justify-center pb-8"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-black/20 to-transparent"
        />
      </motion.div>
    </section>
  );
}
