const config = require("../../../jest.config.js");

module.exports = config({
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
});
