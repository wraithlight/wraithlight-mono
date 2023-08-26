const config = require("../../../../jest.config.js");

module.exports = config({
    preset: "ts-jest",
    displayName: "Packages/Environment Static/Common/Client",
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
