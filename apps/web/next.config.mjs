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
