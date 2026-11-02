import type { MetadataRoute } from "next";
import { caseStudyProjects } from "@/lib/projects";
import { languageAlternates } from "@/lib/locale";

type Entry = { path: string; changeFrequency: "monthly" | "yearly"; priority: number };

const entries: Entry[] = [
  { path: "/",         changeFrequency: "monthly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/work",     changeFrequency: "monthly", priority: 0.8 },
  { path: "/about",    changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact",  changeFrequency: "yearly",  priority: 0.7 },
  { path: "/privacy",  changeFrequency: "yearly",  priority: 0.3 },
  ...caseStudyProjects.map(p => ({ path: `/work/${p.slug}`, changeFrequency: "yearly" as const, priority: 0.6 })),
];

// One entry per language version of each page, each pointing at the other with hreflang.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return entries.flatMap(({ path, changeFrequency, priority }) =>
    (["en", "fr"] as const).map(lang => {
      const alt = languageAlternates(lang, path);
      return {
        url: alt.canonical,
        lastModified: now,
        changeFrequency,
        priority,
        alternates: { languages: { "en-CA": alt.languages["en-CA"], "fr-CA": alt.languages["fr-CA"] } },
      };
    })
  );
}
