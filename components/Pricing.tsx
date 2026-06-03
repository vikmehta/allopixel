"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const vp = { once: true, amount: 0 } as const;
const featured = [false, false, true, false];

export default function Pricing() {
  const { tr } = useLanguage();
  const p = tr.pricing;

  return (
    <section className="bg-ink grain py-14 md:py-20 lg:py-36">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="mb-16">
          <span className="font-mono text-[0.85rem] uppercase tracking-widest text-chalk/40 block mb-5">{p.label}</span>
          <motion.h2
            initial={{ y: 20 }} whileInView={{ y: 0 }}
            viewport={vp} transition={{ duration: 0.65, ease }}
            className="font-display font-bold tracking-display leading-[0.92] text-chalk"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 4.5rem)" }}
          >
            {p.heading[0]}<br />{p.heading[1]}
          </motion.h2>
          <p className="font-body text-base text-chalk/50 mt-5 max-w-2xl leading-relaxed">{p.sub}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {p.tiers.map((tier, i) => (
            <motion.div key={tier.name}
              initial={{ y: 28 }} whileInView={{ y: 0 }}
              viewport={vp} transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className={`relative flex flex-col p-8 bg-chalk transition-all duration-300 ${
                featured[i]
                  ? "border border-chalk lg:-mt-4 lg:mb-4"
                  : "border border-chalk/20 hover:border-chalk/40"
              }`}
            >
              {featured[i] && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-coral text-ink font-mono text-[0.85rem] uppercase tracking-widest px-3 py-1">
                    {p.mostPopular}
                  </span>
                </div>
              )}
              <h3 className="font-display font-bold text-xl tracking-display text-ink">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mt-4 mb-1">
                <span className="font-display font-bold text-4xl md:text-5xl tracking-display text-ink leading-none">{tier.price}</span>
                {tier.period && (
                  <span className="font-body text-base text-ink/40">{tier.period}</span>
                )}
              </div>
              <p className="font-body text-sm text-ink/45 mb-6 leading-snug">{tier.tagline}</p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="text-coral mt-0.5 text-xs shrink-0" aria-hidden>✓</span>
                    <span className="font-body text-sm text-ink/60">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact"
                className={`btn w-full justify-center ${featured[i] ? "btn-ink" : "btn-outline"}`}>
                {p.getStarted}
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="font-body text-sm text-chalk/45 text-center mt-10">
          {p.customNote}{" "}
          <Link href="/contact" className="text-coral hover:underline">{p.customLink}</Link>
          {" "}{p.customSuffix}
        </p>
      </div>
    </section>
  );
}
