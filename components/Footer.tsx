"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const navLinks = [
  { href: "/", key: "home" as const },
  { href: "/work", key: "work" as const },
  { href: "/about", key: "about" as const },
  { href: "/services", key: "services" as const },
  { href: "/contact", key: "cta" as const },
];

export default function Footer() {
  const { tr } = useLanguage();
  const f = tr.footer;

  return (
    <footer className="bg-ink grain text-chalk/60">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16 py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/8">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-display font-bold text-2xl tracking-display text-chalk hover:text-coral transition-colors">
              All<span className="text-coral">ô</span>Pixel
            </Link>
            <p className="font-body text-sm text-chalk/40 leading-relaxed mt-3 max-w-xs">{f.tagline}</p>
            <p className="font-mono text-[0.85rem] text-chalk/25 uppercase tracking-widest mt-5">{f.location}</p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-mono text-[0.85rem] uppercase tracking-widest text-chalk/30 mb-5">{f.navigate}</p>
            <ul className="space-y-3">
              {navLinks.map(({ href, key }) => (
                <li key={href}>
                  <Link href={href} className="font-body text-sm text-chalk/50 hover:text-coral transition-colors duration-200">
                    {tr.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[0.85rem] uppercase tracking-widest text-chalk/30 mb-5">{f.sayHello}</p>
            <a href="mailto:info.allopixel@gmail.com" className="font-body text-sm text-chalk/50 hover:text-coral transition-colors block mb-3">
              info.allopixel@gmail.com
            </a>
            <Link href="/contact" className="font-mono text-[0.85rem] uppercase tracking-[0.14em] text-coral hover:text-warm transition-colors block">
              {f.bookCall}
            </Link>
            <div className="flex gap-3 mt-6">
              <a href="https://www.instagram.com/allopixel/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="font-mono text-[0.85rem] uppercase tracking-wider text-chalk/25 hover:text-coral transition-colors border border-white/8 hover:border-coral/40 px-3 py-2 rounded-sm">
                Instagram
              </a>
              <a href="https://www.facebook.com/AlloPixel/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="font-mono text-[0.85rem] uppercase tracking-wider text-chalk/25 hover:text-coral transition-colors border border-white/8 hover:border-coral/40 px-3 py-2 rounded-sm">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-mono text-[0.85rem] text-chalk/25 uppercase tracking-widest">
            © {new Date().getFullYear()} All<span className="text-coral/50">ô</span>Pixel. {f.copyright}
          </p>
          <p className="font-mono text-[0.85rem] text-chalk/25 uppercase tracking-widest">
            {f.crafted} All<span className="text-coral/50">ô</span>Pixel
          </p>
        </div>
      </div>
    </footer>
  );
}
