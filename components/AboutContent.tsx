"use client";

import Process from "@/components/Process";
import CTAStrip from "@/components/CTAStrip";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutContent() {
  const { tr } = useLanguage();
  const a = tr.about;

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-chalk">
        <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
          <span className="section-label block mb-5">{a.label}</span>
          <h1 className="font-display font-bold tracking-display leading-[0.92] text-ink max-w-4xl"
            style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)" }}>
            {a.heading[0]}<br />
            <span className="text-coral">{a.heading[1]}</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-chalk">
        <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-5">
              {a.story.map((p, i) => (
                <p key={i} className={
                  p.size === "lg" ? "font-body text-lg text-ink/70 leading-relaxed" :
                  p.size === "lg-bold" ? "font-body text-lg text-ink/70 leading-relaxed font-medium" :
                  "font-body text-base text-ink/50 leading-relaxed"
                }>
                  {p.text}
                </p>
              ))}
            </div>

            {/* Visual block */}
            <div className="relative border border-black/8 aspect-[4/3] flex items-center justify-center overflow-hidden"
              style={{ background: "var(--color-mint)" }}>
              <span className="font-display font-bold tracking-display text-ink/6 select-none pointer-events-none"
                style={{ fontSize: "clamp(8rem, 20vw, 16rem)", lineHeight: 1 }}
                aria-hidden>ô</span>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-display font-semibold text-xl text-ink/60 tracking-display">
                  {a.visualQuote[0]}<br />{a.visualQuote[1]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-chalk">
        <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
          <span className="section-label block mb-5">{a.valuesLabel}</span>
          <h2 className="font-display font-bold tracking-display leading-[0.92] text-ink mb-16"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}>
            {a.valuesHeading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {a.values.map((v, i) => (
              <div key={v.title} className={`border-t border-black/10 pt-8 pb-8 ${i % 2 === 0 ? "sm:pr-12" : "sm:pl-12 sm:border-l sm:border-black/10"}`}>
                <h3 className="font-display font-semibold tracking-display text-xl text-ink mb-3">{v.title}</h3>
                <p className="font-body text-sm text-ink/55 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <CTAStrip variant="about" />
    </>
  );
}
