module.exports = {
  parser: "@typescript-eslint/parser", // Specify the TypeScript parser for ESLint
  extends: [
    "plugin:@typescript-eslint/recommended", // Use recommended rules from @typescript-eslint
    "prettier/@typescript-eslint", // Use prettier/@typescript-eslint plugin to ensure consistent formatting
    "plugin:prettier/recommended", // Enable the ESLint plugin for Prettier
  ],
  parserOptions: {
    ecmaVersion: 2018, // Specify the ECMAScript version to use
    sourceType: "module", // Specify that your code is in ECMAScript modules
  },
  rules: {}, // Define additional rules or override existing ones here
};


// eslint will highlight code and tell if there is error depending on how it setup
