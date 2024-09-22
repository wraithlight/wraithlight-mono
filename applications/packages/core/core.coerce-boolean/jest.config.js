const { jestConfig } = require("@wraithlight/tools.jest.base");
const { join } = require("path");

module.exports = jestConfig(
  {
    preset: "ts-jest",
    displayName: "Packages/Core/Coerce Boolean",
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
