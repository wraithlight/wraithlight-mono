const { jestConfig } = require("@wraithlight/tools.jest.base");
const { join } = require("path");

module.exports = jestConfig(
  {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    displayName: "Apps/Content/UI",
    testMatch: [
      "<rootDir>/src/**/*.spec.ts"
    ],
    testPathIgnorePatterns: [
      "dist"
    ],
    coveragePathIgnorePatterns: [
      "dist"
    ],
    moduleNameMapper: {
      "^.+\\.(css|less|scss)$": "identity-obj-proxy"
    }
  },
  join(__dirname, "../../..")
);
