"use client";

import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTAStrip from "@/components/CTAStrip";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServicesContent() {
  const { tr } = useLanguage();
  const s = tr.servicesPage;

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-chalk">
        <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
          <span className="section-label block mb-5">{s.label}</span>
          <h1 className="font-display font-bold tracking-display leading-[0.92] text-ink max-w-3xl"
            style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)" }}>
            {s.heading[0]}<br />{s.heading[1]}<br />{s.heading[2]}
          </h1>
          <p className="font-body text-lg text-ink/50 leading-relaxed mt-6 max-w-xl">{s.sub}</p>
        </div>
      </section>

      {/* Services detail */}
      <section className="pb-20 bg-chalk">
        <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
          {s.items.map((item, i) => (
            <div key={item.title}>
              <div className="rule" />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-10">
                <div className="lg:col-span-2">
                  <h2 className="font-display font-semibold tracking-display text-2xl text-ink mb-3">{item.title}</h2>
                  <p className="font-body text-base text-ink/55 leading-relaxed">{item.desc}</p>
                </div>
                <div>
                  <p className="font-mono text-[0.85rem] uppercase tracking-widest text-coral mb-3">{s.whatsIncluded}</p>
                  <ul className="space-y-2">
                    {item.deliverables.map(d => (
                      <li key={d} className="flex items-start gap-2.5 font-body text-sm text-ink/55">
                        <span className="text-coral text-xs mt-0.5 shrink-0">✓</span>{d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {i === s.items.length - 1 && <div className="rule" />}
            </div>
          ))}
        </div>
      </section>

      <Pricing />
      <FAQ />
      <CTAStrip variant="services" />
    </>
  );
}
