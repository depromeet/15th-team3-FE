/** @type {import('next').NextConfig} */

// eslint-disable-next-line turbo/no-undeclared-env-vars
const isDev = process.env.NODE_ENV === 'development';
const destination = isDev ? 'https://dev-api.moring.one' : 'https://api.moring.one';

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${destination}/:path*`,
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
};

export default nextConfig;
