"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import type { CaseStudy } from "@/lib/projects";

type Props = Pick<CaseStudy, "outcomes" | "quote" | "metrics">;

export default function OutcomeList({ outcomes, quote, metrics }: Props) {
  const { tr, lang } = useLanguage();

  return (
    <div>
      <ul className="space-y-4">
        {outcomes.map(o => (
          <li key={o.en} className="flex gap-4 font-body text-lg text-ink/70 leading-relaxed">
            <span aria-hidden className="mt-3 block w-2 h-2 rounded-full bg-coral shrink-0" />
            {o[lang]}
          </li>
        ))}
      </ul>

      {metrics && metrics.length > 0 && (
        <dl aria-label={tr.caseStudy.metrics} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-black/8">
          {metrics.map(m => (
            <div key={m.label.en}>
              <dt className="font-mono text-[0.8rem] uppercase tracking-[0.14em] text-muted">{m.label[lang]}</dt>
              <dd className="font-display font-bold tracking-display text-ink text-4xl mt-1">{m.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {quote && (
        <figure className="mt-12 pt-8 border-t border-black/8">
          <blockquote className="font-display text-2xl md:text-3xl text-ink leading-snug">“{quote.text[lang]}”</blockquote>
          <figcaption className="font-mono text-[0.85rem] uppercase tracking-[0.14em] text-muted mt-4">
            {quote.author} · {quote.role[lang]}
          </figcaption>
        </figure>
      )}
    </div>
  );
}
