const config = require("../../../jest.config.js");

module.exports = config({
    preset: "ts-jest",
    displayName: "Packages/Notifier/Common/SDK Server",
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
