const base_eslint_config = require('./base.js');
import pluginQuery from '@tanstack/eslint-plugin-query';

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...base_eslint_config,
  ...pluginQuery.configs['flat/recommended'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier', 'turbo'],
  env: {
    browser: true,
  },
  ignorePatterns: ['.*.js', 'node_modules/', 'dist/'],
};
