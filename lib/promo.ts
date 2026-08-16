import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const PROMO_CODE = "INBLOOM20";
const PROMO_STORAGE_KEY = "active-promo";

// Re-checks on every client-side route change (via the `pathname` dependency) so the
// code is captured the moment it's seen on ANY page — e.g. the banner only links to
// /contact, so something has to persist it there for /services to pick up later.
export function usePromoActive() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("promo");
    if (fromUrl && fromUrl.toUpperCase() === PROMO_CODE) {
      localStorage.setItem(PROMO_STORAGE_KEY, "1");
      setActive(true);
      return;
    }
    setActive(localStorage.getItem(PROMO_STORAGE_KEY) === "1");
  }, [pathname]);

  return active;
}
