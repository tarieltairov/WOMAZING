module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 'off',
  },
  parserOptions: {
    ecmaVersions: 'latest',
    sourceType: 'module',
  },
};
