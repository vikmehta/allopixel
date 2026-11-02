import type { MetadataRoute } from "next";
import { caseStudyProjects } from "@/lib/projects";
import { languageAlternates } from "@/lib/locale";
import { lastmod, caseStudyLastmod, defaultLastmod } from "@/lib/lastmod";

type Entry = { path: string; lastModified: string; changeFrequency: "monthly" | "yearly"; priority: number };

const entries: Entry[] = [
  { path: "/",         lastModified: lastmod["/"], changeFrequency: "monthly", priority: 1 },
  { path: "/services", lastModified: lastmod["/services"], changeFrequency: "monthly", priority: 0.9 },
  { path: "/work",     lastModified: lastmod["/work"], changeFrequency: "monthly", priority: 0.8 },
  { path: "/about",    lastModified: lastmod["/about"], changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact",  lastModified: lastmod["/contact"], changeFrequency: "yearly",  priority: 0.7 },
  { path: "/privacy",  lastModified: lastmod["/privacy"], changeFrequency: "yearly",  priority: 0.3 },
  ...caseStudyProjects.map(p => ({ path: `/work/${p.slug}`, lastModified: caseStudyLastmod[p.slug] ?? defaultLastmod, changeFrequency: "yearly" as const, priority: 0.6 })),
];

// One entry per language version of each page, each pointing at the other with hreflang.
export default function sitemap(): MetadataRoute.Sitemap {
  return entries.flatMap(({ path, lastModified, changeFrequency, priority }) =>
    (["en", "fr"] as const).map(lang => {
      const alt = languageAlternates(lang, path);
      return {
        url: alt.canonical,
        lastModified: new Date(lastModified),
        changeFrequency,
        priority,
        alternates: { languages: { "en-CA": alt.languages["en-CA"], "fr-CA": alt.languages["fr-CA"] } },
      };
    })
  );
}
