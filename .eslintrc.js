module.exports = {
        env: {
            browser: true,
            commonjs: true,
            es2021: true,
            amd: true,
            node: true,
            jest: true
        },
        extends: ['eslint:recommended', 'prettier'],
        overrides: [],
         
        plugins: [
            'node'
          ],
        parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module'
    
        },
        rules: {
            indent: ['error', 4],
            quotes: ['warn', 'single'],
            semi: ['error', 'always'],
        },
    
    };
    