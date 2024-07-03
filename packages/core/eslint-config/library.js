const base_eslint_config = require('./base.js');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...base_eslint_config,
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier', 'turbo'],
  env: {
    node: true,
  },
  ignorePatterns: ['.*.js', 'node_modules/', 'dist/'],
};
