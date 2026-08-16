import { useEffect, useState } from "react";

export const PROMO_CODE = "INBLOOM20";
const PROMO_STORAGE_KEY = "active-promo";

export function usePromoActive() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("promo");
    if (fromUrl && fromUrl.toUpperCase() === PROMO_CODE) {
      localStorage.setItem(PROMO_STORAGE_KEY, "1");
      setActive(true);
      return;
    }
    setActive(localStorage.getItem(PROMO_STORAGE_KEY) === "1");
  }, []);

  return active;
}
