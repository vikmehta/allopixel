import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Allôpixel — Affordable Brand & Web Design for Small Businesses",
    short_name: "Allôpixel",
    description: "Boutique creative studio in Montréal offering brand identity, web design, and creative direction for small businesses.",
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
