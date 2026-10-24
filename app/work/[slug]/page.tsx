import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyContent from "@/components/case-study/CaseStudyContent";
import { caseStudyProjects, getProjectBySlug, hasCaseStudy } from "@/lib/projects";

const base = "https://allopixel.com";

export function generateStaticParams() {
  return caseStudyProjects.map(p => ({ slug: p.slug }));
}

// Slugs not returned by generateStaticParams 404 instead of rendering on demand.
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project || !hasCaseStudy(project)) return {};

  const { caseStudy: c } = project;
  const url = `${base}/work/${project.slug}`;
  const title = `${project.name} — Case study`;
  const description = `${c.tagline.en} A case study from Allôpixel: ${c.services.map(s => s.en.toLowerCase()).join(", ")}.`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title, description, images: [{ url: `${base}${c.cover.src}`, alt: c.cover.alt.en }] },
    twitter: { card: "summary_large_image", images: [`${base}${c.cover.src}`] },
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project || !hasCaseStudy(project)) notFound();

  const others = caseStudyProjects.filter(p => p.slug !== project.slug);
  const next = others.length ? { slug: others[0].slug, name: others[0].name } : undefined;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "CreativeWork",
        name: `${project.name} — Case study`,
        headline: project.caseStudy.tagline.en,
        description: project.caseStudy.challenge.en,
        url: `${base}/work/${project.slug}`,
        image: `${base}${project.caseStudy.cover.src}`,
        dateCreated: project.caseStudy.year ?? project.year,
        creator: { "@type": "Organization", name: "Allôpixel", url: base },
        about: project.url,
      })}} />
      <CaseStudyContent project={project} next={next} />
    </>
  );
}
