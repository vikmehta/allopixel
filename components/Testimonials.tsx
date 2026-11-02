"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const vp = { once: true, amount: 0 } as const;

type L<T> = { en: T; fr: T };

type Testimonial = {
  id: string;
  pull: L<string>; // short excerpt shown as the headline
  quote: L<string[]>; // full text, one entry per paragraph. English is the client's original wording
  name: string;
  role: L<string>;
  org?: L<string>;
  creds?: L<string>;
};

const same = (v: string): L<string> => ({ en: v, fr: v });

const testimonials: Testimonial[] = [
  {
    id: "fearless-feminine",
    pull: {
      en: "She treats my mission like it's her own.",
      fr: "Elle traite ma mission comme si c'était la sienne.",
    },
    quote: {
      en: [
        "Working with Jayashree has been one of the best decisions I've made for my business. She helped bring Fearless & Feminine to life online — my website, my social media, my SEO — and she treats my mission like it's her own. She's dedicated, patient, and she genuinely cares about the women this brand serves. I couldn't have asked for a better partner in this season of building.",
      ],
      fr: [
        "Travailler avec Jayashree a été l'une des meilleures décisions que j'aie prises pour mon entreprise. Elle a donné vie à Fearless & Feminine en ligne — mon site web, mes réseaux sociaux, mon référencement — et elle traite ma mission comme si c'était la sienne. Elle est dévouée, patiente et se soucie sincèrement des femmes que cette marque sert. Je n'aurais pas pu espérer une meilleure partenaire en cette période de construction.",
      ],
    },
    name: "Cierra Nyshea",
    role: { en: "Founder", fr: "Fondateur·rice" },
    org: same("Fearless & Feminine"),
  },
  {
    id: "to-webfest",
    pull: {
      en: "Friendly, reliable, and quick to reply.",
      fr: "Aimable, fiable et rapide à répondre.",
    },
    quote: {
      en: [
        "I have been working with Jayashree from Allô Pixel for years. She has built several websites for me and my clients while also assisting with our social media marketing. She has always been friendly, reliable, and quick to reply when we have questions or new tasks for her to handle. It's been a great pleasure working with her, and she'll always be one of our go-tos for web design and development!",
      ],
      fr: [
        "Je travaille avec Jayashree d'Allô Pixel depuis des années. Elle a conçu plusieurs sites web pour moi et pour mes clients, tout en nous aidant avec notre marketing sur les réseaux sociaux. Elle a toujours été aimable, fiable et rapide à répondre lorsque nous avons des questions ou de nouvelles tâches à lui confier. Ce fut un grand plaisir de travailler avec elle, et elle restera toujours l'une de nos références en conception et développement web !",
      ],
    },
    name: "Jess Blackwell",
    role: { en: "Writer, Producer, Filmmaker", fr: "Scénariste, productrice, cinéaste" },
    org: {
      en: "Festival Director & Head Programmer, T.O. Webfest",
      fr: "Directrice du festival et programmatrice en chef, T.O. Webfest",
    },
  },
  {
    id: "psychotherapist",
    pull: {
      en: "Responsive, detail-oriented, reliable, talented, artistic, and ethical.",
      fr: "Réactive, minutieuse, fiable, talentueuse, artistique et éthique.",
    },
    quote: {
      en: [
        "As a psychotherapist, I cannot say enough positive things about Jayashree of AllôPixel who designed and maintains my clinic website and supports every technological aspect of my online presence with exceptional skill, care, and professionalism.",
        "Jayashree is incredibly responsive, detail-oriented, reliable, talented, artistic, and ethical. Her expertise streamlines my business in ways that allow me to focus on my clients and the work that matters most, without worrying about areas outside my own expertise.",
        "Working alongside Jayashree has been an immense gift. I feel truly lucky to have her support on this journey, and recommend her wholeheartedly to any therapist or professional seeking a trusted, creative, and capable digital partner.",
      ],
      fr: [
        "En tant que psychothérapeute, je ne saurais trop dire de bien de Jayashree d'AllôPixel, qui a conçu et qui maintient le site web de ma clinique et soutient chaque aspect technologique de ma présence en ligne avec une compétence, un soin et un professionnalisme exceptionnels.",
        "Jayashree est incroyablement réactive, minutieuse, fiable, talentueuse, artistique et éthique. Son expertise simplifie mon entreprise de manière à me permettre de me concentrer sur mes clients et sur le travail qui compte le plus, sans me soucier des domaines qui dépassent mon expertise.",
        "Travailler aux côtés de Jayashree a été un immense cadeau. J'ai vraiment la chance de pouvoir compter sur son soutien dans ce parcours, et je la recommande chaleureusement à tout thérapeute ou professionnel à la recherche d'un partenaire numérique de confiance, créatif et compétent.",
      ],
    },
    name: "Jamie Dvorak",
    role: { en: "Psychotherapist", fr: "Psychothérapeute" },
    org: same("Blue Rabbit Therapy"),
    creds: {
      en: "B.A. Psych., MACP., PsyD., R.S.W., C.C.C., RP, Certified Level 1 TEAM* Practitioner",
      fr: "B.A. Psych., MACP., PsyD., R.S.W., C.C.C., RP, certification TEAM* de niveau 1",
    },
  },
  {
    id: "social-media-client",
    pull: {
      en: "The quality and wholesomeness of the posts.",
      fr: "La qualité et le caractère sain des publications.",
    },
    quote: {
      en: [
        "I have been using the services of JP for a little over 8 months now to monitor/post my social media. I have received many comments from clients, friends, and family about the quality and wholesomeness of the posts that JP has made. JP is very easy to work with which is important in a demanding environment.",
      ],
      fr: [
        "Je fais appel aux services de JP depuis un peu plus de 8 mois pour gérer et publier mes réseaux sociaux. J'ai reçu de nombreux commentaires de clients, d'amis et de membres de ma famille sur la qualité et le caractère sain des publications que JP a créées. JP est très facile à côtoyer, ce qui est important dans un environnement exigeant.",
      ],
    },
    name: "Andy Tulloch",
    role: { en: "Realtor", fr: "Courtier immobilier" },
    org: same("Century 21 Heritage House"),
  },
];

function Card({ item, index }: { item: Testimonial; index: number }) {
  const { tr, lang } = useLanguage();
  const t = tr.testimonials;
  const [open, setOpen] = useState(false);
  const quote = item.quote[lang];
  const long = quote.join(" ").length > 420;
  const bodyId = `testimonial-${item.id}`;

  return (
    <motion.figure
      initial={{ y: 24 }} whileInView={{ y: 0 }}
      viewport={vp} transition={{ duration: 0.6, delay: index * 0.1, ease }}
      className="border-t border-black/10 pt-8 flex flex-col"
    >
      <p className="font-display font-bold tracking-display leading-[1.08] text-ink mb-6"
        style={{ fontSize: "clamp(1.4rem, 2vw, 1.9rem)" }}>
        &ldquo;{item.pull[lang]}&rdquo;
      </p>

      <blockquote id={bodyId}
        className={`font-body text-base text-ink/70 leading-relaxed space-y-3 ${long && !open ? "line-clamp-5" : ""}`}>
        {quote.map((p, i) => <p key={i}>{p}</p>)}
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
        <div className="font-mono text-[0.85rem] text-ink/50 uppercase tracking-wider mt-1">{item.role[lang]}</div>
        {item.org && <div className="font-mono text-[0.85rem] text-coral uppercase tracking-wider mt-0.5">{item.org[lang]}</div>}
        {item.creds && <div className="font-body text-sm text-ink/50 mt-2 leading-snug">{item.creds[lang]}</div>}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-12 items-start">
          {testimonials.map((item, i) => <Card key={item.id} item={item} index={i} />)}
        </div>

        <p className="mt-12 font-mono text-[0.8rem] uppercase tracking-wider text-ink/40">{t.note}</p>
      </div>
    </section>
  );
}
