"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

/** Internal link to /work/[slug]. Sits above the card's stretched "Visit site" link. */
export default function CaseStudyButton({ slug, name, className = "" }: { slug: string; name: string; className?: string }) {
  const { tr } = useLanguage();
  return (
    <Link href={`/work/${slug}`} className={`btn btn-primary relative z-10 ${className}`}>
      {tr.caseStudy.button}
      <span className="sr-only"> — {name}</span>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
        <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}
