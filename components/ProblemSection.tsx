"use client";

import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const vp = { once: true, amount: 0.05 } as const;

export default function ProblemSection() {
  return (
    <section className="bg-chalk py-28 lg:py-36">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={vp} transition={{ duration: 0.5 }}
              className="section-label block mb-6"
            >The problem</motion.span>
            <div>
              {[
                { text: "Most design is too", coral: false },
                { text: "expensive or too", coral: false },
                { text: "generic.", coral: false },
                { text: "We fix that.", coral: true },
              ].map(({ text, coral }, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h2
                    initial={{ y: "110%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={vp}
                    transition={{ duration: 0.75, delay: 0.08 + i * 0.09, ease }}
                    className={`font-display font-bold tracking-display leading-[0.9] block ${coral ? "text-coral" : "text-ink"}`}
                    style={{ fontSize: "clamp(2.2rem, 5vw, 5rem)" }}
                  >
                    {text}
                  </motion.h2>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={vp} transition={{ duration: 0.7, delay: 0.2, ease }}
            className="space-y-8"
          >
            <p className="font-body text-lg text-ink/70 leading-relaxed">
              Every small business deserves a brand that competes with the big players.
              We make that possible with honest pricing, no middlemen, and work
              we&apos;re genuinely proud of.
            </p>
            <p className="font-body text-base text-ink/55 leading-relaxed">
              No retainers. No inflated timelines. No design-by-committee.
              Just clear, fast, creative work that makes your business memorable.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-black/8">
              {[
                { num: "100+", label: "Projects delivered" },
                { num: "5★", label: "Average rating" },
                { num: "48hr", label: "First draft turnaround" },
                { num: "$0", label: "Discovery call cost" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div className="font-display font-bold text-3xl text-coral tracking-display">{num}</div>
                  <div className="font-mono text-[0.85rem] text-muted uppercase tracking-wider mt-1">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
