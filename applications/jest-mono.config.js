const config = require("./jest.config");
const project = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    displayName: "WL MONO",
    testMatch: [
        "<rootDir>/packages/**/*.spec.ts"
    ],
      testPathIgnorePatterns: [
        "apps",
        "dist"
    ],
    coveragePathIgnorePatterns: [
        "apps",
        "dist"
    ]
};

module.exports = () => config(project);
