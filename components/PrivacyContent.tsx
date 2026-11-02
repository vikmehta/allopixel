"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { privacy } from "@/lib/privacy";

export default function PrivacyContent() {
  const { lang } = useLanguage();
  const p = privacy[lang];

  return (
    <section className="pt-36 pb-24 bg-chalk">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
        <span className="section-label block mb-5">{p.label}</span>
        <h1 className="font-display font-bold tracking-display leading-[0.92] text-ink"
          style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}>
          {p.title}
        </h1>
        <p className="font-mono text-[0.85rem] uppercase tracking-wider text-ink/65 mt-6">{p.updated}</p>

        <div className="mt-12 max-w-3xl">
          <p className="font-body text-lg text-ink/70 leading-relaxed">{p.intro}</p>

          {p.sections.map(s => (
            <div key={s.heading} className="mt-12">
              <h2 className="font-display font-bold tracking-display text-ink text-2xl md:text-3xl leading-tight">{s.heading}</h2>
              <div className="mt-4 space-y-3 font-body text-base text-ink/70 leading-relaxed">
                {s.body.map((para, i) => (
                  <p key={i} className={para.startsWith("•") ? "pl-5 -indent-4" : ""}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
