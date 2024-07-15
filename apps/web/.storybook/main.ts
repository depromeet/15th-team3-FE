import type { StorybookConfig } from '@storybook/nextjs';

import { dirname, join } from 'path';

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/nextjs'),
    options: {},
  },
  staticDirs: ['../public'],
  swc: () => ({
    jsc: {
      parser: {
        syntax: 'typescript',
        tsx: true,
      },
      transform: {
        react: {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
      },
    },
  }),
};
export default config;
