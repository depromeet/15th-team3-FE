import type { StorybookConfig } from '@storybook/react-webpack5';

import { dirname, join } from 'path';

// const path = require('path');
// const toPath = (_path) => path.join(process.cwd(), _path);

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-webpack5-compiler-swc'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: {
      builder: {
        useSWC: false,
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },
  // webpackFinal: async (config) => {
  //   return {
  //     ...config,
  //     resolve: {
  //       ...config.resolve,
  //       alias: {
  //         ...config.resolve?.alias,
  //         '@emotion/css': toPath('node_modules/@emotion/react'),
  //       },
  //     },
  //   };
  // },
};
export default config;
