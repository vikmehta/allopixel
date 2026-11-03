"use client";

import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTAStrip from "@/components/CTAStrip";
import { useLanguage } from "@/contexts/LanguageContext";

type Item = { title: string; desc: string; deliverables: readonly string[] };

const WEB_SERVICES = 3; // Website Design, Online Stores, Website Redesign come first

function ServiceRow({ item, included }: { item: Item; included: string }) {
  return (
    <div>
      <div className="rule" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-10">
        <div className="lg:col-span-2">
          <h2 className="font-display font-semibold tracking-display text-2xl text-ink mb-3">{item.title}</h2>
          <p className="font-body text-base text-ink/65 leading-relaxed">{item.desc}</p>
        </div>
        <div>
          <p className="font-mono text-[0.85rem] uppercase tracking-widest text-amber-ink mb-3">{included}</p>
          <ul className="space-y-2">
            {item.deliverables.map(d => (
              <li key={d} className="flex items-start gap-2.5 font-body text-sm text-ink/65">
                <span className="text-coral text-xs mt-0.5 shrink-0">✓</span>{d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ServicesContent() {
  const { tr } = useLanguage();
  const s = tr.servicesPage;
  const webItems = s.items.slice(0, WEB_SERVICES);
  const otherItems = s.items.slice(WEB_SERVICES);

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-chalk">
        <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
          <span className="section-label block mb-5">{s.label}</span>
          <h1 className="font-display font-bold tracking-display leading-[0.92] text-ink max-w-3xl"
            style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)" }}>
            {s.heading[0]}<br />{s.heading[1]}<br /><span className="text-coral">{s.heading[2]}</span>
          </h1>
          <p className="font-body text-lg text-ink/65 leading-relaxed mt-6 max-w-xl">{s.sub}</p>
        </div>
      </section>

      {/* Web services first, then packages & prices, then the other services */}
      <section className="pb-20 bg-chalk">
        <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
          {webItems.map(item => <ServiceRow key={item.title} item={item} included={s.whatsIncluded} />)}
          <div className="rule" />
        </div>
      </section>

      <Pricing />

      <section className="py-20 bg-chalk">
        <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
          {otherItems.map(item => <ServiceRow key={item.title} item={item} included={s.whatsIncluded} />)}
          <div className="rule" />
        </div>
      </section>

      <FAQ />
      <CTAStrip variant="services" />
    </>
  );
}
