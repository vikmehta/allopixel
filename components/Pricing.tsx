"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const vp = { once: true, amount: 0 } as const;
const prices = ["$299", "$799", "$1,499"];
const featured = [false, true, false];

export default function Pricing() {
  const { tr } = useLanguage();
  const p = tr.pricing;

  return (
    <section className="bg-coral grain py-14 md:py-20 lg:py-36">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="mb-16">
          <span className="font-mono text-[0.85rem] uppercase tracking-widest text-ink/60 block mb-5">{p.label}</span>
          <motion.h2
            initial={{ y: 20 }} whileInView={{ y: 0 }}
            viewport={vp} transition={{ duration: 0.65, ease }}
            className="font-display font-bold tracking-display leading-[0.92] text-ink"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 4.5rem)" }}
          >
            {p.heading[0]}<br />{p.heading[1]}
          </motion.h2>
          <p className="font-body text-ink/60 mt-4">{p.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {p.tiers.map((tier, i) => (
            <motion.div key={tier.name}
              initial={{ y: 28 }} whileInView={{ y: 0 }}
              viewport={vp} transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className={`relative flex flex-col p-8 bg-chalk transition-all duration-300 ${
                featured[i]
                  ? "border border-ink md:-mt-4 md:mb-4"
                  : "border border-ink/15 hover:border-ink/30"
              }`}
            >
              {featured[i] && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-ink text-chalk font-mono text-[0.85rem] uppercase tracking-widest px-3 py-1">
                    {p.mostPopular}
                  </span>
                </div>
              )}
              <h3 className="font-display font-bold text-2xl tracking-display text-ink">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mt-4 mb-1">
                <span className="font-display font-bold text-5xl md:text-6xl tracking-display text-ink leading-none">{prices[i]}</span>
                <span className="font-body text-xl text-ink/30">+</span>
              </div>
              <p className="font-body text-sm text-ink/45 mb-6">{tier.tagline}</p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="text-coral mt-0.5 text-xs" aria-hidden>✓</span>
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

        <p className="font-body text-sm text-ink/60 text-center mt-10">
          {p.customNote}{" "}
          <Link href="/contact" className="text-ink font-medium hover:underline">{p.customLink}</Link>
          {" "}{p.customSuffix}
        </p>
      </div>
    </section>
  );
}
