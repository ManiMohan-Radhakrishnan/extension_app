/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Custom Webpack configuration here
    return config;
  },
  // Optionally, you can tell Next.js to use 'src' as the base directory for pages
  // This is useful when using a src-based structure
  experimental: {
    srcDir: 'src', // Tells Next.js to look for 'src/pages'
  },
};

export default nextConfig;

