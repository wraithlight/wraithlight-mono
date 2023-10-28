const ignoreTests = [
  "assets",
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
      {
        ...project,
        moduleNameMapper: {
          ...project.moduleNameMapper,
          "^@wraithlight\/(.*)$": [
            `${__dirname}/packages/$1/src`,
            `${__dirname}/packages/core/$1/src`,
            `${__dirname}/packages/common/$1/src`,
            `${__dirname}/packages/core/logger/$1/src`,
            `${__dirname}/packages/common/environment-static/$1/src`,
            `${__dirname}/packages/auth/$1/src`,
            `${__dirname}/packages/game/$1/src`,
            `${__dirname}/packages/logs/$1/src`,
            `${__dirname}/packages/facade/$1/src`,
            `${__dirname}/packages/health-checker/$1/src`,
            `${__dirname}/packages/notifier/$1/src`,
            `${__dirname}/packages/game-website/$1/src`
          ]
        }
      }
    ],
    transform: {
      ...project.transform
    }
  }
};
