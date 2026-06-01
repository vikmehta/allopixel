import type { Metadata } from "next";
import Process from "@/components/Process";
import CTAStrip from "@/components/CTAStrip";

export const metadata: Metadata = {
  title: "About",
  description: "Allôpixel is a boutique creative studio in Montréal. We believe great design should be accessible to every small business.",
};

const values = [
  { title: "Honesty First", desc: "We tell you what your brand actually needs — not just what you want to hear. Straight talk and clear pricing, every time." },
  { title: "Affordable Always", desc: "Great design shouldn't be a luxury. We keep our prices honest so any business, at any stage, can access work that makes a real difference." },
  { title: "No Jargon Ever", desc: "We speak plainly. No design-speak, no confusing briefs. You'll always know exactly where your project stands and what comes next." },
  { title: "Quality Without Compromise", desc: "Affordable doesn't mean generic. Every project gets original thinking, meticulous craft, and a commitment to work we're genuinely proud of." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-chalk">
        <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
          <span className="section-label block mb-5">Our story</span>
          <h1 className="font-display font-bold tracking-display leading-[0.92] text-ink max-w-4xl"
            style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)" }}>
            We believe great design changes businesses.
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-chalk">
        <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-5">
              <p className="font-body text-lg text-ink/70 leading-relaxed">
                Allôpixel was built on a simple belief: every small business, artist, and
                individual deserves design that&apos;s thoughtful, beautiful, and actually affordable.
              </p>
              <p className="font-body text-base text-ink/50 leading-relaxed">
                The design industry has a gatekeeping problem. Great branding and web design
                have long been the territory of companies with big budgets — leaving small
                businesses with templated, forgettable results.
              </p>
              <p className="font-body text-base text-ink/50 leading-relaxed">
                We exist to change that. Based in Montréal and working with clients across
                Canada and beyond, we deliver brand identities and websites that help
                businesses punch well above their weight.
              </p>
            </div>

            {/* Visual block */}
            <div className="relative border border-black/8 aspect-[4/3] flex items-center justify-center overflow-hidden"
              style={{ background: "var(--color-mint)" }}>
              <span className="font-display font-bold tracking-display text-ink/6 select-none pointer-events-none"
                style={{ fontSize: "clamp(8rem, 20vw, 16rem)", lineHeight: 1 }}
                aria-hidden>ô</span>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-display font-semibold text-xl text-ink/60 tracking-display">
                  &ldquo;Allô&rdquo; is French for hello.<br />Every project is a new introduction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-chalk">
        <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
          <span className="section-label block mb-5">What we stand for</span>
          <h2 className="font-display font-bold tracking-display leading-[0.92] text-ink mb-16"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}>
            Our values aren&apos;t decorative.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {values.map((v, i) => (
              <div key={v.title} className={`border-t border-black/10 pt-8 pb-8 ${i % 2 === 0 ? "sm:pr-12" : "sm:pl-12 sm:border-l sm:border-black/10"}`}>
                <h3 className="font-display font-semibold tracking-display text-xl text-ink mb-3">{v.title}</h3>
                <p className="font-body text-sm text-ink/55 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <CTAStrip heading="Ready to work together?" sub="Start with a free discovery call — no commitment." btnLabel="Work with us" />
    </>
  );
}
