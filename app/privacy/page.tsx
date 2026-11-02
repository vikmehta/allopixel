import type { Metadata } from "next";
import PrivacyContent from "@/components/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How AllôPixel collects, uses and protects the personal information you share through this website.",
  alternates: { canonical: "https://allopixel.com/privacy" },
  openGraph: { url: "https://allopixel.com/privacy" },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
