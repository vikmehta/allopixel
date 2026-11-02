import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the local network IP to connect to the dev server (HMR WebSocket).
  // Next.js 16 blocks cross-origin dev requests by default; without this the
  // phone's browser can't hydrate React and onClick handlers never attach.
  allowedDevOrigins: ["192.168.0.10"],

  // Old addresses from the previous version of the site that Google still lists.
  // Permanent (308) so search engines move the old listings to the new pages.
  async redirects() {
    const toWork = ["insta-bake", "jess-blackwell", "reno-pro-plus", "blue-rabbit-therapy", "daycare", "siwalic-apparels", "bone-structure-agency"];
    const toHome = ["my-blog", "color-trends-in-2025-the-hues-shaping-the-future"];
    return [
      ...toWork.map(slug => ({ source: `/${slug}`, destination: "/work", permanent: true })),
      ...toHome.map(slug => ({ source: `/${slug}`, destination: "/", permanent: true })),
      { source: "/category/:path*", destination: "/", permanent: true },
      { source: "/author/:path*", destination: "/", permanent: true },
      { source: "/tag/:path*", destination: "/", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
