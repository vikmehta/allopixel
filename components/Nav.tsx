"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, toggle, tr } = useLanguage();
  const onDark = pathname === "/contact" && !scrolled;

  const links = [
    { href: "/", label: tr.nav.home },
    { href: "/work", label: tr.nav.work },
    { href: "/about", label: tr.nav.about },
    { href: "/services", label: tr.nav.services },
  ];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] btn btn-primary">
        {tr.nav.skipToContent}
      </a>

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-chalk/92 backdrop-blur-md border-b border-black/6" : "bg-transparent"
      }`}>
        <nav className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16 h-16 flex items-center justify-between">
          <Link href="/"
            className={`font-display font-bold text-xl tracking-display hover:text-coral transition-colors duration-200 ${onDark ? "text-chalk" : "text-ink"}`}
            aria-label="AllôPixel home"
          >
            All<span className="text-coral">ô</span>Pixel
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {links.map(({ href, label }) => (
              <Link key={href} href={href}
                className={`font-mono text-[0.7rem] uppercase tracking-[0.15em] transition-colors duration-200 ${
                  pathname === href ? "text-coral" : onDark ? "text-chalk/55 hover:text-chalk" : "text-ink/50 hover:text-ink"
                }`}
              >{label}</Link>
            ))}
            <Link href="/contact" className={`btn py-2 px-5 ${onDark ? "btn-primary" : "btn-ink"}`}>
              {tr.nav.cta}
            </Link>
            <button
              onClick={toggle}
              className={`font-mono text-[0.7rem] uppercase tracking-[0.15em] transition-colors duration-200 border px-2.5 py-1 ${
                onDark
                  ? "text-chalk/55 border-chalk/20 hover:text-chalk hover:border-chalk/40"
                  : "text-ink/40 border-black/15 hover:text-ink hover:border-black/30"
              }`}
              aria-label={lang === "en" ? "Passer en français" : "Switch to English"}
            >
              {lang === "en" ? "FR" : "EN"}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-[5px] w-8 h-8 justify-center"
            aria-label={open ? tr.nav.closeMenu : tr.nav.openMenu}
          >
            {[0, 1, 2].map(i => (
              <motion.span key={i}
                animate={
                  i === 0 ? (open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }) :
                  i === 1 ? (open ? { opacity: 0 } : { opacity: 1 }) :
                  (open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 })
                }
                transition={{ duration: 0.2 }}
                className={`block h-px w-full ${onDark ? "bg-chalk" : "bg-ink"}`}
              />
            ))}
          </button>
        </nav>
      </header>

      {/* Mobile menu — z-[60] sits above the z-50 header */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -12 }} animate={{ y: 0 }} exit={{ y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-chalk flex flex-col px-8 pt-24 pb-10"
          >
            {/* Close button at top-right */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-8 w-8 h-8 flex items-center justify-center text-ink/40 hover:text-ink transition-colors"
              aria-label={tr.nav.closeMenu}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            <div className="flex-1 flex flex-col justify-center gap-8">
              {links.map(({ href, label }, i) => (
                <motion.div key={href} initial={{ x: -16 }} animate={{ x: 0 }} transition={{ delay: i * 0.05, duration: 0.25, ease: [0.22, 1, 0.36, 1] }}>
                  <Link href={href} className="font-display font-bold text-5xl tracking-display text-ink hover:text-coral transition-colors">
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ x: -16 }} animate={{ x: 0 }} transition={{ delay: 0.2, duration: 0.25, ease: [0.22, 1, 0.36, 1] }} className="flex gap-4 items-center">
                <Link href="/contact" className="btn btn-ink mt-4">{tr.nav.cta}</Link>
                <button
                  onClick={() => { toggle(); setOpen(false); }}
                  className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-ink/40 border border-black/15 hover:text-ink hover:border-black/30 transition-colors px-2.5 py-1"
                  aria-label={lang === "en" ? "Passer en français" : "Switch to English"}
                >
                  {lang === "en" ? "FR" : "EN"}
                </button>
              </motion.div>
            </div>
            <p className="font-mono text-[0.85rem] text-ink/30 uppercase tracking-widest">
              info.allopixel@gmail.com · {tr.footer.location}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
