/* eslint-env node */
module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: [
        "deprecation",
        '@typescript-eslint'
    ],
    parserOptions: {
        project: ['./tsconfig.json'],
    },
    overrides: [
        {
            files: ['*.ts'],
            parserOptions: {
                project: ['./tsconfig.json'],
            }
        }
    ],
    root: true,
    ignorePatterns: [
        "**/dist/**",
        "**/webpack.config.js",
        ".eslintrc.cjs",
        "jest.config.js",
        "svelte.config.js",
        "vite.config.ts"
    ],
    rules: {
        // TODO
        "@typescript-eslint/no-empty-function": [
            "warn",
            {
                "allow": [
                    "constructors"
                ]
            }
        ],
        "@typescript-eslint/no-inferrable-types": "warn",
        "no-var": "warn",
        "@typescript-eslint/ban-types": "warn",
        "@typescript-eslint/no-var-requires": "warn",
        "@typescript-eslint/no-extra-semi": "warn",
        "@typescript-eslint/no-empty-interface": [
            "warn",
            {
                "allowSingleExtends": true
            }
        ],
        "no-async-promise-executor": "warn",
        "@typescript-eslint/no-unnecessary-type-assertion": "warn",
        // END TODO
        // Native
        "no-implicit-globals": "warn",
        "sort-imports": "warn",
        "no-multiple-empty-lines": "warn",
        "no-trailing-spaces": "warn",
        "no-console": "warn",
        "no-alert": "warn",
        "no-restricted-properties": [
            "warn",
            {
                "object": "window",
                "property": "document"
            }
        ],
        "no-restricted-globals": [
            "warn",
            "document"
        ],
        // Typescript
        "@typescript-eslint/no-unsafe-assignment": "warn",
        "@typescript-eslint/no-unsafe-member-access": "warn",
        "@typescript-eslint/unbound-method": "warn",
        "lines-between-class-members": "off",
        "@typescript-eslint/lines-between-class-members": "warn",
        "@typescript-eslint/parameter-properties": "warn",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/explicit-function-return-type": "warn",
        "@typescript-eslint/prefer-enum-initializers": "warn",
        "@typescript-eslint/prefer-readonly": "warn",
        "@typescript-eslint/prefer-string-starts-ends-with": "warn",
        "@typescript-eslint/promise-function-async": "warn",
        "no-magic-numbers": "off",
        "@typescript-eslint/no-magic-numbers": [
            "warn", {
                "ignoreEnums": true
            }
        ],
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "warn",
        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": "warn",
        "@typescript-eslint/prefer-includes": "warn",
        "@typescript-eslint/prefer-function-type": "warn",
        "@typescript-eslint/array-type": [
            "warn", {
                "default": "generic",
                "readonly": "generic"
            }
        ],
        "@typescript-eslint/explicit-member-accessibility": [
            "warn", {
                "accessibility": "explicit",
                "overrides": {
                    "constructors": "no-public"
                }
            }
        ],
        // Typescript Plugins
        "deprecation/deprecation": "warn",
    }
};
