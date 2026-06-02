"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const vp = { once: true, amount: 0 } as const;

type Variant = "default" | "work" | "about" | "services";

interface CTAStripProps {
  variant?: Variant;
  btnHref?: string;
  dark?: boolean;
}

export default function CTAStrip({ variant = "default", btnHref = "/contact", dark = false }: CTAStripProps) {
  const { tr } = useLanguage();
  const c = tr.cta[variant];

  if (dark) {
    return (
      <section className="bg-ink grain py-24 lg:py-28">
        <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ y: 20 }} whileInView={{ y: 0 }}
            viewport={vp} transition={{ duration: 0.65 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-8"
          >
            <div>
              <h2 className="font-display font-bold tracking-display leading-[0.92] text-chalk"
                style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}>{c.heading}</h2>
              <p className="font-body text-chalk/40 mt-3">{c.sub}</p>
            </div>
            <Link href={btnHref} className="btn btn-primary shrink-0">{c.btn}</Link>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-coral grain py-24 lg:py-28 overflow-hidden relative">
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 pointer-events-none" aria-hidden />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5 pointer-events-none" aria-hidden />
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <motion.div
          initial={{ y: 20 }} whileInView={{ y: 0 }}
          viewport={vp} transition={{ duration: 0.65 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-8"
        >
          <div>
            <h2 className="font-display font-bold tracking-display leading-[0.92] text-ink"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}>{c.heading}</h2>
            <p className="font-body text-ink/60 mt-3">{c.sub}</p>
          </div>
          <Link href={btnHref} className="btn btn-ink shrink-0">{c.btn}</Link>
        </motion.div>
      </div>
    </section>
  );
}
