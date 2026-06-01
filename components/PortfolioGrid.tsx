"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Cat = "All" | "Branding" | "Web" | "Print" | "Social";
const cats: Cat[] = ["All", "Branding", "Web", "Print", "Social"];

const projects = [
  { id: 1, name: "Island Juice Co.", client: "Food & Beverage", tags: ["Branding"], year: "2024", gradient: "linear-gradient(135deg, #1C3320 0%, #3D7A4A 100%)" },
  { id: 2, name: "Blue Rabbit Therapy", client: "Health & Wellness", tags: ["Web"], year: "2024", gradient: "linear-gradient(135deg, #0F1E30 0%, #2E5080 100%)" },
  { id: 3, name: "Siwalic Apparels", client: "Fashion", tags: ["Branding", "Print"], year: "2023", gradient: "linear-gradient(135deg, #1E0E0A 0%, #632618 100%)" },
  { id: 4, name: "Madawaska Trails", client: "Travel & Outdoors", tags: ["Social", "Branding"], year: "2024", gradient: "linear-gradient(135deg, #0F1E10 0%, #2D5A30 100%)" },
  { id: 5, name: "Reno Pro Plus", client: "Home Services", tags: ["Web"], year: "2023", gradient: "linear-gradient(135deg, #151515 0%, #3A3A3A 100%)" },
  { id: 6, name: "Instabake", client: "Food & Bakery", tags: ["Branding", "Social"], year: "2024", gradient: "linear-gradient(135deg, #2E1A08 0%, #7A4A1A 100%)" },
  { id: 7, name: "SLNA Studio", client: "Creative Studio", tags: ["Branding", "Print"], year: "2023", gradient: "linear-gradient(135deg, #0E0E20 0%, #2A2050 100%)" },
  { id: 8, name: "Dalmaa", client: "Tech", tags: ["Web", "Branding"], year: "2024", gradient: "linear-gradient(135deg, #0A1520 0%, #1C3850 100%)" },
];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function PortfolioGrid() {
  const [active, setActive] = useState<Cat>("All");

  const filtered = active === "All" ? projects : projects.filter(p => p.tags.includes(active));

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-12">
        {cats.map(cat => (
          <button key={cat} onClick={() => setActive(cat)}
            className={`font-mono text-[0.65rem] uppercase tracking-[0.15em] px-4 py-2.5 border transition-all duration-200 ${
              active === cat
                ? "bg-ink text-chalk border-ink"
                : "bg-transparent text-ink/45 border-black/15 hover:border-black/40 hover:text-ink"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.div key={p.id} layout
              initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease }}
            >
              <div className="group border border-black/10 hover:border-black/30 transition-all duration-300 cursor-pointer">
                {/* Image */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700"
                    style={{ background: p.gradient }} />
                </div>
                {/* Info */}
                <div className="p-6 border-t border-black/8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-[0.6rem] text-ink/30 uppercase tracking-wider">{p.year}</span>
                    <span className="w-px h-3 bg-black/15" />
                    {p.tags.map(t => (
                      <span key={t} className="font-mono text-[0.6rem] text-coral uppercase tracking-wider">{t}</span>
                    ))}
                  </div>
                  <h3 className="font-display font-semibold tracking-display text-ink text-2xl mb-1">{p.name}</h3>
                  <p className="font-body text-sm text-ink/40">{p.client}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* In-progress ghost */}
          {(active === "All" || active === "Branding") && (
            <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} key="ghost">
              <div className="border border-dashed border-black/15 aspect-[16/10] relative flex items-center justify-center bg-black/[0.02]">
                <motion.div animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 3, repeat: Infinity }}>
                  <span className="font-mono text-[0.65rem] text-ink/30 uppercase tracking-widest">In progress</span>
                </motion.div>
              </div>
              <div className="p-6 border-t border-black/8 border-l border-dashed border-black/15 border-r border-b">
                <div className="h-3 w-16 bg-black/6 rounded mb-3" />
                <div className="h-5 w-36 bg-black/6 rounded" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
