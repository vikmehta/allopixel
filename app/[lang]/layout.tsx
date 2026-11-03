import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import "../globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { hasLocale, locales, siteUrl } from "@/lib/locale";
import { ogLocale, ogImage } from "@/lib/seo";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["300", "400", "500"],
});

export const viewport: Viewport = {
  themeColor: "#092724",
};

export function generateStaticParams() {
  return locales.map(lang => ({ lang }));
}

// Only /en (served as /) and /fr exist.
export const dynamicParams = false;

const siteCopy = {
  en: {
    description:
      "AllôPixel is a small web design and branding studio in Sainte-Martine, serving the South Shore and Montérégie. Websites from $700, brand identity and online stores for small businesses — without the agency price tag.",
    ogTitle: "AllôPixel — Affordable Web Design, South Shore & Montérégie",
    ogDescription: "Websites from $700, branding and online stores for small businesses in Sainte-Martine and the South Shore.",
    schemaDescription: "Small web design and branding studio in Sainte-Martine serving the South Shore and Montérégie: websites, online stores and brand identity for small businesses.",
  },
  fr: {
    description:
      "AllôPixel est un petit studio de conception web et d'image de marque à Sainte-Martine, au service de la Rive-Sud et de la Montérégie. Sites web dès 700 $, identité de marque et boutiques en ligne pour petites entreprises — sans le prix d'une agence.",
    ogTitle: "AllôPixel — Création de site web, Rive-Sud et Montérégie",
    ogDescription: "Sites web dès 700 $, image de marque et boutiques en ligne pour petites entreprises à Sainte-Martine et sur la Rive-Sud.",
    schemaDescription: "Petit studio web et d'image de marque à Sainte-Martine au service de la Rive-Sud et de la Montérégie : sites web, boutiques en ligne et identité de marque pour petites entreprises.",
  },
} as const;

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const c = siteCopy[lang];
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: lang === "fr"
        ? "AllôPixel — Création de site web, Rive-Sud et Montérégie"
        : "AllôPixel — Affordable Web Design, South Shore & Montérégie",
      template: "%s | AllôPixel",
    },
    description: c.description,
    openGraph: { type: "website", locale: ogLocale[lang], url: siteUrl, siteName: "AllôPixel", title: c.ogTitle, description: c.ogDescription, images: [ogImage(lang, "home")] },
    twitter: { card: "summary_large_image", images: [ogImage(lang, "home").url] },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return (
    <html lang={lang} suppressHydrationWarning data-scroll-behavior="smooth" className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "LocalBusiness",
          name: "AllôPixel", alternateName: ["Allopixel", "Allo Pixel", "Allô Pixel", "AlloPixel"], url: "https://allopixel.com", email: "info.allopixel@gmail.com",
          description: siteCopy[lang].schemaDescription,
          address: { "@type": "PostalAddress", addressLocality: "Sainte-Martine", addressRegion: "QC", addressCountry: "CA" },
          areaServed: ["Sainte-Martine", "Châteauguay", "Beauharnois", "Saint-Rémi", "Saint-Urbain-Premier", "Salaberry-de-Valleyfield", "Brossard", "Montérégie", "Montréal"].map(name => ({ "@type": "Place", name })),
          priceRange: "$$",
          image: "https://allopixel.com/og/home.png",
          logo: "https://allopixel.com/logo-horizontal.svg",
          sameAs: ["https://www.instagram.com/allopixel/", "https://www.facebook.com/AlloPixel/"],
        })}} />
      </head>
      <body className="bg-chalk text-ink antialiased font-body" suppressHydrationWarning>
        <LanguageProvider lang={lang}>
          <Nav />
          <main id="main-content">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
