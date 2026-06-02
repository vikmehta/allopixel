"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, toggle, tr } = useLanguage();
  const onDark = pathname === "/contact" && !scrolled;

  // Track previous pathname so we only close menu on real navigation,
  // not on the null→"/" transition that fires during hydration on mobile.
  const prevPathname = useRef(pathname);
  useEffect(() => {
    if (pathname && prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      setOpen(false);
    }
  }, [pathname]);

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

          {/* Mobile hamburger — touch-action:manipulation removes 300ms iOS delay */}
          <button
            onClick={() => setOpen(!open)}
            style={{ touchAction: "manipulation" }}
            className={`md:hidden flex flex-col justify-center gap-[5px] w-11 h-11 -mr-2 cursor-pointer ${onDark ? "" : ""}`}
            aria-label={open ? tr.nav.closeMenu : tr.nav.openMenu}
            aria-expanded={open}
          >
            <span className={`block h-[1.5px] w-6 transition-all duration-200 origin-center ${open ? "rotate-45 translate-y-[6.5px]" : ""} ${onDark ? "bg-chalk" : "bg-ink"}`} />
            <span className={`block h-[1.5px] w-6 transition-all duration-200 ${open ? "opacity-0" : "opacity-100"} ${onDark ? "bg-chalk" : "bg-ink"}`} />
            <span className={`block h-[1.5px] w-6 transition-all duration-200 origin-center ${open ? "-rotate-45 -translate-y-[6.5px]" : ""} ${onDark ? "bg-chalk" : "bg-ink"}`} />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay — no Framer Motion, conditional render only */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-chalk flex flex-col px-8 pt-20 pb-10"
          style={{ touchAction: "pan-y" }}
        >
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            style={{ touchAction: "manipulation" }}
            className="absolute top-4 right-6 w-11 h-11 flex items-center justify-center text-ink/50 hover:text-ink cursor-pointer"
            aria-label={tr.nav.closeMenu}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path d="M2 2l16 16M18 2L2 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          <div className="flex-1 flex flex-col justify-center gap-6">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-display font-bold text-5xl tracking-display text-ink hover:text-coral transition-colors"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="flex gap-4 items-center mt-4">
              <Link href="/contact" className="btn btn-ink" onClick={() => setOpen(false)}>
                {tr.nav.cta}
              </Link>
              <button
                onClick={() => { toggle(); setOpen(false); }}
                style={{ touchAction: "manipulation" }}
                className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-ink/40 border border-black/15 hover:text-ink hover:border-black/30 transition-colors px-2.5 py-2 cursor-pointer"
                aria-label={lang === "en" ? "Passer en français" : "Switch to English"}
              >
                {lang === "en" ? "FR" : "EN"}
              </button>
            </div>
          </div>

          <p className="font-mono text-[0.85rem] text-ink/30 uppercase tracking-widest">
            info.allopixel@gmail.com · {tr.footer.location}
          </p>
        </div>
      )}
    </>
  );
}
