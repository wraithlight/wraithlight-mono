const config = require("../../../jest.config.js");

module.exports = config({
    preset: "ts-jest",
    displayName: "Packages/Core/Random number",
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
