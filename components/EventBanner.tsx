"use client";

import Link from "@/components/LocaleLink";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PROMO_CODE, PROMO_PERCENT, usePromoActive } from "@/lib/promo";

const DISMISS_KEY = "hive-banner-dismissed";

export default function EventBanner() {
  const [dismissed, setDismissed] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();

  // Runs on every page (even while the banner is dismissed) so ?promo=HIVE15 is captured wherever the visitor lands.
  const applied = usePromoActive();

  useEffect(() => {
    try { setDismissed(localStorage.getItem(DISMISS_KEY) === "1"); } catch { setDismissed(false); }
  }, []);

  useEffect(() => {
    function setHeight() {
      document.documentElement.style.setProperty("--banner-h", dismissed ? "0px" : `${ref.current?.offsetHeight ?? 0}px`);
    }
    setHeight();
    window.addEventListener("resize", setHeight);
    return () => window.removeEventListener("resize", setHeight);
  }, [dismissed]);

  if (dismissed) return null;

  function dismiss() {
    try { localStorage.setItem(DISMISS_KEY, "1"); } catch {}
    setDismissed(true);
  }

  return (
    <div ref={ref} className="fixed top-0 left-0 right-0 z-[60] bg-coral text-ink">
      <Link
        href={`/contact?promo=${PROMO_CODE}`}
        className="absolute inset-0 hover:bg-ink/5 transition-colors"
        aria-label={lang === "fr" ? "Profiter de l'offre MTLHive" : "Claim the MTLHive offer"}
      />
      <div className="relative pointer-events-none max-w-5xl mx-auto px-4 py-3 flex items-center justify-center gap-4 text-center">
        <p className="font-body text-base sm:text-lg leading-snug">
          {applied ? (
            lang === "fr" ? (
              <>✓ Code <strong>{PROMO_CODE}</strong> appliqué : {PROMO_PERCENT}&nbsp;% de rabais sur votre projet — <span className="underline underline-offset-2 font-medium whitespace-nowrap">demander une soumission</span></>
            ) : (
              <>✓ Code <strong>{PROMO_CODE}</strong> applied: {PROMO_PERCENT}% off your project — <span className="underline underline-offset-2 font-medium whitespace-nowrap">get a quote</span></>
            )
          ) : lang === "fr" ? (
            <>🐝 Bienvenue, MTLHive ! Code <strong>{PROMO_CODE}</strong> = {PROMO_PERCENT}&nbsp;% de rabais — <span className="underline underline-offset-2 font-medium whitespace-nowrap">réclamer l&apos;offre</span></>
          ) : (
            <>🐝 Welcome, MTLHive! Code <strong>{PROMO_CODE}</strong> = {PROMO_PERCENT}% off — <span className="underline underline-offset-2 font-medium whitespace-nowrap">claim your offer</span></>
          )}
        </p>
        <button onClick={dismiss} aria-label={lang === "fr" ? "Fermer" : "Dismiss"}
          className="relative z-10 pointer-events-auto shrink-0 w-7 h-7 flex items-center justify-center rounded-full text-lg hover:bg-ink/10 transition-colors">
          ×
        </button>
      </div>
    </div>
  );
}
