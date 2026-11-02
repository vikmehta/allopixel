/**
 * Real "last updated" dates for the sitemap (YYYY-MM-DD).
 * Update a page's date when its content meaningfully changes. Using the build time instead
 * would tell Google every page changes on every deploy, which makes it ignore the dates.
 */
export const lastmod = {
  "/": "2026-11-02",
  "/services": "2026-11-02",
  "/work": "2026-11-02",
  "/about": "2026-11-02",
  "/contact": "2026-11-02",
  "/privacy": "2026-11-02",
} as const;

/** Case studies: date each one was last edited (falls back to the date below). */
export const caseStudyLastmod: Record<string, string> = {
  "harmonia-therapy-center": "2026-10-24",
};
export const defaultLastmod = "2026-11-02";
