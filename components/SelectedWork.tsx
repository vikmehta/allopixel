"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { featuredProjects as projects, hasCaseStudy, localize } from "@/lib/projects";
import CaseStudyButton from "@/components/CaseStudyButton";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const vp = { once: true, amount: 0.05 } as const;

export default function SelectedWork() {
  const { tr, lang } = useLanguage();
  const sw = tr.selectedWork;

  return (
    <section className="bg-chalk py-14 md:py-20 lg:py-36">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-8 border-b border-black/8">
          <div>
            <span className="section-label block mb-4">{sw.label}</span>
            <h2 className="font-display font-bold tracking-display leading-[0.92] text-ink"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)" }}>
              {sw.heading[0]}<br />{sw.heading[1]}
            </h2>
          </div>
          <Link href="/work"
            className="font-mono text-[0.85rem] uppercase tracking-[0.15em] text-ink/40 hover:text-coral transition-colors flex items-center gap-2 shrink-0 mb-1">
            {sw.viewAll}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="space-y-0">
          {projects.map((p, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div key={p.id}
                initial={{ y: 30 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease }}
              >
                <div
                  className="group relative grid grid-cols-1 md:grid-cols-12 gap-0 border-b border-black/8 py-12 items-center hover:bg-black/[0.015] transition-colors duration-300 -mx-8 px-8 md:-mx-12 md:px-12 lg:-mx-16 lg:px-16"
                >
                  <div className={`md:col-span-7 ${!isEven ? "md:order-2" : ""}`}>
                    <div className="relative overflow-hidden aspect-[16/10] rounded-sm">
                      {p.image ? (
                        <Image src={p.image} alt={p.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1600px) 58vw, 933px" priority={i === 0} className="object-cover object-top grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700" />
                      ) : (
                        <div className="absolute inset-0 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700" style={{ background: p.gradient }} />
                      )}
                      <div className="absolute inset-0 bg-coral/0 group-hover:bg-coral/5 transition-all duration-500 z-10" />
                    </div>
                  </div>
                  <div className={`md:col-span-5 ${!isEven ? "md:order-1 md:pr-16" : "md:pl-16"} mt-6 md:mt-0`}>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="font-mono text-[0.85rem] text-coral uppercase tracking-widest">{p.tags[0]}</span>
                    </div>
                    <h3 className="font-display font-bold tracking-display leading-[0.92] text-ink mb-2"
                      style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}>
                      {p.name}
                    </h3>
                    <p className="font-mono text-[0.85rem] text-muted uppercase tracking-wider mb-4">{localize(p.client, lang)}</p>
                    <p className="font-body text-base text-ink/55 leading-relaxed mb-8">{localize(p.desc, lang)}</p>
                    <div className="flex flex-wrap items-center gap-3">
                      {/* Stretched link: the whole card opens the live site; the case study button sits above it. */}
                      <a href={p.url} target="_blank" rel="noopener noreferrer"
                        className="btn btn-outline after:absolute after:inset-0 after:content-['']">
                        {tr.caseStudy.visitSite}
                        <span className="sr-only"> — {p.name}</span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                          <path d="M3 9l6-6M4 3h5v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                      {hasCaseStudy(p) && <CaseStudyButton slug={p.slug} name={p.name} />}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
