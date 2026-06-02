import type { Metadata } from "next";
import WorkContent from "@/components/WorkContent";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects by AllôPixel — brand identities, websites, and creative direction for small businesses, artists, and individuals.",
};

export default function WorkPage() {
  return <WorkContent />;
}
