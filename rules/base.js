/**
 * Base HTML-FW linting rules
 * @todo Comment reasons why these are configured this way
 */
module.exports = {
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-default': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'linebreak-style': 'off',
    'max-len': ['warn', 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignorePattern: '\\s*<\\s*'
    }],
    'react/forbid-prop-types': ['warn', { forbid: ['any'] }],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/require-default-props': 'off',
    /**
     * AirBnB default = 'off'
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
     * @todo Set to 2 once PR #102 is merged
     */
    'react/no-direct-mutation-state': 'warn',
    'no-plusplus': 'off',
    'no-prototype-builtins': 'off',
    'no-underscore-dangle': 'off'
  }
};
