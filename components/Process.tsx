"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const steps = [
  { num: "01", title: "Discovery Call", desc: "A free 30-minute conversation to understand your business, goals, and what makes you different. No obligation." },
  { num: "02", title: "Strategy & Proposal", desc: "A clear proposal with scope, timeline, and price — all in plain language before any work begins." },
  { num: "03", title: "Design & Iteration", desc: "We design, you give feedback, we refine. Multiple revision rounds built in. You're involved at every step." },
  { num: "04", title: "Launch & Beyond", desc: "Final delivery, walkthrough, and ongoing availability for questions long after the project is done." },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-28 lg:py-36" style={{ background: "var(--color-cream)" }}>
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="section-label block mb-5">
              How we work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease }}
              className="font-display font-bold tracking-display leading-[0.92] text-ink"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 4.5rem)" }}
            >
              Simple, transparent,<br />built around you.
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <motion.div key={step.num}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="border-t-2 border-black/10 pt-8 pr-8"
            >
              <div className="font-mono text-[0.6rem] text-ink/30 uppercase tracking-widest mb-4">{step.num}</div>
              <h3 className="font-display font-semibold tracking-display text-ink text-xl mb-3">{step.title}</h3>
              <p className="font-body text-sm text-ink/55 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
