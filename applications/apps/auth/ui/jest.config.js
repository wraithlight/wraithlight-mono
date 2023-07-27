/** @type {import("ts-jest").JestConfigWithTsJest} */
export default {
  testEnvironment: "node",
  verbose: true,
  moduleFileExtensions: ["js", "ts"],
  passWithNoTests: true,
  projects: [
    {
      preset: "ts-jest",
      displayName: "Apps/Auth/UI",
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
