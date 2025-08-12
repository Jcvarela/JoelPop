/** @type {import('next').NextConfig} */
const config = {
  // export to plain static files for Azure Static Web Apps
  output: 'export',
  images: {
    // needed for pure static export
    unoptimized: true,
  },
  basePath: '/JoelPop',
  assetPrefix: '/JoelPop/',
};

module.exports = config;
