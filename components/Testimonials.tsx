"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const vp = { once: true, amount: 0 } as const;

const testimonials = [
  { quote: "Working with AllôPixel was the best decision I made for my business. They took my scattered ideas and turned them into a brand I'm genuinely proud to show off everywhere.", name: "Sarah C.", role: "Owner, The Bloom Bakery", project: "Brand Identity" },
  { quote: "The website they built has already brought in three new clients. It looks premium, loads fast, and I can update it myself. Worth every single penny — and then some.", name: "Marco R.", role: "Founder, Reno Pro Plus", project: "Web Design" },
  { quote: "I needed a portfolio that felt like me — not another template. What I got exceeded every expectation. The process was clear, fast, and genuinely enjoyable.", name: "Jess P.", role: "Photographer, Jess Blackwell Studio", project: "Web Design" },
];

export default function Testimonials() {
  const { tr } = useLanguage();
  const t = tr.testimonials;

  return (
    <section className="py-14 md:py-20 lg:py-36" style={{ background: "#FAF3EA" }}>
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="mb-16">
          <span className="section-label block mb-5">{t.label}</span>
          <h2 className="font-display font-bold tracking-display leading-[0.92] text-ink"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}>
            {t.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0">
          {testimonials.map((item, i) => (
            <motion.div key={item.name}
              initial={{ y: 24 }} whileInView={{ y: 0 }}
              viewport={vp} transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="border-t border-black/10 pt-8 pr-0 md:pr-10"
            >
              <blockquote className="font-body text-base lg:text-lg text-ink/70 leading-relaxed mb-8">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <div>
                <div className="font-display font-semibold text-xl tracking-display text-ink">{item.name}</div>
                <div className="font-mono text-[0.85rem] text-ink/40 uppercase tracking-wider mt-1">{item.role}</div>
                <div className="font-mono text-[0.85rem] text-coral uppercase tracking-wider mt-0.5">{item.project}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
