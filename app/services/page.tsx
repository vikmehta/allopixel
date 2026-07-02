import type { Metadata } from "next";
import ServicesContent from "@/components/ServicesContent";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: "Transparent pricing for brand identity, web design, social media, and print. No hidden fees — just honest creative work.",
  alternates: { canonical: "https://allopixel.com/services" },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
