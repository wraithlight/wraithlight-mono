const { jestConfig } = require("@wraithlight/tools.jest.base");
const { join } = require("path");

module.exports = jestConfig(
  {
    preset: "ts-jest",
    displayName: "Packages/Domain/Application info/Constants",
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
  join(__dirname, "../../..")
);