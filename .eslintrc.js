module.exports = {
  // Expected environment (global names)
  env: {
    browser: true,
    node: true
  },
  globals: {
    Map: true,
  },
  // Extending recommended config and config derived from eslint-config-prettier
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier'
  ],
  // Activating eslint-plugin-prettier (--fix stuff)
  plugins: [
    'react',
    'prettier'
  ],
  parser: "babel-eslint",
  parserOptions: {
    env: {
      es6: true
    },
    ecmaFeatures: {
      jsx: true
    },
  },

  rules: {
    'prettier/prettier': [
      // Customizing prettier rules (unfortunately not many of them are customizable)
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],

    // Adding some custom ESLint rules

    // Allow console usage
    // 'no-console': 0,

    // Dont check for prop-types
    'react/prop-types': 0,
  }
}