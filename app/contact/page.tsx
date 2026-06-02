import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with AllôPixel. Book a free discovery call or send us a message — we respond within 24 hours.",
};

export default function ContactPage() {
  return <ContactContent />;
}
