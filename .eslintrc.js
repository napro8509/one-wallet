module.exports = {
    root: true,
    extends: [
        '@react-native-community',
        //   'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react-native/no-inline-styles': 0,
        'no-async-promise-executor': 0,
        'no-shadow': 'off',
        radix: 'off',
        semi: 0,
    },
    plugins: ['react', 'react-hooks'],
}
