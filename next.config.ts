import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the local network IP to connect to the dev server (HMR WebSocket).
  // Next.js 16 blocks cross-origin dev requests by default; without this the
  // phone's browser can't hydrate React and onClick handlers never attach.
  allowedDevOrigins: ["192.168.0.10"],

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
