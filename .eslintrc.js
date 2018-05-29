module.exports = {
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 6,
  },
  plugins: ['babel'],
  rules: {
    'import/no-dynamic-require': 0,
  },
};
