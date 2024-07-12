const base_eslint_config = require('./base.js');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...base_eslint_config,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'prettier',
    'turbo',
  ],
  env: {
    browser: true,
  },
  ignorePatterns: ['.*.js', 'node_modules/', 'dist/'],
};
