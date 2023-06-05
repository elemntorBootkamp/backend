module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        amd: true,
        node: true,
        jest: true,
    },
    extends: ['eslint:recommended', 'prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 4],
        // 'linebreak-style': ['warn', 'windows'],
        quotes: ['warn', 'single'],
        semi: ['warn', 'always'],
    },
};














