const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx',
});

const nextConfig = {
  compiler: {
    emotion: true,
  },
  transpilePackages: ['@sambad/sds'],
};

module.exports = withNextra(nextConfig);
