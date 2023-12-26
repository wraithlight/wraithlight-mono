# @wraithlight/tools.eslint.base

This library contains the base `.eslintrc.cjs` file for all packages under `@wraithlight` scope.
The configuration is open for overwrite or extend.

Limitations:
* the exported config depends on the tsconfig file next to it `./tsconfig.json`
* the exported config extends the following configurations
```

        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",

```
* the exported config uses the followng parser
```

"@typescript-eslint/parser"

```
* the exported config uses the following plugins
```

        "deprecation",
        "@typescript-eslint",
        "import",

```

Usage:

```js

const config = require("@wraithlight/tools.eslint.base");

// To use the config as is.
module.exports = config;

// To overwrite the config.
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

// To overwrite a given property.
module.exports = {
    ...config,
    rules: [
        ...config.rules,
        "@typescript-eslint/no-inferrable-types": "off",
    ]
}

```
