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
      title: "AllôPixel — Affordable Web Design, South Shore & Montérégie",
      description: "Small web design studio in Sainte-Martine serving the South Shore and Montérégie. Websites from $700, branding and online stores. Clear prices.",
    },
    fr: {
      title: "AllôPixel — Création de site web, Rive-Sud et Montérégie",
      description: "Studio web à Sainte-Martine, au service de la Rive-Sud et de la Montérégie. Sites web dès 700 $, image de marque, boutiques en ligne. Prix clairs.",
    },
  },
  services: {
    en: {
      title: "Web Design Services & Pricing — From $700",
      description: "Website packages from $700 to $5,000: landing page, business site, online store. Branding too. Based in Sainte-Martine, serving the South Shore.",
    },
    fr: {
      title: "Création de site web — tarifs dès 700 $",
      description: "Forfaits de site web de 700 $ à 5 000 $ : page d'atterrissage, site d'entreprise, boutique en ligne. Image de marque aussi. Sainte-Martine, Rive-Sud.",
    },
  },
  work: {
    en: {
      title: "Web Design Portfolio — Small Business Websites",
      description: "Websites and brands we've built for small businesses, clinics, shops and creatives. See our web design projects and what we did for each client.",
    },
    fr: {
      title: "Réalisations : sites web pour petites entreprises",
      description: "Sites web et identités de marque créés pour des petites entreprises, cliniques, boutiques et créatifs. Découvrez nos projets de création de site web.",
    },
  },
  about: {
    en: {
      title: "About Our Web Design Studio in Sainte-Martine",
      description: "AllôPixel is a small, owner-run web design and branding studio in Sainte-Martine, serving the South Shore and Montérégie. Meet the team and how we work.",
    },
    fr: {
      title: "À propos — studio web à Sainte-Martine",
      description: "AllôPixel, petit studio web et d'image de marque à Sainte-Martine, au service de la Rive-Sud et de la Montérégie. Découvrez l'équipe et notre approche.",
    },
  },
  contact: {
    en: {
      title: "Contact — Free Web Design Consultation",
      description: "Book a free 30-minute call about your website. Sainte-Martine studio serving Châteauguay, Beauharnois, Saint-Rémi and the South Shore. Reply in 24 h.",
    },
    fr: {
      title: "Contact — consultation gratuite en création web",
      description: "Appel gratuit de 30 minutes sur votre site web. Studio à Sainte-Martine au service de Châteauguay, Beauharnois, Saint-Rémi et de la Rive-Sud. Réponse en 24 h.",
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
