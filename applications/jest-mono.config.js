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

console.log(JSON.stringify(config(project), undefined, 2))

module.exports = () => config(project);
