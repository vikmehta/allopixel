"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Marquee() {
  const { tr } = useLanguage();
  const items = [...tr.marquee.items, ...tr.marquee.items];

  return (
    <div className="bg-coral overflow-hidden py-3" aria-hidden>
      <div className="flex whitespace-nowrap animate-marquee">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-5 mx-2">
            <span className="font-mono text-[0.85rem] font-medium text-white uppercase tracking-[0.2em]">
              {item}
            </span>
            <span className="text-white/30">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
