import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyContent from "@/components/case-study/CaseStudyContent";
import { caseStudyProjects, getProjectBySlug, hasCaseStudy } from "@/lib/projects";
import { hasLocale, languageAlternates, locales } from "@/lib/locale";
import { ogLocale } from "@/lib/seo";

const base = "https://allopixel.com";

export function generateStaticParams() {
  return locales.flatMap(lang => caseStudyProjects.map(p => ({ lang, slug: p.slug })));
}

// Slugs not returned by generateStaticParams 404 instead of rendering on demand.
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/[lang]/work/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  const project = getProjectBySlug(slug);
  if (!project || !hasCaseStudy(project)) return {};

  const { caseStudy: c } = project;
  const alternates = languageAlternates(lang, `/work/${project.slug}`);
  const url = alternates.canonical;
  const title = lang === "fr" ? `${project.name} — Étude de cas` : `${project.name} — Case study`;
  const description = lang === "fr"
    ? `${c.tagline.fr} Une étude de cas d'AllôPixel : ${c.services.map(s => s.fr.toLowerCase()).join(", ")}.`
    : `${c.tagline.en} A case study from AllôPixel: ${c.services.map(s => s.en.toLowerCase()).join(", ")}.`;

  return {
    title,
    description,
    alternates,
    openGraph: { type: "article", url, title, description, siteName: "AllôPixel", locale: ogLocale[lang], images: [{ url: `${base}${c.cover.src}`, alt: c.cover.alt[lang] }] },
    twitter: { card: "summary_large_image", images: [`${base}${c.cover.src}`] },
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/[lang]/work/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const project = getProjectBySlug(slug);
  if (!project || !hasCaseStudy(project)) notFound();

  const others = caseStudyProjects.filter(p => p.slug !== project.slug);
  const next = others.length ? { slug: others[0].slug, name: others[0].name } : undefined;
  const pageUrl = languageAlternates(lang, `/work/${project.slug}`).canonical;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "CreativeWork",
        name: lang === "fr" ? `${project.name} — Étude de cas` : `${project.name} — Case study`,
        headline: project.caseStudy.tagline[lang],
        description: project.caseStudy.challenge[lang],
        url: pageUrl,
        inLanguage: lang === "fr" ? "fr-CA" : "en-CA",
        image: `${base}${project.caseStudy.cover.src}`,
        dateCreated: project.caseStudy.year ?? project.year,
        creator: { "@type": "Organization", name: "AllôPixel", url: base },
        about: project.url,
      })}} />
      <CaseStudyContent project={project} next={next} />
    </>
  );
}
