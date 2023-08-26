import config from "../../../jest.config.js";

export default config({
    preset: "ts-jest",
    displayName: "Apps/Auth/UI",
    passWithNoTests: true,
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
