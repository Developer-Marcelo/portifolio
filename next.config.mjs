/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/portifolio",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
