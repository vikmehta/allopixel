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
      description: "Website packages starting at $700: landing page, business site, online store. Free estimate. Based in Sainte-Martine, serving the South Shore.",
    },
    fr: {
      title: "Création de site web — tarifs dès 700 $",
      description: "Forfaits de site web dès 700 $ : page d'atterrissage, site d'entreprise, boutique en ligne. Estimation gratuite. Sainte-Martine, Rive-Sud.",
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

/** Keyword lists. Google ignores the keywords tag, but Bing and some directories still read it. Chosen from the keyword research (agence web, web design + place, prix, refonte, boutique en ligne). */
const keywords: Record<PageKey, Record<Lang, string[]>> = {
  home: {
    en: ["web design South Shore", "web design Montérégie", "web designer Châteauguay", "small business website", "affordable web design", "website design Sainte-Martine", "web design studio Quebec", "online store Shopify"],
    fr: ["création de site web Rive-Sud", "création de site web Montérégie", "studio web Sainte-Martine", "agence web Rive-Sud", "site web petite entreprise", "création de site web professionnel", "site web abordable", "boutique en ligne Shopify"],
  },
  services: {
    en: ["web design pricing", "website cost Quebec", "website packages", "landing page design", "small business website", "online store setup", "website redesign", "branding for small business"],
    fr: ["prix site web", "tarifs création de site web", "forfait site web", "page d'atterrissage", "site web petite entreprise", "boutique en ligne", "refonte de site web", "image de marque petite entreprise"],
  },
  work: {
    en: ["web design portfolio", "small business websites", "website examples", "web designer portfolio Quebec", "therapist website design", "Shopify store design"],
    fr: ["portfolio conception web", "réalisations sites web", "exemples de sites web", "site web pour thérapeute", "création de boutique en ligne", "studio web Québec"],
  },
  about: {
    en: ["web design studio Sainte-Martine", "web designer South Shore", "web design Montérégie", "small web design studio", "branding studio Quebec"],
    fr: ["studio web Sainte-Martine", "concepteur web Rive-Sud", "création de site web Montérégie", "petit studio web", "studio d'image de marque Québec"],
  },
  contact: {
    en: ["web designer Châteauguay", "web designer Beauharnois", "web designer Saint-Rémi", "free web design consultation", "website quote Quebec", "web design South Shore"],
    fr: ["création de site web Châteauguay", "création de site web Beauharnois", "création de site web Saint-Rémi", "consultation gratuite site web", "soumission site web", "concepteur web Rive-Sud"],
  },
  privacy: { en: [], fr: [] },
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
    ...(keywords[key][lang].length > 0 && { keywords: keywords[key][lang] }),
    alternates,
    openGraph: { type: "website", url: alternates.canonical, siteName: "AllôPixel", locale: ogLocale[lang], images: [ogImage(lang, key)] },
    twitter: { card: "summary_large_image", images: [ogImage(lang, key).url] },
  };
}

export { siteUrl };
