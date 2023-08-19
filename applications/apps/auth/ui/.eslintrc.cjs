const config = require("../../../.eslintrc.cjs");


module.exports = {
    ...config,
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
