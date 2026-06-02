"use client";

import PortfolioGrid from "@/components/PortfolioGrid";
import CTAStrip from "@/components/CTAStrip";
import { useLanguage } from "@/contexts/LanguageContext";

export default function WorkContent() {
  const { tr } = useLanguage();
  const w = tr.work;

  return (
    <>
      <section className="pt-36 pb-16 bg-chalk">
        <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
          <span className="section-label block mb-5">{w.label}</span>
          <h1 className="font-display font-bold tracking-display leading-[0.92] text-ink"
            style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)" }}>
            {w.heading[0]}<br />{w.heading[1]}
          </h1>
          <p className="font-body text-lg text-ink/50 leading-relaxed mt-6 max-w-lg">{w.sub}</p>
        </div>
      </section>

      <section className="pb-24 bg-chalk">
        <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
          <PortfolioGrid />
        </div>
      </section>

      <CTAStrip variant="work" />
    </>
  );
}
