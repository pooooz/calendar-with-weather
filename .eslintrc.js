module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        map: [
          ['components', './components'],
          ['containers', './containers'],
          ['pages', './pages'],
          ['assets', './assets'],
          ['utils', './utils'],
          ['store', './store'],
          ['constants', './constants'],
          ['services', './services'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/function-component-definition': [
      0,
      {
        namedComponents: 'function-declaration',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
    'react/prop-types': 0,
    'linebreak-style': ['error', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['error', 'always'],
    'import/prefer-default-export': 'off',
    'no-plusplus': 0,
    'max-classes-per-file': 0,
    'react/no-array-index-key': 0,
    'consistent-return': 0,
    'no-restricted-syntax': 0,
    'array-callback-return': 0,
    'default-case': 0,
    'react/prefer-stateless-function': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-param-reassign': 0,
    'prefer-destructuring': 0,
    'react/require-default-props': 0,
    'no-shadow': 0,
    'import/no-cycle': 0,
  },
};
