import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // export to plain static files for Azure Static Web Apps
  output: "export",
  images: {
    // needed for pure static export
    unoptimized: true,
  },
};

export default nextConfig;
