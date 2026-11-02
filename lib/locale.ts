import type { Lang } from "@/lib/i18n";

export const locales: Lang[] = ["en", "fr"];
export const defaultLocale: Lang = "en";
export const siteUrl = "https://allopixel.com";

export const hasLocale = (v: string): v is Lang => (locales as string[]).includes(v);

/** English keeps the original URLs (/about); French lives under /fr (/fr/about). */
export function localePath(lang: Lang, path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  if (lang === defaultLocale) return path;
  return path === "/" ? "/fr" : `/fr${path}`;
}

/** Page path without a language prefix. The server may report the internal /en/... form, so strip both. */
export function stripLocale(pathname: string): string {
  return pathname.replace(/^\/(fr|en)(?=\/|$)/, "") || "/";
}

/** The same page in the other language, from the URL the visitor is on. */
export function otherLangPath(lang: Lang, pathname: string): string {
  const page = stripLocale(pathname);
  return lang === "fr" ? page : localePath("fr", page);
}

/** hreflang + canonical for a page. `path` is the English path, e.g. "/about". */
export function languageAlternates(lang: Lang, path: string) {
  const url = (l: Lang) => `${siteUrl}${localePath(l, path) === "/" ? "" : localePath(l, path)}`;
  return {
    canonical: url(lang),
    languages: { "en-CA": url("en"), "fr-CA": url("fr"), "x-default": url("en") },
  };
}
