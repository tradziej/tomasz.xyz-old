module.exports = {
    "extends": ['prettier'],
    "env": {
        "browser": true,
        "es6": true,
    },
    "plugins": [
        "react",
        "prettier",
    ],
    "globals": {
        "graphql": false,
    },
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
        },
    },
    "rules": {
        "prettier/prettier": [
            "error",
            {
                singleQuote: true,
                trailingComma: 'es5'
            },
        ],
    },
}