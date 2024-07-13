/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@sambad/eslint-config/next.js', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
};
