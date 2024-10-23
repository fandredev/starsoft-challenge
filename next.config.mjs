/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'softstar.s3.amazonaws.com',
        pathname: '/items/**',
      },
    ],
  },
};

export default nextConfig;
