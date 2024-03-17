module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        indent: ['error', 4],
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': 'warn',
        'no-underscore-dangle': 'warn',
        'import/prefer-default-export': 'off',
        'no-shadow': 'off',
        'react/function-component-definition': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        'import/no-extraneous-dependencies': 'warn',
        'max-len': 'warn',
        'react/no-deprecated': 'warn',
        'jsx-a11y/alt-text': 'warn',
        'jsx-a11y/label-has-associated-control': 'off',
    },
    globals: {
        __IS_DEV__: true,
    },
};
