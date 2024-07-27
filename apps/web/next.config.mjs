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
};

export default nextConfig;
