export default {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        amd: true,
        node: true,
        jest: true,
        parser: '@babel/eslint-parser',
    },
    overrides: [],

    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 4],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
    },
};
