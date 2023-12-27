/* eslint-env node */
module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript"
    ],
    parser: "@typescript-eslint/parser",
    plugins: [
        "deprecation",
        "@typescript-eslint",
        "import"
    ],
    parserOptions: {
        project: ["./tsconfig.json"],
    },
    overrides: [
        {
            files: ["*.ts"],
            parserOptions: {
                project: ["./tsconfig.json"],
            }
        }
    ],
    root: true,
    ignorePatterns: [
        "**/dist/**",
        "**/webpack.config.js",
        ".eslintrc.cjs",
        "jest.config.js",
        "**/*.js",
        "**/*.mjs",
        "**/*.cjs",
        "**/*.spec.ts"
    ],
    settings: {
        "import/resolver": {
            typescript: {
                project: "./tsconfig.json"
            }
        }
    },
    rules: {
        // Native
        "no-var": "error",
        "max-len": [
            "warn",
            {
                "ignoreComments": true,
                "ignoreUrls": true,
                "ignoreStrings": true,
                "ignoreTemplateLiterals": true,
                "ignoreRegExpLiterals": true
            }
        ],
        "no-warning-comments": "warn",
        "no-implicit-globals": "warn",
        "sort-imports": [
            "warn",
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
                allowSeparatedGroups: true
            }
        ],
        "no-multiple-empty-lines": "warn",
        "no-trailing-spaces": "error",
        "no-console": "error",
        "no-alert": "warn",
        "no-restricted-properties": [
            "warn",
            {
                "object": "window",
                "property": "document"
            }
        ],
        "no-restricted-globals": [
            "error",
            "document",
            "window",
            "navigator"
        ],
        "no-async-promise-executor": "error",
        "no-magic-numbers": "off",
        "lines-between-class-members": "off",
        "no-useless-constructor": "off",
        "no-array-constructor": "off",
        // Typescript
        "@typescript-eslint/no-empty-function": [
            "error",
            {
                "allow": [
                    "constructors"
                ]
            }
        ],
        "@typescript-eslint/no-empty-interface": [
            "error",
            {
                "allowSingleExtends": true
            }
        ],
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/no-extra-semi": "error",
        "@typescript-eslint/ban-types": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-unsafe-assignment": "warn",
        "@typescript-eslint/no-unsafe-member-access": "warn",
        "@typescript-eslint/unbound-method": "warn",
        "@typescript-eslint/lines-between-class-members": "off",
        "@typescript-eslint/parameter-properties": [
            "error",
            {
                "allow": [
                    "private readonly",
                    "protected readonly"
                ]
            }
        ],
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/prefer-enum-initializers": "warn",
        "@typescript-eslint/prefer-readonly": "error",
        "@typescript-eslint/prefer-string-starts-ends-with": "warn",
        "@typescript-eslint/promise-function-async": "warn",
        "@typescript-eslint/no-magic-numbers": [
            "warn",
            {
                "ignore": [-1, 0, 1],
                "ignoreEnums": true
            }
        ],
        "@typescript-eslint/no-useless-constructor": "warn",
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
        "import/no-extraneous-dependencies": "warn",
        "import/no-unresolved": "error",
        "import/order": [
            "warn",
            {
                groups: [
                    "builtin",
                    "external",
                    "internal",
                    "parent",
                    "sibling",
                    "index",
                    "unknown",
                ],
                "newlines-between": "always",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true
                }
            }
        ]
    }
};
