const ignoreTests = [
  "types",
  "const"
]

module.exports = (project) => ({
  testEnvironment: "node",
  verbose: true,
  moduleFileExtensions: ["js", "ts"],
  passWithNoTests: ignoreTests.map(m => project.name.toLowerCase().endsWith(m.toLowerCase())),
  collectCoverageFrom: [
    "**/*.ts",
    "!**/index.ts",
    "!**/bootstrap.ts",
    "!**/main.ts",
    "!**/*.const.ts",
    "!**/*.model.ts"
  ],
  projects: [
    project
  ]
});
