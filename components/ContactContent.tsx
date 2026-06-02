"use client";

import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactContent() {
  const { tr } = useLanguage();
  const c = tr.contact;

  return (
    <section className="bg-ink grain min-h-screen">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16 py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — info */}
          <div>
            <span className="font-mono text-[0.85rem] uppercase tracking-widest text-chalk/45 block mb-6">{c.label}</span>
            <h1 className="font-display font-bold tracking-display leading-[0.92] text-chalk mb-8"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
              {c.heading}
            </h1>
            <p className="font-body text-lg text-chalk/45 leading-relaxed mb-12">{c.sub}</p>

            {/* What happens next */}
            <div className="mb-12">
              <p className="font-mono text-[0.85rem] uppercase tracking-widest text-chalk/30 mb-6">{c.whatNext}</p>
              <div className="space-y-6">
                {c.steps.map((step, i) => (
                  <div key={i} className="flex gap-5">
                    <span className="font-mono text-[0.65rem] text-coral uppercase tracking-wider mt-0.5 shrink-0">0{i + 1}</span>
                    <div>
                      <p className="font-body text-sm font-medium text-chalk/80">{step.title}</p>
                      <p className="font-body text-sm text-chalk/35 mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact details */}
            <div className="border-t border-white/8 pt-8 space-y-4">
              <div>
                <p className="font-mono text-[0.85rem] uppercase tracking-widest text-chalk/30 mb-1.5">{c.emailLabel}</p>
                <a href="mailto:info.allopixel@gmail.com" className="font-body text-sm text-chalk/55 hover:text-coral transition-colors">
                  info.allopixel@gmail.com
                </a>
              </div>
              <div>
                <p className="font-mono text-[0.85rem] uppercase tracking-widest text-chalk/30 mb-1.5">{c.locationLabel}</p>
                <p className="font-body text-sm text-chalk/55">{c.location}</p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:pt-24">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
