import Link from "next/link";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink grain text-chalk/60">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16 py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/8">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-display font-bold text-2xl tracking-display text-chalk hover:text-coral transition-colors">
              All<span className="text-coral">ô</span>pixel
            </Link>
            <p className="font-body text-sm text-chalk/40 leading-relaxed mt-3 max-w-xs">
              Affordable design for ambitious small businesses. Brand identity, web design, and creative direction — without the agency price tag.
            </p>
            <p className="font-mono text-[0.6rem] text-chalk/25 uppercase tracking-widest mt-5">Montréal, Canada</p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-mono text-[0.6rem] uppercase tracking-widest text-chalk/30 mb-5">Navigate</p>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="font-body text-sm text-chalk/50 hover:text-coral transition-colors duration-200">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[0.6rem] uppercase tracking-widest text-chalk/30 mb-5">Say hello</p>
            <a href="mailto:hello@allopixel.com" className="font-body text-sm text-chalk/50 hover:text-coral transition-colors block mb-3">
              hello@allopixel.com
            </a>
            <Link href="/contact" className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-coral hover:text-warm transition-colors block">
              Book a free call →
            </Link>
            <div className="flex gap-3 mt-6">
              {["Instagram", "LinkedIn"].map((s) => (
                <a key={s} href="#" aria-label={s}
                  className="font-mono text-[0.6rem] uppercase tracking-wider text-chalk/25 hover:text-coral transition-colors border border-white/8 hover:border-coral/40 px-3 py-2 rounded-sm">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-mono text-[0.6rem] text-chalk/25 uppercase tracking-widest">
            © 2026 All<span className="text-coral/50">ô</span>pixel. All rights reserved.
          </p>
          <p className="font-mono text-[0.6rem] text-chalk/15 uppercase tracking-widest">Crafted with care in Montréal</p>
        </div>
      </div>
    </footer>
  );
}
