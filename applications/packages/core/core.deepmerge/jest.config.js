const config = require("../../../jest.config.js");

module.exports = config({
    preset: "ts-jest",
    passWithNoTests: true,
    displayName: "Packages/Core/Deepmerge",
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
