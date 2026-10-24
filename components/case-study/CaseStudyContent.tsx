"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";
import type { CaseStudy, Project } from "@/lib/projects";
import CaseStudyHero from "./CaseStudyHero";
import ScrollPreview from "./ScrollPreview";
import PageShowcase from "./PageShowcase";
import FeatureChips from "./FeatureChips";
import OutcomeList from "./OutcomeList";
import CaseStudyCTA from "./CaseStudyCTA";

type Props = {
  project: Project & { caseStudy: CaseStudy };
  next?: Pick<Project, "slug" | "name">;
};

const h2Style = { fontSize: "clamp(1.8rem, 3.2vw, 3rem)" } as const;

function Block({ heading, children, tint = false }: { heading: string; children: React.ReactNode; tint?: boolean }) {
  return (
    <section className={`${tint ? "bg-cream" : "bg-chalk"} py-14 md:py-20 lg:py-28`}>
      <AnimatedSection className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-display font-bold tracking-display leading-[0.95] text-ink" style={h2Style}>{heading}</h2>
          </div>
          <div className="lg:col-span-8">{children}</div>
        </div>
      </AnimatedSection>
    </section>
  );
}

function Wide({ heading, note, children }: { heading: string; note?: string; children: React.ReactNode }) {
  return (
    <section className="bg-chalk py-14 md:py-20 lg:py-28">
      <AnimatedSection className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="mb-10 max-w-2xl">
          <h2 className="font-display font-bold tracking-display leading-[0.95] text-ink" style={h2Style}>{heading}</h2>
          {note && <p className="font-body text-lg text-ink/55 leading-relaxed mt-4">{note}</p>}
        </div>
        {children}
      </AnimatedSection>
    </section>
  );
}

export default function CaseStudyContent({ project, next }: Props) {
  const { tr, lang } = useLanguage();
  const cs = tr.caseStudy;
  const c = project.caseStudy;

  return (
    <>
      <CaseStudyHero project={project} />

      <Block heading={cs.brief}>
        <p className="font-body text-lg md:text-xl text-ink/70 leading-relaxed max-w-2xl">{c.challenge[lang]}</p>
      </Block>

      <Block heading={cs.approach} tint>
        <p className="font-body text-lg md:text-xl text-ink/70 leading-relaxed max-w-2xl">{c.approach[lang]}</p>
        {c.principles && c.principles.length > 0 && (
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-ink/10">
            {c.principles.map((pr, i) => (
              <li key={pr.title.en}>
                <span className="font-mono text-[0.8rem] text-coral tracking-[0.14em]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display font-semibold text-xl text-ink mt-2 mb-2">{pr.title[lang]}</h3>
                <p className="font-body text-base text-ink/60 leading-relaxed">{pr.text[lang]}</p>
              </li>
            ))}
          </ul>
        )}
      </Block>

      {c.pages && c.pages.length > 0 && (
        <Wide heading={cs.experience}>
          <PageShowcase pages={c.pages} />
        </Wide>
      )}

      <Block heading={cs.capabilities} tint={!(c.pages && c.pages.length > 0)}>
        <FeatureChips items={c.features} />
      </Block>

      {c.before && (
        <Wide heading={cs.evolution} note={cs.evolutionNote}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {[{ screen: c.before, label: cs.original, accent: false }, { screen: c.after, label: cs.current, accent: true }].map(({ screen, label, accent }) => (
              <figure key={label}>
                <ScrollPreview screen={screen} sizes="(max-width: 1024px) 100vw, 760px" />
                <figcaption className={`font-mono text-[0.8rem] uppercase tracking-[0.16em] mt-4 ${accent ? "text-coral" : "text-ink/45"}`}>{label}</figcaption>
              </figure>
            ))}
          </div>
        </Wide>
      )}

      {c.gallery && c.gallery.length > 0 && (
        <section className="bg-chalk pb-14 md:pb-20 lg:pb-28">
          <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-6" aria-label={cs.gallery}>
            {c.gallery.map(g => (
              <div key={g.src} className="relative aspect-[16/10] overflow-hidden border border-black/10">
                <Image src={g.src} alt={g.alt[lang]} fill sizes="(max-width: 768px) 100vw, 800px" className="object-cover object-top" />
              </div>
            ))}
          </div>
        </section>
      )}

      <Block heading={cs.outcome} tint>
        <OutcomeList outcomes={c.outcomes} quote={c.quote} metrics={c.metrics} />
      </Block>

      <CaseStudyCTA next={next} />
    </>
  );
}
