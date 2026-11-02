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
      "AllôPixel is a boutique creative studio in Montréal offering brand identity, web design, and creative direction for small businesses, artists, and individuals — without the agency price tag.",
    ogTitle: "AllôPixel — Affordable Brand & Web Design",
    ogDescription: "Brand identity, web design, and creative direction for small businesses — without the agency price tag.",
    schemaDescription: "Boutique creative studio offering brand identity, web design, and creative direction for small businesses.",
  },
  fr: {
    description:
      "AllôPixel est un studio créatif boutique à Montréal qui offre identité de marque, conception web et direction créative aux petites entreprises, artistes et particuliers — sans le prix d'une agence.",
    ogTitle: "AllôPixel — Image de marque et sites web abordables",
    ogDescription: "Identité de marque, conception web et direction créative pour petites entreprises — sans le prix d'une agence.",
    schemaDescription: "Studio créatif boutique offrant identité de marque, conception web et direction créative aux petites entreprises.",
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
        ? "AllôPixel — Image de marque et sites web abordables pour petites entreprises"
        : "AllôPixel — Affordable Brand & Web Design for Small Businesses",
      template: "%s | AllôPixel",
    },
    description: c.description,
    ...(lang === "en" && {
      keywords: ["web design Montreal","brand design small business","affordable logo design Canada","brand identity Montreal","website design for artists","small business branding","boutique creative studio"],
    }),
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
          address: { "@type": "PostalAddress", addressLocality: "Montréal", addressRegion: "QC", addressCountry: "CA" },
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
