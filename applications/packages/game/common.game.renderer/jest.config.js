const config = require("../../../jest.config.js");

module.exports = config({
    preset: "ts-jest",
    testEnvironment: "jsdom",
    displayName: "Packages/Game/Common/Renderer",
    testMatch: [
      "<rootDir>/src/**/*.spec.ts"
    ],
    testPathIgnorePatterns: [
      "dist"
    ],
    coveragePathIgnorePatterns: [
      "dist"
    ]
});
