import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://allopixel.com"),
  title: {
    default: "Allôpixel — Affordable Brand & Web Design for Small Businesses",
    template: "%s | Allôpixel",
  },
  description:
    "Allôpixel is a boutique creative studio in Montréal offering brand identity, web design, and creative direction for small businesses, artists, and individuals — without the agency price tag.",
  keywords: ["web design Montreal","brand design small business","affordable logo design Canada","brand identity Montreal","website design for artists","small business branding","boutique creative studio"],
  openGraph: {
    type: "website", locale: "en_CA", url: "https://allopixel.com", siteName: "Allôpixel",
    title: "Allôpixel — Affordable Brand & Web Design",
    description: "Brand identity, web design, and creative direction for small businesses — without the agency price tag.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "LocalBusiness",
          name: "Allôpixel", url: "https://allopixel.com", email: "info.allopixel@gmail.com",
          description: "Boutique creative studio offering brand identity, web design, and creative direction for small businesses.",
          address: { "@type": "PostalAddress", addressLocality: "Montréal", addressRegion: "QC", addressCountry: "CA" },
          priceRange: "$$",
        })}} />
      </head>
      <body className="bg-chalk text-ink antialiased font-body" suppressHydrationWarning>
        <LanguageProvider>
          <Nav />
          <main id="main-content">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
