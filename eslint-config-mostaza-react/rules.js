module.exports = {
  "extends": "airbnb",
  "globals": {
    "fetch": true,
    "__DEV__": true,
    "windows": true
  },
  "plugins": ["import"],
  "rules": {
    // Standard rules
    "arrow-parens": "off",
    "arrow-body-style": "off",
    "comma-dangle": ["warn", "never"],
    "global-require": "off",
    "max-len": "off",
    "new-cap": "off",
    "no-console": "off",
    "no-constant-condition": "off",
    "no-confusing-arrow": "off",
    "no-else-return": "off",
    "no-param-reassign": "warn",
    "no-return-assign": "off",
    "no-use-before-define": "off",
    "no-underscore-dangle": "off",
    "no-unused-expressions": "warn",
    "no-unused-vars": ["warn", { "vars": "all", "args": "none" }],
    "semi": ["error", "never"],
    "space-before-function-paren": ["warn", "always"],

    // React rules
    "react/jsx-boolean-value": "off",
    "react/jsx-filename-extension": ["off"],
    "react/prefer-stateless-function": "warn",
    "react/sort-comp": ["off"],

    // Import rules
    "import/no-unresolved": ["error", { "ignore": ["\.png$"] }],
    "import/prefer-default-export": "warn",
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true, "optionalDependencies": true }],
    "import/no-named-as-default": "warn",
    "import/no-named-as-default-member": "warn",
    "import/no-named-as-default": "off"
  }
}
