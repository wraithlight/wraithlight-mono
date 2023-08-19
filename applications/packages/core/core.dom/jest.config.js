/** @type {import("ts-jest").JestConfigWithTsJest} */
module.exports = {
  verbose: true,
  moduleFileExtensions: ["js", "ts"],
  passWithNoTests: true,
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
      displayName: "Packages/Core/DOM",
      testEnvironment: "jsdom",
      testMatch: [
        "<rootDir>/src/**/*.spec.ts"
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
