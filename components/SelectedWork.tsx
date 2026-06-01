"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const projects = [
  {
    id: 1,
    name: "Island Juice Co.",
    year: "2024",
    category: "Branding",
    desc: "A vibrant tropical brand identity that transformed a local juice bar into a destination — bold, joyful, unmistakably theirs.",
    gradient: "linear-gradient(135deg, #1C3320 0%, #2D5535 40%, #3D7A4A 70%, #5A9E6A 100%)",
  },
  {
    id: 2,
    name: "Blue Rabbit Therapy",
    year: "2024",
    category: "Web Design",
    desc: "A calm, trust-first website for a therapy practice that needed to feel safe, warm, and professional from the first click.",
    gradient: "linear-gradient(135deg, #0F1E30 0%, #1A2F4A 40%, #243D60 70%, #2E5080 100%)",
  },
  {
    id: 3,
    name: "Siwalic Apparels",
    year: "2023",
    category: "Branding",
    desc: "A bold, confident rebrand for a fashion label — sharp lines, editorial type, and a visual language built for urban markets.",
    gradient: "linear-gradient(135deg, #1E0E0A 0%, #321510 40%, #4A1E14 70%, #632618 100%)",
  },
];

export default function SelectedWork() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <section className="bg-chalk py-28 lg:py-36">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-8 border-b border-black/8">
          <div>
            <span className="section-label block mb-4">Selected work</span>
            <h2 className="font-display font-bold tracking-display leading-[0.92] text-ink"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)" }}>
              Work that speaks<br />for itself.
            </h2>
          </div>
          <Link href="/work"
            className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink/40 hover:text-coral transition-colors flex items-center gap-2 shrink-0 mb-1"
          >
            View all
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Projects — alternating layout like Ref2 */}
        <div ref={ref} className="space-y-0">
          {projects.map((p, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div key={p.id}
                initial={{ opacity: 0, y: 48 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.75, delay: i * 0.15, ease }}
              >
                <Link href="/work"
                  className="group grid grid-cols-1 md:grid-cols-12 gap-0 border-b border-black/8 py-12 items-center hover:bg-black/[0.015] transition-colors duration-300 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-20 lg:px-20"
                >
                  {/* Image — alternates sides */}
                  <div className={`md:col-span-7 ${!isEven ? "md:order-2" : ""}`}>
                    <div className="relative overflow-hidden aspect-[16/10] rounded-sm">
                      {/* Gradient placeholder */}
                      <div
                        className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700"
                        style={{ background: p.gradient }}
                      />
                      {/* Subtle overlay on hover */}
                      <div className="absolute inset-0 bg-coral/0 group-hover:bg-coral/5 transition-all duration-500 z-10" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className={`md:col-span-5 ${!isEven ? "md:order-1 md:pr-16" : "md:pl-16"} mt-6 md:mt-0`}>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="font-mono text-[0.6rem] text-ink/35 uppercase tracking-widest">{p.year}</span>
                      <span className="w-px h-3 bg-black/15" aria-hidden />
                      <span className="font-mono text-[0.6rem] text-coral uppercase tracking-widest">{p.category}</span>
                    </div>
                    <h3 className="font-display font-bold tracking-display leading-[0.92] text-ink mb-4"
                      style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}>
                      {p.name}
                    </h3>
                    <p className="font-body text-base text-ink/55 leading-relaxed mb-8">
                      {p.desc}
                    </p>
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink/35 group-hover:text-coral transition-colors duration-200 flex items-center gap-2">
                      View project
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                        <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
