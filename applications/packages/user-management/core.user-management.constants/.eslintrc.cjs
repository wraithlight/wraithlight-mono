const { eslintConfig } = require("@wraithlight/tools.eslint.base");
module.exports = {
  ...eslintConfig,
  rules: {
    // TODO: Remove this.
    "@typescript-eslint/explicit-function-return-type": "warn",
  }
};
