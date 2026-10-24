"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { projects, hasCaseStudy, localize, type CatKey } from "@/lib/projects";
import CaseStudyButton from "@/components/CaseStudyButton";

const catKeys: CatKey[] = ["All", "Web Design", "Events", "Portfolio", "Food"];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function PortfolioGrid() {
  const [activeKey, setActiveKey] = useState<CatKey>("All");
  const { tr, lang } = useLanguage();

  // Map translated filter labels to their keys
  const filterLabels = tr.work.filters;

  const filtered = activeKey === "All"
    ? projects
    : projects.filter(p => p.tags.includes(activeKey));

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-12">
        {catKeys.map((key, i) => (
          <button key={key} onClick={() => setActiveKey(key)}
            className={`font-mono text-[0.85rem] uppercase tracking-[0.15em] px-4 py-2.5 border transition-all duration-200 ${
              activeKey === key
                ? "bg-ink text-chalk border-ink"
                : "bg-transparent text-ink/45 border-black/15 hover:border-black/40 hover:text-ink"
            }`}
          >
            {filterLabels[i]}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div key={p.id} layout
              initial={{ scale: 0.97 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.35, ease }}
              whileHover={{ y: -4, transition: { duration: 0.3, ease } }}
            >
              <div className="group relative block border border-black/10 hover:border-black/30 hover:shadow-xl transition-[border-color,box-shadow] duration-300">
                {/* Image */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1600px) 50vw, 800px"
                      priority={i === 0}
                      className={`object-cover ${p.imgPosition ?? "object-top"} grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-[400ms]`}
                    />
                  ) : (
                    <div className="absolute inset-0 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-[400ms]"
                      style={{ background: p.gradient }} />
                  )}
                </div>
                {/* Info */}
                <div className="p-6 border-t border-black/8">
                  <div className="flex items-center gap-2 mb-3">
                    {p.tags.map(t => (
                      <span key={t} className="font-mono text-[0.85rem] text-coral uppercase tracking-wider">{t}</span>
                    ))}
                  </div>
                  <h3 className="font-display font-semibold tracking-display text-ink text-2xl mb-1">{p.name}</h3>
                  <p className="font-body text-sm text-ink/40 mb-2">{localize(p.client, lang)}</p>
                  <p className="font-body text-sm text-ink/55 leading-relaxed">{localize(p.descShort, lang)}</p>
                  <div className="flex flex-wrap items-center gap-3 mt-5">
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
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
