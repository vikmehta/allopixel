"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    name: "Island Juice Co.",
    type: "Restaurant · Branding",
    desc: "A vibrant tropical brand that turned a local juice bar into a destination.",
    gradient: "linear-gradient(135deg, #0E2820 0%, #1A4A3A 50%, #4E8672 100%)",
    accent: "#C9A87C",
    tag: "Branding",
  },
  {
    name: "Blue Rabbit Therapy",
    type: "Wellness · Web Design",
    desc: "A calm, trust-first website for a therapy practice.",
    gradient: "linear-gradient(135deg, #1A0E20 0%, #2D1A40 50%, #6B3FA0 100%)",
    accent: "#D4FF3A",
    tag: "Web",
  },
  {
    name: "Siwalic Apparels",
    type: "Fashion · Brand Identity",
    desc: "A bold modern brand for an urban South Asian clothing label.",
    gradient: "linear-gradient(135deg, #200A0A 0%, #401010 50%, #A03020 100%)",
    accent: "#FF4D2E",
    tag: "Branding",
  },
];

export default function PreviewWork() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section style={{
      background: "#0D0D18", padding: "6rem 3rem",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-end",
          marginBottom: "3.5rem", flexWrap: "wrap", gap: "1rem",
        }}>
          <div>
            <span style={{
              fontFamily: "var(--font-body)", fontSize: "0.7rem", fontWeight: 600,
              textTransform: "uppercase", letterSpacing: "0.2em",
              color: "#FF4D2E", display: "block", marginBottom: "0.75rem",
            }}>Selected work</span>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.75rem)", lineHeight: 1.05,
              letterSpacing: "-0.03em", color: "#EBEBEA",
              margin: 0,
            }}>
              Work that speaks<br />for itself.
            </h2>
          </div>
          <a href="#" style={{
            fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 500,
            color: "rgba(235,235,234,0.4)", textDecoration: "none",
            display: "flex", alignItems: "center", gap: "0.4rem",
            transition: "color 0.2s",
          }}>
            View all
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div style={{
                borderRadius: 16, overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.06)",
                background: "#111118",
                transition: "border-color 0.3s, transform 0.3s",
                cursor: "pointer",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,77,46,0.4)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                {/* Visual */}
                <div style={{
                  height: 220, background: p.gradient,
                  position: "relative", overflow: "hidden",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <div style={{
                    width: 80, height: 80, borderRadius: "50%",
                    border: `2px solid ${p.accent}`,
                    opacity: 0.3,
                  }} />
                  <div style={{
                    position: "absolute", bottom: 16, left: 16,
                  }}>
                    <span style={{
                      fontFamily: "var(--font-body)", fontSize: "0.65rem", fontWeight: 700,
                      textTransform: "uppercase", letterSpacing: "0.15em",
                      background: "rgba(0,0,0,0.4)", color: p.accent,
                      padding: "0.3rem 0.75rem", borderRadius: 9999,
                    }}>{p.tag}</span>
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: "1.25rem" }}>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "0.7rem",
                    color: "rgba(235,235,234,0.3)", textTransform: "uppercase",
                    letterSpacing: "0.12em", marginBottom: "0.4rem",
                  }}>{p.type}</p>
                  <h3 style={{
                    fontFamily: "var(--font-display)", fontWeight: 700,
                    fontSize: "1.25rem", color: "#EBEBEA", letterSpacing: "-0.02em",
                    margin: "0 0 0.5rem",
                  }}>{p.name}</h3>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "0.825rem",
                    color: "rgba(235,235,234,0.4)", lineHeight: 1.6, margin: 0,
                  }}>{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
