const { eslintConfig } = require("@wraithlight/tools.eslint.base");
module.exports = {
  ...eslintConfig(__dirname),
  rules: {
    // TODO: Move to tool layer.
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        "allowedNames": [
          "forServer",
          "forClient"
        ]
      }
    ]
  }
};
