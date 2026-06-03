import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the local network IP to connect to the dev server (HMR WebSocket).
  // Next.js 16 blocks cross-origin dev requests by default; without this the
  // phone's browser can't hydrate React and onClick handlers never attach.
  allowedDevOrigins: ["192.168.0.10"],
};

export default nextConfig;
