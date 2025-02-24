module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
    plugins: ['react', 'react-hooks', 'prettier'],
    rules: {
      'prettier/prettier': 'error',
    },
    parserOptions: {
      ecmaVersions: 'latest',
      sourceType: 'module',
    },
  };