import type { MetadataRoute } from "next";
import { caseStudyProjects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://allopixel.com";
  const now = new Date();

  return [
    { url: base,                    lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/services`,      lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/work`,          lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`,         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`,       lastModified: now, changeFrequency: "yearly",  priority: 0.7 },
    ...caseStudyProjects.map(p => ({
      url: `${base}/work/${p.slug}`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.6,
    })),
  ];
}
