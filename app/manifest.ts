import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AllôPixel — Affordable Web Design, South Shore & Montérégie",
    short_name: "AllôPixel",
    description: "Small web design and branding studio in Sainte-Martine serving the South Shore and Montérégie.",
    start_url: "/",
    display: "standalone",
    background_color: "#092724",
    theme_color: "#092724",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
