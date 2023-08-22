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
      displayName: "Apps/Content/UI",
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
