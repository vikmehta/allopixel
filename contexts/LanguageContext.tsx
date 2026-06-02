"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import translations, { Lang, Translations } from "@/lib/i18n";

type LanguageContextType = {
  lang: Lang;
  toggle: () => void;
  tr: Translations;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggle: () => {},
  tr: translations.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => setLang(l => l === "en" ? "fr" : "en");

  return (
    <LanguageContext.Provider value={{ lang, toggle, tr: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
