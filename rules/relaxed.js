/**
 * Relaxed linting rules.
 * Deviations from airbnb base rules. These downgrade errors to warnings
 * for use only during development.
 */
module.exports = {
  rules: {
    'arrow-parens': ['warn', 'as-needed', { requireForBlockBody: true }],
    'brace-style': ['warn', 'stroustrup'],
    'comma-dangle': ['warn', 'never'],
    'key-spacing': 'warn',
    'padded-blocks': 'warn',
    semi: ['warn', 'always'],
    'space-in-parens': 'warn',
    'spaced-comment': 'warn',
    'template-curly-spacing': ['warn', 'never'],
    'react/jsx-closing-bracket-location': 'warn',
    'no-debugger': 'warn',
    'no-trailing-spaces': 'warn',
    'no-multi-spaces': 'warn',
    'no-unused-vars': 'warn',
    quotes: ['warn', 'single', { avoidEscape: true }]
  }
};
