"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tiers = [
  {
    name: "Spark",
    price: "$299",
    sub: "Perfect for new businesses",
    features: ["Logo design (2 concepts)", "Brand color palette", "Font pairing guide", "3 social templates", "All source files"],
    featured: false,
  },
  {
    name: "Studio",
    price: "$799",
    sub: "Most popular for small businesses",
    features: ["Everything in Spark", "Full brand guidelines", "5-page website", "Mobile responsive", "Contact form", "Basic SEO setup"],
    featured: true,
  },
  {
    name: "Launch",
    price: "$1,499",
    sub: "Full brand launch package",
    features: ["Everything in Studio", "Social media kit (10 templates)", "Business card design", "Print collateral", "30-day support", "Priority turnaround"],
    featured: false,
  },
];

export default function PreviewPricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section style={{ background: "#0A0A12", padding: "6rem 3rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "1rem" }}
        >
          <span style={{
            fontFamily: "var(--font-body)", fontSize: "0.7rem", fontWeight: 600,
            textTransform: "uppercase", letterSpacing: "0.2em", color: "#FF4D2E",
            display: "block", marginBottom: "1rem",
          }}>Transparent pricing</span>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3.75rem)", color: "#EBEBEA",
            letterSpacing: "-0.03em", margin: 0, lineHeight: 1.1,
          }}>
            No surprises. No hidden fees.<br />
            <span style={{ color: "#D4FF3A" }}>Just honest pricing.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          style={{
            fontFamily: "var(--font-body)", textAlign: "center",
            color: "rgba(235,235,234,0.35)", marginBottom: "3.5rem",
          }}
        >
          Every project starts with a free discovery call. No commitment.
        </motion.p>

        {/* Cards */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.25rem", alignItems: "start",
        }}>
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              style={{
                borderRadius: 20,
                padding: "2rem",
                position: "relative",
                ...(tier.featured ? {
                  background: "linear-gradient(145deg, #181820, #111118)",
                  border: "1px solid rgba(212,255,58,0.25)",
                  boxShadow: "0 0 40px rgba(212,255,58,0.06), 0 20px 60px rgba(0,0,0,0.4)",
                  transform: "scale(1.03)",
                } : {
                  background: "#111118",
                  border: "1px solid rgba(255,255,255,0.07)",
                }),
              }}
            >
              {tier.featured && (
                <div style={{
                  position: "absolute", top: -14, left: "50%",
                  transform: "translateX(-50%)",
                  background: "#D4FF3A", color: "#0A0A12",
                  fontFamily: "var(--font-body)", fontWeight: 700,
                  fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.12em",
                  padding: "0.35rem 1rem", borderRadius: 9999,
                }}>Most popular</div>
              )}

              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.4rem",
                color: "#EBEBEA", letterSpacing: "-0.02em", margin: "0 0 0.5rem",
              }}>{tier.name}</h3>

              <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem", marginBottom: "0.6rem" }}>
                <span style={{
                  fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "3rem",
                  color: tier.featured ? "#D4FF3A" : "#EBEBEA",
                  letterSpacing: "-0.04em", lineHeight: 1,
                }}>{tier.price}</span>
                <span style={{
                  fontFamily: "var(--font-body)", fontSize: "1.1rem",
                  color: "rgba(235,235,234,0.3)",
                }}>+</span>
              </div>

              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.825rem",
                color: "rgba(235,235,234,0.4)", marginBottom: "1.5rem", lineHeight: 1.5,
              }}>{tier.sub}</p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.75rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {tier.features.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                    <svg style={{ flexShrink: 0, marginTop: 2 }} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                      <path d="M12 3.5L5.5 10 2 6.5" stroke={tier.featured ? "#D4FF3A" : "#4E8672"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{
                      fontFamily: "var(--font-body)", fontSize: "0.825rem",
                      color: "rgba(235,235,234,0.55)",
                    }}>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#" style={{
                display: "block", textAlign: "center",
                fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.875rem",
                padding: "0.85rem", borderRadius: 12, textDecoration: "none",
                transition: "all 0.2s",
                ...(tier.featured ? {
                  background: "#D4FF3A", color: "#0A0A12",
                } : {
                  border: "1px solid rgba(255,255,255,0.12)", color: "#EBEBEA",
                }),
              }}>
                Get started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
