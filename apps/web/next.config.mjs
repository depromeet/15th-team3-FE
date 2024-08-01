/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://dev-api.moring.one/:path*', // Proxy to Backend
      },
    ];
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
    // path: 'https://file.moring.one',
  },
};

export default nextConfig;
