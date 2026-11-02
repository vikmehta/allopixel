"use client";

import { createContext, useContext, ReactNode } from "react";
import { usePathname } from "next/navigation";
import translations, { Lang, Translations } from "@/lib/i18n";
import { otherLangPath } from "@/lib/locale";

type LanguageContextType = {
  lang: Lang;
  /** URL of the current page in the other language. */
  altHref: string;
  tr: Translations;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  altHref: "/fr",
  tr: translations.en,
});

/** The language comes from the URL (/ = English, /fr = French), set by the server layout. */
export function LanguageProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  const pathname = usePathname() || "/";
  return (
    <LanguageContext.Provider value={{ lang, altHref: otherLangPath(lang, pathname), tr: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
