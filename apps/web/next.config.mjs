/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/auth',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'file.moring.one',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'file.moring.one',
        pathname: '/uploaded/**',
      },
      {
        protocol: 'https',
        hostname: 'file.moring.one',
        pathname: '/defaults/**',
      },
    ],
  },
  compiler: {
    emotion: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'file.moring.one',
      },
    ],
  },
};

export default nextConfig;
