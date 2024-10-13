module.exports = {
    parserOptions: {
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    extends: ["eslint:recommended", "prettier"],
    plugins: {
      "prettier":import("prettier"),
       "unused-imports": import("eslint-plugin-unused-imports")
    },
    rules: {
        "prettier/prettier": "error",
        "space-in-parens": "error",
        "no-empty": "error",
        "no-multiple-empty-lines": "error",
        "no-irregular-whitespace": "error",
        "strict": ["error", "never"],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double", { "avoidEscape": true }],
        "semi": ["error", "always"],
        "prefer-const": "error",
        "space-before-function-paren": [
          "error",
          {
            "anonymous": "always",
            "named": "never",
            "asyncArrow": "always"
          }
        ]
      },
};