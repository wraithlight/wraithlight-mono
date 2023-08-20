/** @type {import("ts-jest").JestConfigWithTsJest} */
module.exports = {
  testEnvironment: "node",
  verbose: true,
  moduleFileExtensions: ["js", "ts"],
  passWithNoTests: true,
  collectCoverageFrom: [
    "**/*.ts",
    "!**/index.ts",
    "!**/bootstrap.ts",
    "!**/main.ts",
    "!**/*.model.ts"
  ],
  projects: [
    {
      preset: "ts-jest",
      displayName: "Packages/Notifier/SDK",
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
