"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PROMO_CODE } from "@/lib/promo";

const DISMISS_KEY = "inbloom-banner-dismissed";

export default function EventBanner() {
  const [dismissed, setDismissed] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();

  useEffect(() => {
    setDismissed(localStorage.getItem(DISMISS_KEY) === "1");
  }, []);

  useEffect(() => {
    function setHeight() {
      document.documentElement.style.setProperty(
        "--banner-h",
        dismissed ? "0px" : `${ref.current?.offsetHeight ?? 0}px`
      );
    }
    setHeight();
    window.addEventListener("resize", setHeight);
    return () => window.removeEventListener("resize", setHeight);
  }, [dismissed]);

  if (dismissed) return null;

  function dismiss() {
    localStorage.setItem(DISMISS_KEY, "1");
    setDismissed(true);
  }

  return (
    <div ref={ref} className="fixed top-0 left-0 right-0 z-[60] bg-coral text-ink">
      <Link
        href={`/contact?promo=${PROMO_CODE}`}
        className="absolute inset-0 hover:bg-ink/5 transition-colors"
        aria-label={lang === "fr" ? "Profiter de l'offre inBloom" : "Claim the inBloom offer"}
      />
      <div className="relative pointer-events-none max-w-5xl mx-auto px-4 py-4 flex items-center justify-center gap-4 text-center">
        <p className="font-body text-base sm:text-lg leading-snug">
          {lang === "fr" ? (
            <>👋 Ravis de vous avoir rencontré à inBloom ! Mentionnez le code <strong>{PROMO_CODE}</strong> pour 20&nbsp;% de rabais — <span className="underline underline-offset-2 font-medium whitespace-nowrap">nous contacter</span></>
          ) : (
            <>👋 Great meeting you at inBloom! Mention code <strong>{PROMO_CODE}</strong> for 20% off — <span className="underline underline-offset-2 font-medium whitespace-nowrap">get in touch</span></>
          )}
        </p>
        <button
          onClick={dismiss}
          aria-label={lang === "fr" ? "Fermer" : "Dismiss"}
          className="relative z-10 pointer-events-auto shrink-0 w-7 h-7 flex items-center justify-center rounded-full text-lg hover:bg-ink/10 transition-colors"
        >
          ×
        </button>
      </div>
    </div>
  );
}
