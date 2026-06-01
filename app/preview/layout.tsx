import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Design Preview — Allôpixel",
};

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dmSans.variable}`}>
      <body
        style={{
          margin: 0,
          fontFamily: "var(--font-body), DM Sans, sans-serif",
          backgroundColor: "#0A0A12",
          color: "#EBEBEA",
          overflowX: "hidden",
        }}
      >
        {children}
      </body>
    </html>
  );
}
