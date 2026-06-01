"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
        Skip to content
      </a>

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-chalk/92 backdrop-blur-md border-b border-black/6" : "bg-transparent"
      }`}>
        <nav className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16 h-16 flex items-center justify-between">
          <Link href="/"
            className="font-display font-bold text-xl tracking-display text-ink hover:text-coral transition-colors duration-200"
            aria-label="Allôpixel home"
          >
            All<span className="text-coral">ô</span>pixel
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {links.map(({ href, label }) => (
              <Link key={href} href={href}
                className={`font-mono text-[0.7rem] uppercase tracking-[0.15em] transition-colors duration-200 ${
                  pathname === href ? "text-coral" : "text-ink/50 hover:text-ink"
                }`}
              >{label}</Link>
            ))}
            <Link href="/contact" className="btn btn-ink py-2 px-5">Get in touch</Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-[5px] w-8 h-8 justify-center"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {[0, 1, 2].map(i => (
              <motion.span key={i}
                animate={
                  i === 0 ? (open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }) :
                  i === 1 ? (open ? { opacity: 0 } : { opacity: 1 }) :
                  (open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 })
                }
                transition={{ duration: 0.2 }}
                className="block h-px w-full bg-ink"
              />
            ))}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-40 bg-chalk flex flex-col px-8 pt-24 pb-10"
          >
            <div className="flex-1 flex flex-col justify-center gap-8">
              {links.map(({ href, label }, i) => (
                <motion.div key={href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                  <Link href={href} className="font-display font-bold text-5xl tracking-display text-ink hover:text-coral transition-colors">
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22 }}>
                <Link href="/contact" className="btn btn-ink mt-4">Get in touch</Link>
              </motion.div>
            </div>
            <p className="font-mono text-[0.65rem] text-ink/30 uppercase tracking-widest">
              hello@allopixel.com · Montréal, Canada
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
