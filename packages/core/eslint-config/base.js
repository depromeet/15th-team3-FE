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
    'no-duplicate-imports': 'error',
    'no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    '@typescript-eslint/consistent-type-imports': 'error',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
};
