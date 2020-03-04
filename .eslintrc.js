module.exports = {
  parser: "babel-eslint",
  extends: ["react-app", "airbnb", "prettier", "plugin:compat/recommended"],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true
  },
  globals: {
    APP_TYPE: true,
    page: true
  },
  plugins: [
    "react-hooks"
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": [1, { extensions: [".js"] }],
    "react/jsx-wrap-multilines": 0,
    "react/prop-types": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-props-no-spreading": 0,
    "import/prefer-default-export": 0,
    "import/no-unresolved": [2, { ignore: ["^@/", "^umi/"] }],
    "import/no-extraneous-dependencies": [
      2,
      {
        optionalDependencies: true,
        devDependencies: ["**/tests/**.js", "/mock/**.js", "**/**.test.js"]
      }
    ],
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "linebreak-style": 0
  },
  settings: {
    polyfills: ["Promise", "fetch", "promises", "url"],
    "import/resolver": {
      alias: [
        ['moment', './node_modules/antd-jalali-moment'],
        ['main-moment', './node_modules/moment'],
        ["components", "./src/components"],
        ["providers", "./src/providers"],
        ["hooks", "./src/hooks"],
        ["react", "./node_modules/react"],
        ["prop-types", "./node_modules/prop-types"]
      ]
    }
  }
};
