const config = require("../../../jest.config.js");

module.exports = config({
    preset: "ts-jest",
    displayName: "Packages/Framework/Operation Result",
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
