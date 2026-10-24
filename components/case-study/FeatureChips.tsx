"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import type { Localized } from "@/lib/projects";

export default function FeatureChips({ items }: { items: Localized[] }) {
  const { lang } = useLanguage();
  return (
    <ul className="flex flex-wrap gap-3">
      {items.map(f => (
        <li key={f.en} className="font-mono text-[0.85rem] uppercase tracking-[0.1em] text-ink border border-ink/20 px-4 py-2.5 rounded-sm">
          {f[lang]}
        </li>
      ))}
    </ul>
  );
}
