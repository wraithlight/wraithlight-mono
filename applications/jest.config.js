/** @type {import("ts-jest").JestConfigWithTsJest} */
module.exports = {
  testEnvironment: "node",
  verbose: true,
  moduleFileExtensions: ["js", "ts"],
  collectCoverageFrom: [
    "**/*.ts",
    "!**/index.ts",
    "!**/bootstrap.ts",
    "!**/main.ts",
    "!**/*.const.ts",
    "!**/*.model.ts"
  ],
  projects: [
    {
      preset: "ts-jest",
      displayName: "Apps/Auth/node",
      testMatch: [
        "<rootDir>/apps/auth/node/**/*.spec.ts"
      ],
      testPathIgnorePatterns: [
        "dist"
      ],
      coveragePathIgnorePatterns: [
        "dist"
      ]
    },
    {
      preset: "ts-jest",
      displayName: "Apps/Auth/ui",
      testMatch: [
        "<rootDir>/apps/auth/ui/**/*.spec.ts"
      ],
      testPathIgnorePatterns: [
        "dist"
      ],
      coveragePathIgnorePatterns: [
        "dist"
      ]
    },
    {
      preset: "ts-jest",
      displayName: "Apps/Content/node",
      testMatch: [
        "<rootDir>/apps/content/node/**/*.spec.ts"
      ],
      testPathIgnorePatterns: [
        "dist"
      ],
      coveragePathIgnorePatterns: [
        "dist"
      ]
    },
    {
      preset: "ts-jest",
      displayName: "Apps/Content/ui",
      testMatch: [
        "<rootDir>/apps/content/ui/**/*.spec.ts"
      ],
      testPathIgnorePatterns: [
        "dist"
      ],
      coveragePathIgnorePatterns: [
        "dist"
      ]
    },
    {
      preset: "ts-jest",
      displayName: "Apps/Editor/node",
      testMatch: [
        "<rootDir>/apps/editor/node/**/*.spec.ts"
      ],
      testPathIgnorePatterns: [
        "dist"
      ],
      coveragePathIgnorePatterns: [
        "dist"
      ]
    },
    {
      preset: "ts-jest",
      displayName: "Apps/Editor/ui",
      testMatch: [
        "<rootDir>/apps/editor/ui/**/*.spec.ts"
      ],
      testPathIgnorePatterns: [
        "dist"
      ],
      coveragePathIgnorePatterns: [
        "dist"
      ]
    },
    {
      preset: "ts-jest",
      displayName: "Apps/Forum/node",
      testMatch: [
        "<rootDir>/apps/forum/node/**/*.spec.ts"
      ],
      testPathIgnorePatterns: [
        "dist"
      ],
      coveragePathIgnorePatterns: [
        "dist"
      ]
    },
    {
      preset: "ts-jest",
      displayName: "Apps/Forum/ui",
      testMatch: [
        "<rootDir>/apps/forum/ui/**/*.spec.ts"
      ],
      testPathIgnorePatterns: [
        "dist"
      ],
      coveragePathIgnorePatterns: [
        "dist"
      ]
    },
    {
      preset: "ts-jest",
      displayName: "Apps/GameElectron/node",
      testMatch: [
        "<rootDir>/apps/game-electron/node/**/*.spec.ts"
      ],
      testPathIgnorePatterns: [
        "dist"
      ],
      coveragePathIgnorePatterns: [
        "dist"
      ]
    },
    {
      preset: "ts-jest",
      displayName: "Apps/GameElectron/ui",
      testMatch: [
        "<rootDir>/apps/game-electron/ui/**/*.spec.ts"
      ],
      testPathIgnorePatterns: [
        "dist"
      ],
      coveragePathIgnorePatterns: [
        "dist"
      ]
    },
    {
      preset: "ts-jest",
      displayName: "Apps/GameWebsite/node",
      testMatch: [
        "<rootDir>/apps/game-website/node/**/*.spec.ts"
      ],
      testPathIgnorePatterns: [
        "dist"
      ],
      coveragePathIgnorePatterns: [
        "dist"
      ]
    },
    {
      preset: "ts-jest",
      displayName: "Apps/GameWebsite/ui",
      testMatch: [
        "<rootDir>/apps/game-website/ui/**/*.spec.ts"
      ],
      testPathIgnorePatterns: [
        "dist"
      ],
      coveragePathIgnorePatterns: [
        "dist"
      ]
    },
    {
      preset: "ts-jest",
      displayName: "Apps/Logs/node",
      testMatch: [
        "<rootDir>/apps/logs/node/**/*.spec.ts"
      ],
      testPathIgnorePatterns: [
        "dist"
      ],
      coveragePathIgnorePatterns: [
        "dist"
      ]
    },
    {
      preset: "ts-jest",
      displayName: "Apps/Logs/ui",
      testMatch: [
        "<rootDir>/apps/logs/ui/**/*.spec.ts"
      ],
      testPathIgnorePatterns: [
        "dist"
      ],
      coveragePathIgnorePatterns: [
        "dist"
      ]
    },
    {
      preset: "ts-jest",
      displayName: "Apps/Website/node",
      testMatch: [
        "<rootDir>/apps/website/node/**/*.spec.ts"
      ],
      testPathIgnorePatterns: [
        "dist"
      ],
      coveragePathIgnorePatterns: [
        "dist"
      ]
    },
    {
      preset: "jest-preset-angular",
      globalSetup: "jest-preset-angular/global-setup",
      displayName: "Apps/Website/ui",
      testMatch: [
        "<rootDir>/apps/website/ui/**/*.spec.ts"
      ],
      testPathIgnorePatterns: [
        "dist"
      ],
      coveragePathIgnorePatterns: [
        "dist"
      ]
    },
    {
      preset: "ts-jest",
      displayName: "Packages/Core/Crypto",
      testMatch: [
        "<rootDir>/packages/core/core.crypto/**/*.spec.ts"
      ],
      testPathIgnorePatterns: [
        "dist"
      ],
      coveragePathIgnorePatterns: [
        "dist"
      ]
    },
    {
      preset: "ts-jest",
      displayName: "Packages/Core/Dom",
      testMatch: [
        "<rootDir>/packages/core/core.dom/**/*.spec.ts"
      ],
      testPathIgnorePatterns: [
        "dist"
      ],
      coveragePathIgnorePatterns: [
        "dist"
      ]
    },
  ]
};
