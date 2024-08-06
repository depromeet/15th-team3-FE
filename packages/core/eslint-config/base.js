const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ['@typescript-eslint', 'import'],
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: '@sds/**',
            group: 'internal',
          },
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'import/no-cycle': [
      'error',
      {
        maxDepth: Infinity,
        ignoreExternal: true,
      },
    ],
    'no-undef': 'off',
    'no-duplicate-imports': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],

    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
};
