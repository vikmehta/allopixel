"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("https://formspree.io/f/mdawzbwr", {
        method: "POST", body: data, headers: { Accept: "application/json" },
      });
      if (res.ok) { setStatus("success"); (e.target as HTMLFormElement).reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
  }

  const inputClass = "w-full bg-transparent border-b border-white/15 focus:border-white pb-3 pt-1 font-body text-base text-white placeholder:text-white/25 outline-none transition-colors duration-200";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className="font-mono text-[0.6rem] uppercase tracking-widest text-coral block mb-3">Name</label>
          <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="font-mono text-[0.6rem] uppercase tracking-widest text-coral block mb-3">Email</label>
          <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="project-type" className="font-mono text-[0.6rem] uppercase tracking-widest text-coral block mb-3">Project type</label>
        <select id="project-type" name="project_type" className={`${inputClass} cursor-pointer`}
          style={{ background: "transparent", color: "rgba(250,250,248,0.7)" }}>
          <option value="" style={{ background: "#111" }}>Select a service…</option>
          {["Brand Identity","Web Design & Development","Logo Design","Social Media Design","Print & Collateral","Full Package (Brand + Web)","Other / Not sure yet"]
            .map(o => <option key={o} value={o} style={{ background: "#111" }}>{o}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="budget" className="font-mono text-[0.6rem] uppercase tracking-widest text-coral block mb-3">Budget range</label>
        <select id="budget" name="budget" className={`${inputClass} cursor-pointer`}
          style={{ background: "transparent", color: "rgba(250,250,248,0.7)" }}>
          <option value="" style={{ background: "#111" }}>Select a range…</option>
          {["Under $300","$300 – $800","$800 – $1,500","$1,500 – $3,000","$3,000+","Not sure yet"]
            .map(o => <option key={o} value={o} style={{ background: "#111" }}>{o}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="font-mono text-[0.6rem] uppercase tracking-widest text-coral block mb-3">Tell us about your project</label>
        <textarea id="message" name="message" required rows={4}
          placeholder="What do you need? What's your business? Any references or deadlines?"
          className={`${inputClass} resize-none`} />
      </div>

      {status === "success" ? (
        <div className="border border-white/10 p-6 text-center">
          <p className="font-display font-bold text-xl text-white tracking-display">Message sent.</p>
          <p className="font-body text-sm text-white/40 mt-2">We&apos;ll be in touch within 24 hours.</p>
        </div>
      ) : (
        <button type="submit" disabled={status === "sending"}
          className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
          {status === "sending" ? (
            <><span className="w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin" />Sending…</>
          ) : "Send message"}
        </button>
      )}

      {status === "error" && (
        <p className="font-body text-sm text-coral/80">
          Something went wrong. Email us at{" "}
          <a href="mailto:hello@allopixel.com" className="underline">hello@allopixel.com</a>
        </p>
      )}
    </form>
  );
}
