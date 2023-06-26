module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        amd: true,
        node: true,
        jest: true,
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
