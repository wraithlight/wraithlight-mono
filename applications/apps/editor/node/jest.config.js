const config = require("../../../jest.config.js");

module.exports = config({
    preset: "ts-jest",
    displayName: "Apps/Editor/Node",
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
