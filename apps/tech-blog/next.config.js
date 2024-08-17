const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx',
});

const nextConfig = {
  compiler: {
    emotion: true,
  },
  transpilePackages: ['@sambad/sds'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.toss.im', // NOTE: 테스트를 위해 추가합니다.
      },
    ],
  },
};

module.exports = withNextra(nextConfig);
