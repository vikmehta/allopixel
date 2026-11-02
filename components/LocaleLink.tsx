"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { localePath } from "@/lib/locale";

/** next/link that keeps visitors in the current language (/fr/... on the French site). */
export default function LocaleLink({ href, ...props }: ComponentProps<typeof NextLink>) {
  const { lang } = useLanguage();
  const h = typeof href === "string" ? localePath(lang, href) : href;
  return <NextLink href={h} {...props} />;
}
