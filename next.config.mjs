/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Logos are small PNGs served from /public; keep them crisp.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
