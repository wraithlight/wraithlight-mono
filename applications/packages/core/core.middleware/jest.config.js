const config = require("@wraithlight/tools.jest.base");
const { join } = require("path");

module.exports = config(
  {
    preset: "ts-jest",
    displayName: "Packages/Core/Middleware",
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
