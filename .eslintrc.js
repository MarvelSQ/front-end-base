module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'babel'],
};
