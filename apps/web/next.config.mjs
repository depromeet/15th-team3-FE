/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://ec2-43-203-195-123.ap-northeast-2.compute.amazonaws.com:8080/:path*', // Proxy to Backend
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
        port: '',
      },
    ],
  },
};

export default nextConfig;
