module.exports = {
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
}