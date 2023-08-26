const config = require("../../../jest.config.js");

module.exports = config({
    preset: "ts-jest",
    displayName: "Packages/Game/Layer",
    testEnvironment: "jsdom",
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
