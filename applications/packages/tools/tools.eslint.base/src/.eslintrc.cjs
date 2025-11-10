const { resolve } = require("path");

/* eslint-env node */
const eslintConfig = (dirname) =>({
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
    "import",
    "@regru/prefer-early-return",
    "@wraithlight/wraithlight-eslint"
  ],
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: dirname
  },
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        project: resolve(dirname, "./tsconfig.json")
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
    "no-undefined": "error",
    "no-var": "error",
    "no-eq-null": "error",
    "max-len": [
      "error",
      {
        "ignoreComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true
      }
    ],
    "no-warning-comments": "warn",
    "no-implicit-globals": "error",
    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: true
      }
    ],
    "no-multiple-empty-lines": "error",
    "no-trailing-spaces": "error",
    "no-console": "error",
    "no-alert": "error",
    "no-restricted-properties": [
      "error",
      {
        "object": "window",
        "property": "document"
      }
    ],
    "no-restricted-globals": [
      "error",
      {
        name: "document",
        message: "Import `getDocumentRef()` from `@wraithlight/core.dom` instead."
      },
      {
        name: "window",
        message: "Import `getWindowRef()` from `@wraithlight/core.dom` instead."
      },
      {
        name: "navigator",
        message: "Import `getNavigatorRef()` from `@wraithlight/core.dom` instead."
      },
      {
        name: "atob",
        message: "Import `fromBase64String() from `core.base64` instead."
      },
      {
        name: "btoa",
        message: "Import `toBase64String() from `core.base64` instead."
      },
      {
        name: "isNaN",
        message: "Import `isNan()` or `isNanOrNil()` from `core.nullable` instead."
      }
    ],
    "no-async-promise-executor": "error",
    "function-call-argument-newline": ["error", "consistent"],
    "quotes": ["error", "double", { "allowTemplateLiterals": true }],
    "indent": ["warn", 2, {
      "SwitchCase": 1
    }],                      // TODO
    // Native off due to TS rules
    "no-magic-numbers": "off",
    "lines-between-class-members": "off",
    "no-useless-constructor": "off",
    "no-array-constructor": "off",
    "semi": "off",
    // Typescript
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-empty-function": [
      "error",
      {
        "allow": [
          "constructors"
        ]
      }
    ],
    "@typescript-eslint/no-empty-interface": [
      "off",
      {
        "allowSingleExtends": true
      }
    ],
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/no-extra-semi": "error",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/unbound-method": "error",
    "@typescript-eslint/lines-between-class-members": "off",
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        assertionStyle: 'never'
      }
    ],
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
    "@typescript-eslint/prefer-enum-initializers": "error",
    "@typescript-eslint/prefer-readonly": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/no-magic-numbers": [
      "error",
      {
        "ignore": [-1, 0, 1],
        "ignoreEnums": true
      }
    ],
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/array-type": [
      "error", {
        "default": "generic",
        "readonly": "generic"
      }
    ],
    "@typescript-eslint/explicit-member-accessibility": [
      "error", {
        "accessibility": "explicit",
        "overrides": {
          "constructors": "no-public"
        }
      }
    ],
    // Wraithlight Plugins
    "@wraithlight/wraithlight-eslint/no-null": "error",
    // Typescript Plugins
    "deprecation/deprecation": "warn",
    "@regru/prefer-early-return/prefer-early-return": [
      "error", {
        "maximumStatements": 1
      }
    ],
    "import/order": [
      "error",
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
});

module.exports = {
  eslintConfig
};
