"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { CaseStudy } from "@/lib/projects";
import ScrollPreview from "./ScrollPreview";

/** Tabbed set of full-page previews, one window that swaps pages. */
export default function PageShowcase({ pages }: { pages: NonNullable<CaseStudy["pages"]> }) {
  const { tr, lang } = useLanguage();
  const [index, setIndex] = useState(0);
  const current = pages[index];

  return (
    <div>
      <div role="group" aria-label={tr.caseStudy.pagesLabel} className="flex flex-wrap gap-2 mb-6">
        {pages.map((p, i) => (
          <button key={p.label.en} type="button" onClick={() => setIndex(i)} aria-pressed={i === index}
            className={`font-mono text-[0.85rem] uppercase tracking-[0.15em] px-4 py-2.5 border transition-all duration-200 ${
              i === index
                ? "bg-ink text-chalk border-ink"
                : "bg-transparent text-ink/45 border-black/15 hover:border-black/40 hover:text-ink"
            }`}>
            {p.label[lang]}
          </button>
        ))}
      </div>
      {/* key remounts the preview so each page starts at the top */}
      <ScrollPreview key={current.screen.src} screen={current.screen} />
    </div>
  );
}
