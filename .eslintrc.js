module.exports = {
  parser:  '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended'],
  env: {
  },
  root: true,
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'warn',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'brace-style': 'warn',
    'camelcase': 'warn',
    'default-case': 'warn',
    'eol-last': 'error',
    'for-direction': 'error',
    'jsx-quotes': ['warn', 'prefer-single'],
    'max-lines': ['error', 600],
    'multiline-ternary': 'warn',
    'newline-per-chained-call': 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};