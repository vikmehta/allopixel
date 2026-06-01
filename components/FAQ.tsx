"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "How long does a project take?", a: "Most projects take 1–4 weeks. A logo takes about a week. A full brand + website is typically 3–4 weeks. We give you a clear timeline in your proposal before any work begins." },
  { q: "Do you work with businesses outside Montréal?", a: "Absolutely. We work with clients across Canada and internationally. Everything is handled remotely — video calls, shared feedback tools, and clear communication throughout." },
  { q: "What if I only need a logo?", a: "Completely fine. Our Spark package is designed exactly for that. We also offer standalone logo design for businesses that already have other brand elements in place." },
  { q: "Do you offer payment plans?", a: "Yes. For larger projects, we typically split 50% upfront to begin and 50% on delivery. We can discuss other arrangements if needed." },
  { q: "What do I need to have ready before we start?", a: "Just your ideas and your goals. We'll guide you through everything else — you don't need to arrive with a creative brief or references prepared." },
  { q: "Can I update my website myself after launch?", a: "Yes. Every website we build comes with a walkthrough so you can manage basic content updates yourself. For bigger changes, we're always available to help." },
  { q: "Do you offer ongoing support after the project ends?", a: "Our Launch package includes 30 days of post-launch support. Beyond that, we offer support arrangements on a per-hour or retainer basis." },
  { q: "What makes Allôpixel different?", a: "We keep things honest, fast, and affordable without cutting corners on quality. You deal directly with the people doing the work — no account managers, no outsourcing." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-chalk py-28 lg:py-36">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="mb-14">
          <span className="section-label block mb-5">FAQ</span>
          <h2 className="font-display font-bold tracking-display leading-[0.92] text-ink"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            Questions we get<br />all the time.
          </h2>
        </div>

        <div>
          {faqs.map((faq, i) => (
            <div key={i}>
              <div className="rule" />
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left"
                aria-expanded={open === i}
              >
                <span className="font-body font-medium text-base text-ink">{faq.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.22 }}
                  className="shrink-0 text-ink/30 text-xl leading-none"
                  aria-hidden
                >+</motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="font-body text-sm text-ink/55 leading-relaxed pb-6">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <div className="rule" />
        </div>
      </div>
    </section>
  );
}
