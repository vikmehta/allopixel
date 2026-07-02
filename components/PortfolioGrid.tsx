"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

type CatKey = "All" | "Web Design" | "Events" | "Portfolio" | "Food";

const catKeys: CatKey[] = ["All", "Web Design", "Events", "Portfolio", "Food"];

type Project = {
  id: number;
  name: string;
  client: string;
  tags: CatKey[];
  year: string;
  gradient: string;
  image: string;
  url: string;
  desc: string;
};

const projects: Project[] = [
  { id: 6, name: "Poissonnerie MOJ", client: "Food & Seafood Market", tags: ["Web Design", "Food"], year: "2025", gradient: "linear-gradient(135deg, #061E2C 0%, #0D3A52 50%, #1A6080 100%)", image: "/work-moj.webp", url: "https://moj-three.vercel.app/", desc: "Bilingual website for a family-run fresh seafood market in Châteauguay, QC." },
  { id: 1, name: "In Bloom Events", client: "Events & Networking", tags: ["Web Design", "Events"], year: "2025", gradient: "linear-gradient(135deg, #2A0F18 0%, #4A1F30 50%, #7A3A50 100%)", image: "/work-inbloom.jpeg", url: "https://www.inbloomevents.ca/", desc: "Luxury women's empowerment event website." },
  { id: 2, name: "Blue Rabbit Therapy", client: "Health & Wellness", tags: ["Web Design"], year: "2024", gradient: "linear-gradient(135deg, #0A1520 0%, #142538 50%, #1E3A58 100%)", image: "/work-bluerabbit.webp", url: "https://bluerabbittherapy.com/", desc: "Virtual psychotherapy practice across Ontario." },
  { id: 3, name: "Jess Blackwell", client: "Film & Creative", tags: ["Web Design", "Portfolio"], year: "2024", gradient: "linear-gradient(135deg, #0D0D0D 0%, #1A1A1A 50%, #2A2520 100%)", image: "/work-jessblackwell.jpeg", url: "https://www.jessblackwell.com/", desc: "Cinematic portfolio for a Toronto-based filmmaker." },
  { id: 4, name: "Reno Pro Plus", client: "Home Renovation", tags: ["Web Design"], year: "2024", gradient: "linear-gradient(135deg, #0D1525 0%, #1A2840 50%, #253A5A 100%)", image: "/work-renoproplus.jpeg", url: "https://renoproplus.com/", desc: "Home renovation contractor serving Laval & Montréal." },
  { id: 5, name: "Dalmaa", client: "Food & Recipe Blog", tags: ["Web Design", "Food"], year: "2025", gradient: "linear-gradient(135deg, #1A0D05 0%, #2E1A0A 50%, #4A2C10 100%)", image: "/work-dalmaa.webp", url: "https://dalmaa.vercel.app/", desc: "Recipe blog celebrating Indian and continental cuisine." },
  { id: 7, name: "Gloss by Mia", client: "Beauty & Nail Studio", tags: ["Web Design"], year: "2025", gradient: "linear-gradient(135deg, #0D0A14 0%, #1A1025 50%, #2A1A40 100%)", image: "/work-nails.webp", url: "https://nailsalon-sigma.vercel.app/", desc: "Dark, glamorous website for a premium nail art studio in Montréal." },
];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function PortfolioGrid() {
  const [activeKey, setActiveKey] = useState<CatKey>("All");
  const { tr } = useLanguage();

  // Map translated filter labels to their keys
  const filterLabels = tr.work.filters;

  const filtered = activeKey === "All"
    ? projects
    : projects.filter(p => p.tags.includes(activeKey));

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-12">
        {catKeys.map((key, i) => (
          <button key={key} onClick={() => setActiveKey(key)}
            className={`font-mono text-[0.85rem] uppercase tracking-[0.15em] px-4 py-2.5 border transition-all duration-200 ${
              activeKey === key
                ? "bg-ink text-chalk border-ink"
                : "bg-transparent text-ink/45 border-black/15 hover:border-black/40 hover:text-ink"
            }`}
          >
            {filterLabels[i]}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div key={p.id} layout
              initial={{ scale: 0.97 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.35, ease }}
              whileHover={{ y: -4, transition: { duration: 0.3, ease } }}
            >
              <a href={p.url} target="_blank" rel="noopener noreferrer"
                className="group block border border-black/10 hover:border-black/30 hover:shadow-xl transition-[border-color,box-shadow] duration-300">
                {/* Image */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1600px) 50vw, 800px"
                      priority={i === 0}
                      className="object-cover object-top grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-[400ms]"
                    />
                  ) : (
                    <div className="absolute inset-0 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-[400ms]"
                      style={{ background: p.gradient }} />
                  )}
                </div>
                {/* Info */}
                <div className="p-6 border-t border-black/8">
                  <div className="flex items-center gap-2 mb-3">
                    {p.tags.map(t => (
                      <span key={t} className="font-mono text-[0.85rem] text-coral uppercase tracking-wider">{t}</span>
                    ))}
                  </div>
                  <h3 className="font-display font-semibold tracking-display text-ink text-2xl mb-1">{p.name}</h3>
                  <p className="font-body text-sm text-ink/40 mb-2">{p.client}</p>
                  <p className="font-body text-sm text-ink/55 leading-relaxed">{p.desc}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
