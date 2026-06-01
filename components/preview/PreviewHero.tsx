"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

export default function PreviewHero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0A0A12 0%, #0E0E1A 50%, #0A0F1A 100%)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Noise grain overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.04,
          pointerEvents: "none",
          zIndex: 1,
        }}
        aria-hidden
      />

      {/* Gradient blobs */}
      <div style={{
        position: "absolute", top: "-10%", right: "-5%",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,77,46,0.12) 0%, transparent 65%)",
        pointerEvents: "none", zIndex: 1,
      }} aria-hidden />
      <div style={{
        position: "absolute", bottom: "0%", left: "-8%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(212,255,58,0.07) 0%, transparent 65%)",
        pointerEvents: "none", zIndex: 1,
      }} aria-hidden />

      {/* Nav */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.5rem 3rem", position: "relative", zIndex: 10,
      }}>
        <span style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: "1.25rem", color: "#EBEBEA", letterSpacing: "-0.02em",
        }}>
          All<span style={{ color: "#FF4D2E" }}>ô</span>pixel
        </span>
        <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
          {["Work", "About", "Services"].map(l => (
            <a key={l} href="#" style={{
              fontFamily: "var(--font-body)", fontSize: "0.875rem",
              color: "rgba(235,235,234,0.5)", textDecoration: "none",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#EBEBEA")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(235,235,234,0.5)")}
            >{l}</a>
          ))}
          <a href="#" style={{
            fontFamily: "var(--font-body)", fontSize: "0.8rem", fontWeight: 600,
            background: "#FF4D2E", color: "#fff", padding: "0.6rem 1.4rem",
            borderRadius: 9999, textDecoration: "none",
            transition: "all 0.2s",
          }}>Let&apos;s Talk</a>
        </div>
      </nav>

      {/* Main content */}
      <div style={{
        flex: 1, display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "0 3rem 4rem", position: "relative", zIndex: 10,
        maxWidth: 1280, width: "100%", margin: "0 auto",
      }}>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}
        >
          <span style={{ height: 1, width: 32, background: "#FF4D2E", display: "block" }} />
          <span style={{
            fontFamily: "var(--font-body)", fontSize: "0.7rem", fontWeight: 600,
            textTransform: "uppercase", letterSpacing: "0.2em",
            color: "rgba(235,235,234,0.4)",
          }}>Boutique Creative Studio · Montréal</span>
        </motion.div>

        {/* Headline */}
        <div style={{ overflow: "hidden" }}>
          {[
            { text: "We make", color: "#EBEBEA" },
            { text: "small businesses", color: "#EBEBEA" },
            { text: "look unforgettable.", color: "#D4FF3A" },
          ].map(({ text, color }, i) => (
            <div key={i} style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.2 + i * 0.12, ease }}
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(3rem, 8vw, 8.5rem)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.03em",
                  color,
                  margin: 0,
                  display: "block",
                }}
              >
                {text}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Sub + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          style={{ marginTop: "2.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1.5rem" }}
        >
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1.1rem",
            color: "rgba(235,235,234,0.55)", maxWidth: 420, lineHeight: 1.6,
            margin: 0, flex: "1 1 auto",
          }}>
            Brand identity, web design, and creative direction —<br />
            <span style={{ color: "#EBEBEA" }}>without the agency price tag.</span>
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#" style={{
              fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.9rem",
              background: "#FF4D2E", color: "#fff",
              padding: "0.9rem 2rem", borderRadius: 9999,
              textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem",
              transition: "all 0.25s",
            }}>
              See our work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#" style={{
              fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "0.9rem",
              border: "1px solid rgba(235,235,234,0.2)", color: "#EBEBEA",
              padding: "0.9rem 2rem", borderRadius: 9999,
              textDecoration: "none",
              transition: "all 0.25s",
            }}>
              Get a free quote
            </a>
          </div>
        </motion.div>

        {/* Bottom stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          style={{
            marginTop: "5rem",
            display: "flex", gap: "3rem", flexWrap: "wrap",
            borderTop: "1px solid rgba(235,235,234,0.08)",
            paddingTop: "2rem",
          }}
        >
          {[
            { num: "100+", label: "Projects delivered" },
            { num: "5★", label: "Average rating" },
            { num: "48hr", label: "First draft turnaround" },
            { num: "Free", label: "Discovery call" },
          ].map(({ num, label }) => (
            <div key={label}>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "1.75rem", color: "#FF4D2E", letterSpacing: "-0.02em",
              }}>{num}</div>
              <div style={{
                fontFamily: "var(--font-body)", fontSize: "0.75rem",
                color: "rgba(235,235,234,0.35)", marginTop: "0.25rem",
                textTransform: "uppercase", letterSpacing: "0.1em",
              }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Rotating badge */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute", right: "4rem", top: "50%",
          transform: "translateY(-50%)",
          width: 140, height: 140,
          zIndex: 5,
        }}
        aria-hidden
      >
        <svg viewBox="0 0 140 140" style={{ width: "100%", height: "100%" }}>
          <defs>
            <path id="badge-circle"
              d="M 70,70 m -52,0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0"
            />
          </defs>
          <text style={{ fill: "rgba(235,235,234,0.25)", fontSize: 10.5, fontFamily: "var(--font-body)", fontWeight: 500, letterSpacing: 3 }}>
            <textPath href="#badge-circle">· ALLÔPIXEL · MONTRÉAL · DESIGN & WEB ·</textPath>
          </text>
          <circle cx="70" cy="70" r="18" fill="none" stroke="rgba(255,77,46,0.2)" strokeWidth="1" />
          <text x="70" y="74" textAnchor="middle" style={{ fill: "#FF4D2E", fontSize: 12, fontFamily: "var(--font-display)", fontWeight: 700 }}>ô</text>
        </svg>
      </motion.div>
    </section>
  );
}
