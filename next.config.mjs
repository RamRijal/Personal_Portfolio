/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.rareblocks.xyz",
        port: "",
        pathname: "/collection/**",
      },
    ],
  },
};

export default nextConfig;
