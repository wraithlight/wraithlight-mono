const ignoreTests = [
  "types",
  "constants",
  /**
   * TODO: Align package names
   * All of the const packages should end with `constants`
   **/
  "constant",
  "const",
]

module.exports = (project) => {
  if(!project.displayName) {
    throw "Project should contain `displayName`!";
  }
  return {
    testEnvironment: "node",
    verbose: true,
    moduleFileExtensions: ["js", "ts"],
    passWithNoTests: ignoreTests
      .map(m => project.displayName.toLowerCase().endsWith(m))
      .concat(project.passWithNoTests || false)
      .includes(true)
    ,
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
  }
};
