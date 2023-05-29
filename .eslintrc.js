module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'amd': true,
        'node': true,
        'jest': true
    },
    'extends': 'eslint:recommended',
    'overrides': [
    ],
    "plugins": [
        "node"
      ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'warn',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};
