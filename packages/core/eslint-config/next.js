const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['eslint:recommended', 'prettier', require.resolve('@vercel/style-guide/eslint/next'), 'turbo'],
  plugins: ['@typescript-eslint', 'only-warn', 'import'],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ['.*.js', 'node_modules/'],
  rules: {
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'object', 'type'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'no-unused-vars': ['warn', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
    'import/no-cycle': [
      'warn',
      {
        maxDepth: 1,
        ignoreExternal: true,
      },
    ],
    '@typescript-eslint/consistent-type-imports': 'warn',
  },
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
};
