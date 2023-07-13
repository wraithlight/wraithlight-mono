/** @type {import("ts-jest").JestConfigWithTsJest} */
module.exports = {
  testEnvironment: "node",
  verbose: true,
  moduleFileExtensions: ["js", "ts"],
  passWithNoTests: true,
  projects: [
    {
      preset: "ts-jest",
      displayName: "Apps/Content/Node",
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
