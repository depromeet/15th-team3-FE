const base_eslint_config = require('./base.js');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...base_eslint_config,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    require.resolve('@vercel/style-guide/eslint/next'),
    'turbo',
  ],
  env: {
    node: true,
    browser: true,
  },
  ignorePatterns: ['.*.js', 'node_modules/'],
};
