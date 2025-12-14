const { eslintConfig } = require("@wraithlight/tools.eslint.base");


module.exports = {
  ...eslintConfig(__dirname),
  ignorePatterns: [
    "**/dist/**",
    "**/coverage/**",
    "**/webpack.config.js",
    ".eslintrc.cjs",
    "jest.config.js",
    "svelte.config.js",
    "vite.config.ts"
  ]
}
