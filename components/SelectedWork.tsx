"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const vp = { once: true, amount: 0.05 } as const;

const projects = [
  { id: 6, name: "Poissonnerie MOJ", year: "2025", category: "Web Design", client: "Food & Seafood Market", desc: "A bilingual website for a family-run fresh seafood market serving the Châteauguay community in both English and French.", gradient: "linear-gradient(135deg, #061E2C 0%, #0D3A52 45%, #1A6080 100%)", image: "/work-moj.png", url: "https://moj-three.vercel.app/" },
  { id: 1, name: "In Bloom Events", year: "2025", category: "Web Design", client: "Events & Networking", desc: "An elevated event website for a luxury women's empowerment and networking experience in Québec.", gradient: "linear-gradient(135deg, #2A0F18 0%, #4A1F30 45%, #7A3A50 100%)", image: "/work-inbloom.jpeg", url: "https://www.inbloomevents.ca/" },
  { id: 2, name: "Blue Rabbit Therapy", year: "2024", category: "Web Design", client: "Health & Wellness", desc: "A calm, trust-first website for a virtual psychotherapy practice serving clients across Ontario.", gradient: "linear-gradient(135deg, #0A1520 0%, #142538 45%, #1E3A58 100%)", image: "/work-bluerabbit.png", url: "https://bluerabbittherapy.com/" },
  { id: 3, name: "Jess Blackwell", year: "2024", category: "Web Design", client: "Film & Creative", desc: "A minimal, cinematic portfolio for a Toronto-based filmmaker and content creator.", gradient: "linear-gradient(135deg, #0D0D0D 0%, #1A1A1A 45%, #2A2520 100%)", image: "/work-jessblackwell.jpeg", url: "https://www.jessblackwell.com/" },
];

export default function SelectedWork() {
  const { tr } = useLanguage();
  const sw = tr.selectedWork;

  return (
    <section className="bg-chalk py-14 md:py-20 lg:py-36">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-8 border-b border-black/8">
          <div>
            <span className="section-label block mb-4">{sw.label}</span>
            <h2 className="font-display font-bold tracking-display leading-[0.92] text-ink"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)" }}>
              {sw.heading[0]}<br />{sw.heading[1]}
            </h2>
          </div>
          <Link href="/work"
            className="font-mono text-[0.85rem] uppercase tracking-[0.15em] text-ink/40 hover:text-coral transition-colors flex items-center gap-2 shrink-0 mb-1">
            {sw.viewAll}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="space-y-0">
          {projects.map((p, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div key={p.id}
                initial={{ y: 30 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease }}
              >
                <a href={p.url} target="_blank" rel="noopener noreferrer"
                  className="group grid grid-cols-1 md:grid-cols-12 gap-0 border-b border-black/8 py-12 items-center hover:bg-black/[0.015] transition-colors duration-300 -mx-8 px-8 md:-mx-12 md:px-12 lg:-mx-16 lg:px-16"
                >
                  <div className={`md:col-span-7 ${!isEven ? "md:order-2" : ""}`}>
                    <div className="relative overflow-hidden aspect-[16/10] rounded-sm">
                      {p.image ? (
                        <Image src={p.image} alt={p.name} fill className="object-cover object-top grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700" />
                      ) : (
                        <div className="absolute inset-0 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700" style={{ background: p.gradient }} />
                      )}
                      <div className="absolute inset-0 bg-coral/0 group-hover:bg-coral/5 transition-all duration-500 z-10" />
                    </div>
                  </div>
                  <div className={`md:col-span-5 ${!isEven ? "md:order-1 md:pr-16" : "md:pl-16"} mt-6 md:mt-0`}>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="font-mono text-[0.85rem] text-coral uppercase tracking-widest">{p.category}</span>
                    </div>
                    <h3 className="font-display font-bold tracking-display leading-[0.92] text-ink mb-2"
                      style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}>
                      {p.name}
                    </h3>
                    <p className="font-mono text-[0.85rem] text-muted uppercase tracking-wider mb-4">{p.client}</p>
                    <p className="font-body text-base text-ink/55 leading-relaxed mb-8">{p.desc}</p>
                    <span className="font-mono text-[0.85rem] uppercase tracking-[0.14em] text-ink/35 group-hover:text-coral transition-colors duration-200 flex items-center gap-2">
                      {sw.viewProject}
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                        <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
