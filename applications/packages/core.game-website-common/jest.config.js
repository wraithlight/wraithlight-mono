const config = require("../../jest.config.js");

module.exports = config({
    preset: "ts-jest",
    passWithNoTests: true,
    displayName: "Packages/Core/Game Website Common",
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
