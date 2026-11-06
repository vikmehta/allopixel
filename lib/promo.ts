import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { Lang } from "@/lib/i18n";

export const PROMO_CODE = "HIVE15";
export const PROMO_PERCENT = 15;
const PROMO_STORAGE_KEY = "active-promo";
const PROMO_EVENT = "promo-activated";

/** Save the promo so the pricing cards and contact form pick it up on any page. */
export function activatePromo() {
  try { localStorage.setItem(PROMO_STORAGE_KEY, "1"); } catch {}
  window.dispatchEvent(new Event(PROMO_EVENT));
}

/** True once the visitor has arrived with ?promo=HIVE15 (remembered across pages). Re-checks on every route change. */
export function usePromoActive() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("promo");
    if (fromUrl && fromUrl.toUpperCase() === PROMO_CODE) {
      activatePromo();
      setActive(true);
    } else {
      try { setActive(localStorage.getItem(PROMO_STORAGE_KEY) === "1"); } catch {}
    }
    const on = () => setActive(true);
    window.addEventListener(PROMO_EVENT, on);
    return () => window.removeEventListener(PROMO_EVENT, on);
  }, [pathname]);

  return active;
}

/** "$1,500" / "1 500 $" → discounted price in the same style. */
export function promoPrice(price: string, lang: Lang): string {
  const n = Math.round(parseInt(price.replace(/\D/g, ""), 10) * (1 - PROMO_PERCENT / 100));
  const digits = String(n).replace(/\B(?=(\d{3})+(?!\d))/g, lang === "fr" ? " " : ",");
  return lang === "fr" ? `${digits} $` : `$${digits}`;
}
