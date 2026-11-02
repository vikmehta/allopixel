import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicesContent from "@/components/ServicesContent";
import { hasLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/services">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return pageMetadata(lang, "services");
}

export default async function Page({ params }: PageProps<"/[lang]/services">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <ServicesContent />;
}
