import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import HomeIntro from "@/components/HomeIntro";
import SelectedWork from "@/components/SelectedWork";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTAStrip from "@/components/CTAStrip";
import { hasLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return pageMetadata(lang, "home");
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return (
    <>
      <Hero />
      <Marquee />
      <HomeIntro />
      <SelectedWork />
      <Services />
      <Testimonials />
      <CTAStrip />
    </>
  );
}
