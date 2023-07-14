module.exports = {
	root: true,
	extends: '@react-native',
	//parser: '@typescript-es-lint/parser',
	//plugins: ['@typescript-eslint']
	rules: {
		'prettier/prettier': 0
	},
	overrides: [
		{
			files: [ '*.tx', '*.tsx' ],
			rules: {
				'@typescript-eslint/no-shadow': [ 'error' ],
				'no-shadow': 'off',
				'no-undef': 'off',
				'eslint-comments/no-unused-disable': 'off',
				'@typescript-eslint/no-unused-vars': 'off',
				'no-trailing-spaces': 'off',
				'semi': 'off',
				'react-native/no-inline-styles': 'off',
				'comma-dangle': 'off',
				'react/react-in-jsx-scope': 'off',
			}
		}
	]
};
