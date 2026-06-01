"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const tiers = [
  {
    name: "Spark",
    price: "$299",
    tagline: "For new businesses & side projects",
    features: ["Logo design (2 concepts)", "Brand color palette", "Font pairing guide", "3 social media templates", "All source files"],
    featured: false,
  },
  {
    name: "Studio",
    price: "$799",
    tagline: "For small businesses ready to grow",
    features: ["Everything in Spark", "Full brand guidelines", "5-page responsive website", "Mobile optimization", "Contact form", "Basic SEO setup"],
    featured: true,
  },
  {
    name: "Launch",
    price: "$1,499",
    tagline: "For brands ready to stand out",
    features: ["Everything in Studio", "Social media kit (10 templates)", "Business card design", "Letterhead & stationery", "30-day post-launch support", "Priority turnaround"],
    featured: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="bg-chalk py-28 lg:py-36">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="mb-16">
          <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="section-label block mb-5">
            Transparent pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease }}
            className="font-display font-bold tracking-display leading-[0.92] text-ink"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 4.5rem)" }}
          >
            Honest pricing.<br />Always.
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="font-body text-ink/45 mt-4">
            Every project starts with a free 30-minute discovery call. No commitment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {tiers.map((tier, i) => (
            <motion.div key={tier.name}
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className={`relative flex flex-col p-8 transition-all duration-300 ${
                tier.featured
                  ? "border border-ink bg-chalk md:-mt-4 md:mb-4"
                  : "border border-black/20 hover:border-black/40"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-coral text-white font-mono text-[0.6rem] uppercase tracking-widest px-3 py-1">
                    Most popular
                  </span>
                </div>
              )}

              <h3 className="font-display font-bold text-2xl tracking-display text-ink">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mt-4 mb-1">
                <span className="font-display font-bold text-5xl md:text-6xl tracking-display text-ink leading-none">{tier.price}</span>
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
                className={`btn w-full justify-center ${tier.featured ? "btn-ink" : "btn-outline"}`}>
                Get started
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}
          className="font-body text-sm text-ink/35 text-center mt-10">
          Need something custom?{" "}
          <Link href="/contact" className="text-coral hover:underline">Let&apos;s talk</Link>
          {" "}— we build tailored packages for unique projects.
        </motion.p>
      </div>
    </section>
  );
}
