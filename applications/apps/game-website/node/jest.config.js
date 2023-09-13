const config = require("../../../jest.config.js");

module.exports = config({
    preset: "ts-jest",
    displayName: "Apps/Game Website/Node",
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
