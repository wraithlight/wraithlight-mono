const config = require("../../../jest.config.js");

module.exports = config({
    preset: "ts-jest",
    passWithNoTests: true,
    displayName: "Packages/Game/Core/Const",
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
