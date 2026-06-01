"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-chalk py-28 lg:py-36">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — big headline */}
          <div>
            <motion.span
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="label block mb-6"
            >The problem</motion.span>
            <div style={{ perspective: 800 }}>
              {["Most design is too", "expensive or too", "generic."].map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h2
                    initial={{ y: "110%", opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.75, delay: 0.1 + i * 0.1, ease }}
                    className="font-display font-extrabold text-ink leading-[0.95] tracking-[-0.03em] block"
                    style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)" }}
                  >
                    {line}
                  </motion.h2>
                </div>
              ))}
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "110%", opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.75, delay: 0.4, ease }}
                  className="font-display font-extrabold text-coral leading-[0.95] tracking-[-0.03em] block"
                  style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)" }}
                >
                  We fix that.
                </motion.h2>
              </div>
            </div>
          </div>

          {/* Right — copy + stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="space-y-8"
          >
            <p className="font-body text-lg text-muted leading-relaxed">
              Every small business deserves a brand that competes with the big players.
              We make that possible with honest pricing, no middlemen, and work
              we&apos;re genuinely proud of.
            </p>
            <p className="font-body text-base text-muted/70 leading-relaxed">
              No retainers. No inflated timelines. No design-by-committee.
              Just clear, fast, creative work that makes your business memorable.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-black/8">
              {[
                { num: "100+", label: "Projects delivered" },
                { num: "5★", label: "Average rating" },
                { num: "48hr", label: "First draft turnaround" },
                { num: "$0", label: "Discovery call cost" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div className="font-display font-bold text-3xl text-coral tracking-[-0.02em]">{num}</div>
                  <div className="font-mono text-[0.65rem] text-muted uppercase tracking-wider mt-1">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
