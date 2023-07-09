module.exports = {
  root: true,
  extends: '@react-native',
  //parser: '@typescript-es-lint/parser',
  //plugins: ['@typescript-eslint']
  rules: {
    'prettier/prettier': 0,
  },
  overrides: [
    {
      files:[ '*.tx', '*.tsx'],
      rules:{
        '@typescript-eslint/no-shadow':['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
