import type { Metadata } from "next";
import type { Lang } from "@/lib/i18n";
import { languageAlternates, siteUrl } from "@/lib/locale";

export type PageKey = "home" | "services" | "work" | "about" | "contact" | "privacy";

export const pagePath: Record<PageKey, string> = {
  home: "/", services: "/services", work: "/work", about: "/about", contact: "/contact", privacy: "/privacy",
};

const pages: Record<PageKey, Record<Lang, { title: string; description: string }>> = {
  home: {
    en: {
      title: "AllôPixel — Affordable Brand & Web Design for Small Businesses",
      description: "Boutique creative studio in Montréal. Brand identity, web design, and creative direction for small businesses — without the agency price tag.",
    },
    fr: {
      title: "AllôPixel — Image de marque et sites web abordables pour petites entreprises",
      description: "Studio créatif boutique à Montréal. Identité de marque, conception web et direction créative pour les petites entreprises — sans le prix d'une agence.",
    },
  },
  services: {
    en: {
      title: "Services & Pricing",
      description: "Transparent pricing for brand identity, web design, social media, and print. No hidden fees — just honest creative work.",
    },
    fr: {
      title: "Services et tarifs",
      description: "Tarifs transparents pour l'identité de marque, la conception web, les médias sociaux et l'impression. Aucun frais caché — simplement du travail créatif honnête.",
    },
  },
  work: {
    en: {
      title: "Work",
      description: "Selected projects by AllôPixel — brand identities, websites, and creative direction for small businesses, artists, and individuals.",
    },
    fr: {
      title: "Réalisations",
      description: "Projets choisis par AllôPixel — identités de marque, sites web et direction créative pour petites entreprises, artistes et particuliers.",
    },
  },
  about: {
    en: {
      title: "About",
      description: "AllôPixel is a boutique creative studio in Montréal. We believe great design should be accessible to every small business.",
    },
    fr: {
      title: "À propos",
      description: "AllôPixel est un studio créatif boutique à Montréal. Nous croyons qu'un excellent design devrait être accessible à toutes les petites entreprises.",
    },
  },
  contact: {
    en: {
      title: "Contact",
      description: "Start a project with AllôPixel. Book a free discovery call or send us a message — we respond within 24 hours.",
    },
    fr: {
      title: "Contact",
      description: "Lancez un projet avec AllôPixel. Réservez un appel découverte gratuit ou écrivez-nous — nous répondons en 24 heures.",
    },
  },
  privacy: {
    en: {
      title: "Privacy Policy",
      description: "How AllôPixel collects, uses and protects the personal information you share through this website.",
    },
    fr: {
      title: "Politique de confidentialité",
      description: "Comment AllôPixel recueille, utilise et protège les renseignements personnels que vous partagez par l'entremise de ce site.",
    },
  },
};

export const ogLocale: Record<Lang, string> = { en: "en_CA", fr: "fr_CA" };

/** Share images live in /public/og (not as app/ metadata files, which break on Vercel inside [lang]). */
const ogImages: Record<PageKey, { file: string; alt: Record<Lang, string> }> = {
  home: {
    file: "home",
    alt: {
      en: "AllôPixel — boutique creative studio: brand and web design for small businesses",
      fr: "AllôPixel — studio créatif boutique : image de marque et conception web pour petites entreprises",
    },
  },
  services: {
    file: "services",
    alt: {
      en: "AllôPixel — services and transparent pricing for brand, web and social media",
      fr: "AllôPixel — services et tarifs transparents pour l'image de marque, le web et les médias sociaux",
    },
  },
  work: {
    file: "work",
    alt: {
      en: "AllôPixel — our work: websites and brands for small businesses",
      fr: "AllôPixel — nos réalisations : sites web et marques pour petites entreprises",
    },
  },
  about: {
    file: "about",
    alt: {
      en: "AllôPixel — about us: a small team working directly with you",
      fr: "AllôPixel — à propos : une petite équipe qui travaille directement avec vous",
    },
  },
  contact: {
    file: "contact",
    alt: {
      en: "AllôPixel — get in touch: start with a free 30-minute call",
      fr: "AllôPixel — contactez-nous : commencez par un appel gratuit de 30 minutes",
    },
  },
  privacy: {
    file: "home",
    alt: {
      en: "AllôPixel — boutique creative studio: brand and web design for small businesses",
      fr: "AllôPixel — studio créatif boutique : image de marque et conception web pour petites entreprises",
    },
  },
};

export function ogImage(lang: Lang, key: PageKey) {
  const { file, alt } = ogImages[key];
  return { url: `/og/${file}${lang === "fr" ? "-fr" : ""}.png`, width: 1200, height: 630, alt: alt[lang] };
}

/** Title, description, canonical and hreflang alternates for a top-level page. */
export function pageMetadata(lang: Lang, key: PageKey): Metadata {
  const { title, description } = pages[key][lang];
  const alternates = languageAlternates(lang, pagePath[key]);
  return {
    title: key === "home" ? { absolute: title } : title,
    description,
    alternates,
    openGraph: { type: "website", url: alternates.canonical, siteName: "AllôPixel", locale: ogLocale[lang], images: [ogImage(lang, key)] },
    twitter: { card: "summary_large_image", images: [ogImage(lang, key).url] },
  };
}

export { siteUrl };
