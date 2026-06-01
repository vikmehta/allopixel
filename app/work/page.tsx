import type { Metadata } from "next";
import PortfolioGrid from "@/components/PortfolioGrid";
import CTAStrip from "@/components/CTAStrip";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects by Allôpixel — brand identities, websites, and creative direction for small businesses, artists, and individuals.",
};

export default function WorkPage() {
  return (
    <>
      <section className="pt-36 pb-16 bg-chalk">
        <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
          <span className="section-label block mb-5">Portfolio</span>
          <h1 className="font-display font-bold tracking-display leading-[0.92] text-ink"
            style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)" }}>
            Work that speaks<br />for itself.
          </h1>
          <p className="font-body text-lg text-ink/50 leading-relaxed mt-6 max-w-lg">
            Every project here was designed to help a brand show up clearly,
            consistently, and memorably.
          </p>
        </div>
      </section>

      <section className="pb-24 bg-chalk">
        <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
          <PortfolioGrid />
        </div>
      </section>

      <CTAStrip
        heading="Like what you see?"
        sub="Let's make something great together."
        btnLabel="Start a project"
      />
    </>
  );
}
