module.exports = {
  "extends": "airbnb",
  "globals": {
    "fetch": true,
    "__DEV__": true
  },
  "plugins": ["import"],
  "rules": {
    // Standard rules
    "arrow-parens": 0,
    "arrow-body-style": 0,
    "comma-dangle": [1, "never"],
    "max-len": 0,
    "new-cap": 0,
    "no-console": 0,
    "no-constant-condition": 0,
    "no-confusing-arrow": 0,
    "no-else-return": 0,
    "no-param-reassign": 1,
    "no-use-before-define": 0,
    "no-underscore-dangle": 0,
    "no-unused-expressions": 1,
    "no-unused-vars": [1, { "vars": "all", "args": "none" }],
    "semi": [2, "never"],
    "space-before-function-paren": [2, "always"],

    // React rules
    "react/jsx-boolean-value": 0,
    "react/prefer-stateless-function": 1,

    // Import rules
    "import/no-unresolved": [2, { "ignore": ["\.png$"] }]
  }
}
