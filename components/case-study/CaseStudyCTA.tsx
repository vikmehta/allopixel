"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Project } from "@/lib/projects";

export default function CaseStudyCTA({ next }: { next?: Pick<Project, "slug" | "name"> }) {
  const { tr } = useLanguage();
  const cs = tr.caseStudy;

  return (
    <section className="bg-coral grain py-12 md:py-16 lg:py-28 overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-bold tracking-display leading-[0.92] text-ink"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}>{cs.ctaHeading}</h2>
            <p className="font-body text-ink/60 mt-3">{cs.ctaSub}</p>
          </div>
          <Link href="/contact" className="btn btn-ink shrink-0">{cs.ctaBtn}</Link>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3 mt-12 pt-6 border-t border-ink/15 font-mono text-[0.85rem] uppercase tracking-[0.14em]">
          <Link href="/work" className="text-ink/70 hover:text-ink transition-colors">← {cs.back}</Link>
          {next && <Link href={`/work/${next.slug}`} className="text-ink/70 hover:text-ink transition-colors">{cs.next}: {next.name} →</Link>}
        </div>
      </div>
    </section>
  );
}
