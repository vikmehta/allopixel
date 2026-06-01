import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import SelectedWork from "@/components/SelectedWork";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTAStrip from "@/components/CTAStrip";

export const metadata: Metadata = {
  title: "Allôpixel — Affordable Brand & Web Design for Small Businesses",
  description: "Boutique creative studio in Montréal. Brand identity, web design, and creative direction for small businesses — without the agency price tag.",
  alternates: { canonical: "https://allopixel.com" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <SelectedWork />
      <Services />
      <Testimonials />
      <CTAStrip />
    </>
  );
}
