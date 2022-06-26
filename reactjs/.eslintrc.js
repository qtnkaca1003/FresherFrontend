module.exports = {
  extends: ["react-app", "prettier", "plugin:jsx-a11y/recommended"],
  plugins: ["react-hooks", "jsx-a11y", "prettier"],
  parserOptions: {
    // Allows for the parsing of modern ECMAScript features
    ecmaVersion: 2018,
    // Allows for the use of imports
    sourceType: "module",
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/prop-types": "off",
    "@typescript-eslint/ban-types": "off",
    "react/react-in-jsx-scope": "off",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: ["return", "export"] },
      { blankLine: "any", prev: "export", next: "export" },
      // Always require blank lines after import, except between imports
      { blankLine: "always", prev: "import", next: "*" },
      { blankLine: "any", prev: "import", next: "import" },
    ],
    "@typescript-eslint/no-unused-vars": 2,
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "no-restricted-imports": [
      "error",
      {
        patterns: ["../*", "./../*"],
      },
    ],
    "no-console": "warn",
    "react/jsx-key": "error",
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        trailingComma: "all",
        semi: false,
        singleQuote: false,
        "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
      },
    ],
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    commonjs: true,
    node: true,
  },
}
