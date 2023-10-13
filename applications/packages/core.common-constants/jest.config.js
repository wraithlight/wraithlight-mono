const config = require("../../jest.config.js");

module.exports = config({
    preset: "ts-jest",
    displayName: "Packages/Core/Common Constants",
    passWithNoTests: true,
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
