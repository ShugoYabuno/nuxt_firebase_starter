module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module'
  },
  extends: ['eslint:recommended', '@vue/typescript', 'prettier'],
  plugins: ['@typescript-eslint'],
  // add your custom rules here
  rules: {}
}
