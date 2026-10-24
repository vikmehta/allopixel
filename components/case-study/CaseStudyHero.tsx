"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { localize, type CaseStudy, type Project } from "@/lib/projects";
import ScrollPreview from "./ScrollPreview";

type Props = { project: Project & { caseStudy: CaseStudy } };

export default function CaseStudyHero({ project: p }: Props) {
  const { tr, lang } = useLanguage();
  const cs = tr.caseStudy;
  const c = p.caseStudy;
  const facts = [
    { label: cs.sector, value: localize(p.client, lang) },
    { label: cs.discipline, value: c.services.map(s => s[lang]).join(" · ") },
    { label: cs.year, value: c.year ?? p.year },
  ];

  return (
    <section className="pt-36 pb-12 bg-chalk">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
        <Link href="/work" className="font-mono text-[0.85rem] uppercase tracking-[0.15em] text-ink/40 hover:text-coral transition-colors inline-block mb-10">
          ← {cs.back}
        </Link>
        <span className="section-label block mb-5">{cs.label}</span>
        <h1 className="font-display font-bold tracking-display leading-[0.92] text-ink"
          style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)" }}>
          {p.name}
        </h1>
        <p className="font-display text-2xl md:text-3xl text-coral mt-6 max-w-3xl leading-snug">{c.tagline[lang]}</p>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mt-12 pt-8 border-t border-black/10">
          <dl className="grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] gap-x-12 gap-y-6">
            {facts.map(f => (
              <div key={f.label}>
                <dt className="font-mono text-[0.75rem] uppercase tracking-[0.16em] text-muted mb-1.5">{f.label}</dt>
                <dd className="font-body text-base text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-ink self-start lg:self-end shrink-0">
            {cs.visitLive}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path d="M3 9l6-6M4 3h5v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="mt-12">
          <ScrollPreview screen={c.after} priority sizes="(max-width: 1600px) 100vw, 1500px" />
        </div>
      </div>
    </section>
  );
}
