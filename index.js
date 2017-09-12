module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/base',
    './rules/relaxed'
  ].map(require.resolve),
  env: {
    browser: true,
    jest: true
  },
  globals: {
    mount: true, // for Enzyme
    shallow: true, // for Enzyme
    printHtml: true // utility method used for testing
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ]
};
