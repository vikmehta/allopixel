"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const { tr } = useLanguage();
  const f = tr.faq;

  return (
    <section className="bg-chalk py-28 lg:py-36">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="mb-14">
          <span className="section-label block mb-5">{f.label}</span>
          <h2 className="font-display font-bold tracking-display leading-[0.92] text-ink"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            {f.heading[0]}<br />{f.heading[1]}
          </h2>
        </div>

        <div>
          {f.items.map((faq, i) => (
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
