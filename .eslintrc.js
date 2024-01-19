module.exports = {
  env: {
      browser: true,
      es2021: true,
      node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended'],
  overrides: [
      {
          env: {
              node: true,
          },
          files: ['.eslintrc.{js,cjs}'],
          parserOptions: {
              sourceType: 'script',
          },
      },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
      'import/no-unresolved': 0,
      'no-unused-vars': 'warn',
      'no-useless-catch': 'warn',
      'no-undef': 'warn',
      '@typescript-eslint/no-unused-vars': [
          'warn',
          {
              argsIgnorePattern: '^_',
              varsIgnorePattern: '^_',
              caughtErrorsIgnorePattern: '^_',
          },
      ],
      '@typescript-eslint/no-var-requires': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
  },
};
