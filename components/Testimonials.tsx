"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const vp = { once: true, amount: 0 } as const;

type Testimonial = {
  id: string;
  pull: string; // verbatim excerpt shown as the headline
  quote: string[]; // full text, verbatim, one entry per paragraph
  name: string;
  role: string;
  org: string;
};

const testimonials: Testimonial[] = [
  {
    id: "fearless-feminine",
    pull: "She treats my mission like it's her own.",
    quote: [
      "Working with Jayashree has been one of the best decisions I've made for my business. She helped bring Fearless & Feminine to life online — my website, my social media, my SEO — and she treats my mission like it's her own. She's dedicated, patient, and she genuinely cares about the women this brand serves. I couldn't have asked for a better partner in this season of building.",
    ],
    name: "Cierra Nyshea",
    role: "Founder",
    org: "Fearless & Feminine",
  },
  {
    id: "to-webfest",
    pull: "Friendly, reliable, and quick to reply.",
    quote: [
      "I have been working with Jayashree from Allô Pixel for years. She has built several websites for me and my clients while also assisting with our social media marketing. She has always been friendly, reliable, and quick to reply when we have questions or new tasks for her to handle. It's been a great pleasure working with her, and she'll always be one of our go-tos for web design and development!",
    ],
    name: "Jess Blackwell",
    role: "Writer, Producer, Filmmaker",
    org: "Festival Director & Head Programmer, T.O. Webfest",
  },
  {
    id: "psychotherapist",
    pull: "Responsive, detail-oriented, reliable, talented, artistic, and ethical.",
    quote: [
      "As a psychotherapist, I cannot say enough positive things about Jayashree of AllôPixel who designed and maintains my clinic website and supports every technological aspect of my online presence with exceptional skill, care, and professionalism.",
      "Jayashree is incredibly responsive, detail-oriented, reliable, talented, artistic, and ethical. Her expertise streamlines my business in ways that allow me to focus on my clients and the work that matters most, without worrying about areas outside my own expertise.",
      "Working alongside Jayashree has been an immense gift. I feel truly lucky to have her support on this journey, and recommend her wholeheartedly to any therapist or professional seeking a trusted, creative, and capable digital partner.",
    ],
    name: "Jamie Dvorak",
    role: "Psychotherapist",
    org: "PsyD, R.S.W., RP (Qualifying)",
  },
];

function Card({ item, index }: { item: Testimonial; index: number }) {
  const { tr } = useLanguage();
  const t = tr.testimonials;
  const [open, setOpen] = useState(false);
  const long = item.quote.join(" ").length > 420;
  const bodyId = `testimonial-${item.id}`;

  return (
    <motion.figure
      initial={{ y: 24 }} whileInView={{ y: 0 }}
      viewport={vp} transition={{ duration: 0.6, delay: index * 0.1, ease }}
      className="border-t border-black/10 pt-8 flex flex-col"
    >
      <p className="font-display font-bold tracking-display leading-[1.08] text-ink mb-6"
        style={{ fontSize: "clamp(1.4rem, 2vw, 1.9rem)" }}>
        &ldquo;{item.pull}&rdquo;
      </p>

      <blockquote id={bodyId}
        className={`font-body text-base text-ink/70 leading-relaxed space-y-3 ${long && !open ? "line-clamp-5" : ""}`}>
        {item.quote.map((p, i) => <p key={i}>{p}</p>)}
      </blockquote>

      {long && (
        <button type="button" onClick={() => setOpen(o => !o)}
          aria-expanded={open} aria-controls={bodyId}
          className="self-start mt-3 font-mono text-[0.85rem] uppercase tracking-wider text-coral hover:text-ink transition-colors">
          {open ? t.less : t.more}
        </button>
      )}

      <figcaption className="pt-8">
        <div className="font-display font-semibold text-xl tracking-display text-ink">{item.name}</div>
        <div className="font-mono text-[0.85rem] text-ink/50 uppercase tracking-wider mt-1">{item.role}</div>
        <div className="font-mono text-[0.85rem] text-coral uppercase tracking-wider mt-0.5">{item.org}</div>
      </figcaption>
    </motion.figure>
  );
}

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 lg:gap-x-14 gap-y-12 items-start">
          {testimonials.map((item, i) => <Card key={item.id} item={item} index={i} />)}
        </div>

        <p className="mt-12 font-mono text-[0.8rem] uppercase tracking-wider text-ink/40">{t.note}</p>
      </div>
    </section>
  );
}
