"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const { tr } = useLanguage();
  const f = tr.contact.form;

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
          <label htmlFor="name" className="font-mono text-[0.85rem] uppercase tracking-widest text-coral block mb-3">{f.name}</label>
          <input id="name" name="name" type="text" required placeholder={f.namePlaceholder} className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="font-mono text-[0.85rem] uppercase tracking-widest text-coral block mb-3">{f.email}</label>
          <input id="email" name="email" type="email" required placeholder={f.emailPlaceholder} className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="project-type" className="font-mono text-[0.85rem] uppercase tracking-widest text-coral block mb-3">{f.projectType}</label>
        <select id="project-type" name="project_type" className={`${inputClass} cursor-pointer`}
          style={{ background: "transparent", color: "rgba(250,250,248,0.7)" }}>
          <option value="" style={{ background: "#111" }}>{f.projectPlaceholder}</option>
          {f.services.map(o => <option key={o} value={o} style={{ background: "#111" }}>{o}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="budget" className="font-mono text-[0.85rem] uppercase tracking-widest text-coral block mb-3">{f.budget}</label>
        <select id="budget" name="budget" className={`${inputClass} cursor-pointer`}
          style={{ background: "transparent", color: "rgba(250,250,248,0.7)" }}>
          <option value="" style={{ background: "#111" }}>{f.budgetPlaceholder}</option>
          {f.budgets.map(o => <option key={o} value={o} style={{ background: "#111" }}>{o}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="font-mono text-[0.85rem] uppercase tracking-widest text-coral block mb-3">{f.message}</label>
        <textarea id="message" name="message" required rows={4}
          placeholder={f.messagePlaceholder}
          className={`${inputClass} resize-none`} />
      </div>

      {status === "success" ? (
        <div className="border border-white/10 p-6 text-center">
          <p className="font-display font-bold text-xl text-white tracking-display">{f.successTitle}</p>
          <p className="font-body text-sm text-white/40 mt-2">{f.successSub}</p>
        </div>
      ) : (
        <button type="submit" disabled={status === "sending"}
          className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
          {status === "sending" ? (
            <><span className="w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin" />{f.sending}</>
          ) : f.submit}
        </button>
      )}

      {status === "error" && (
        <p className="font-body text-sm text-coral/80">
          {f.errorMsg}{" "}
          <a href="mailto:info.allopixel@gmail.com" className="underline">info.allopixel@gmail.com</a>
        </p>
      )}
    </form>
  );
}
