import type { Metadata } from "next";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTAStrip from "@/components/CTAStrip";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: "Transparent pricing for brand identity, web design, logo design, social media, and print. No hidden fees — just honest creative work.",
};

const services = [
  { title: "Brand Identity", desc: "Your brand is more than a logo. We build complete visual systems — logo, color palette, typography, iconography, and brand guidelines — that work together to create a consistent, memorable impression.", deliverables: ["Logo suite (primary, secondary, icon)", "Color system", "Typography pairing & usage guide", "Brand guidelines document", "Files: PNG, SVG, PDF, AI"] },
  { title: "Web Design & Development", desc: "We design and build fast, responsive websites from scratch. No page-builder templates — every site is crafted with real code, built to look great on every screen and help your business grow.", deliverables: ["Custom design (desktop + mobile)", "Up to 5 pages", "Contact form integration", "Basic SEO setup", "Performance optimization"] },
  { title: "Logo Design", desc: "A focused logo project for businesses that want a strong visual anchor. Two original concepts, multiple revision rounds, delivered in every format you'll ever need.", deliverables: ["2 original logo concepts", "Up to 3 revision rounds", "Full-color, reversed, and single-color versions", "Web & print-ready files"] },
  { title: "Social Media Design", desc: "Consistent, scroll-stopping templates that make maintaining a polished presence effortless. Delivered in formats you can edit yourself.", deliverables: ["Feed post templates", "Story templates", "Highlight cover icons", "Editable files (Canva or Figma)"] },
  { title: "Print & Collateral", desc: "Business cards, brochures, menus, signage — any printed material your brand needs to show up professionally in the physical world.", deliverables: ["Custom design to your specs", "Print-ready files (CMYK, bleed + crop marks)", "Multiple format versions as needed"] },
  { title: "Creative Direction", desc: "Strategic creative oversight for brands that need a coherent visual story across multiple channels. We act as your ongoing creative partner.", deliverables: ["Brand strategy session", "Visual direction document", "Ongoing review & feedback", "Flexible retainer or per-project"] },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-chalk">
        <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
          <span className="section-label block mb-5">Services</span>
          <h1 className="font-display font-bold tracking-display leading-[0.92] text-ink max-w-3xl"
            style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)" }}>
            Everything your brand needs.<br />Nothing you don&apos;t.
          </h1>
          <p className="font-body text-lg text-ink/50 leading-relaxed mt-6 max-w-xl">
            Transparent pricing on every service. No retainers, no hidden fees,
            no minimum commitments unless you want them.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="pb-20 bg-chalk">
        <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
          {services.map((s, i) => (
            <div key={s.title}>
              <div className="rule" />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-10">
                <div className="lg:col-span-2">
                  <h2 className="font-display font-semibold tracking-display text-2xl text-ink mb-3">{s.title}</h2>
                  <p className="font-body text-base text-ink/55 leading-relaxed">{s.desc}</p>
                </div>
                <div>
                  <p className="font-mono text-[0.6rem] uppercase tracking-widest text-coral mb-3">What&apos;s included</p>
                  <ul className="space-y-2">
                    {s.deliverables.map(d => (
                      <li key={d} className="flex items-start gap-2.5 font-body text-sm text-ink/55">
                        <span className="text-coral text-xs mt-0.5 shrink-0">✓</span>{d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {i === services.length - 1 && <div className="rule" />}
            </div>
          ))}
        </div>
      </section>

      <Pricing />
      <FAQ />
      <CTAStrip heading="Still have questions?" sub="Book a free call and we'll answer everything." btnLabel="Book a free call" />
    </>
  );
}
