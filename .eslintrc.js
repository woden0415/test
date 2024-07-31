module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['prettier'],
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    'plugin:prettier/recommended',
    'plugin:vue-pug/vue3-recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': 'error',
    'no-restricted-globals': 0,
    'no-param-reassign': 0,
    'no-shadow': 0,
    'no-prototype-builtins': 0,
    'no-restricted-syntax': 0,
    'no-lonely-if': 0,
    'prefer-const': 0,
    'linebreak-style': [0, 'error', 'windows'],
    'max-len': 0,
    'prefer-destructuring': 0,
    'import/prefer-default-export': 0,
    'func-names': 0,
    'no-await-in-loop': 0,
    'no-continue': 0,
    'prefer-rest-params': 0,
    camelcase: 0,
    eqeqeq: 0,
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    'global-require': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  globals: {
    AMap: true,
  },
};
