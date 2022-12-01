module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:jest/recommended",
    "airbnb",
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "jest",
  ],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "import/prefer-default-export": 0,
    "default-param-last": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-filename-extension": ["error", { extensions: [".js"] }],
    "react/jsx-uses-react": 0,
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/no-unresolved": 0,
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],

  },
};
