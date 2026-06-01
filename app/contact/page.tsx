import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Allôpixel. Book a free discovery call or send us a message — we respond within 24 hours.",
};

const nextSteps = [
  { num: "01", title: "We read your message", desc: "Every inquiry is reviewed personally. We respond within 24 hours." },
  { num: "02", title: "We schedule a call", desc: "A free 30-minute discovery call to make sure we're the right fit." },
  { num: "03", title: "You get a proposal", desc: "A clear proposal — scope, timeline, and price — before any work begins." },
];

export default function ContactPage() {
  return (
    <section className="bg-ink grain min-h-screen">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16 py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — info */}
          <div>
            <span className="section-label block mb-6">Get in touch</span>
            <h1 className="font-display font-bold tracking-display leading-[0.92] text-chalk mb-8"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
              Let&apos;s build something great.
            </h1>
            <p className="font-body text-lg text-chalk/45 leading-relaxed mb-12">
              Tell us about your project. We&apos;ll be in touch within 24 hours.
            </p>

            {/* What happens next */}
            <div className="mb-12">
              <p className="font-mono text-[0.6rem] uppercase tracking-widest text-chalk/30 mb-6">What happens next</p>
              <div className="space-y-6">
                {nextSteps.map(step => (
                  <div key={step.num} className="flex gap-5">
                    <span className="font-mono text-[0.65rem] text-coral uppercase tracking-wider mt-0.5 shrink-0">{step.num}</span>
                    <div>
                      <p className="font-body text-sm font-medium text-chalk/80">{step.title}</p>
                      <p className="font-body text-sm text-chalk/35 mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact details */}
            <div className="border-t border-white/8 pt-8 space-y-4">
              <div>
                <p className="font-mono text-[0.6rem] uppercase tracking-widest text-chalk/30 mb-1.5">Email</p>
                <a href="mailto:hello@allopixel.com" className="font-body text-sm text-chalk/55 hover:text-coral transition-colors">
                  hello@allopixel.com
                </a>
              </div>
              <div>
                <p className="font-mono text-[0.6rem] uppercase tracking-widest text-chalk/30 mb-1.5">Location</p>
                <p className="font-body text-sm text-chalk/55">Montréal, Canada · Working globally</p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:pt-24">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
