import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description: "AllôPixel is a boutique creative studio in Montréal. We believe great design should be accessible to every small business.",
};

export default function AboutPage() {
  return <AboutContent />;
}
