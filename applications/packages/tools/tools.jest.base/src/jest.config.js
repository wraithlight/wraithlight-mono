const ignoreTests = [
  "types",
  "constants",
  "assets",
  /**
   * TODO: Align package names
   * All of the const packages should end with `constants`
  **/
 "constant",
 "const",
 /**
  * TODO: Align package names
  * It should be `assets`
  */
 "asset",
]

module.exports = (project, dirname) => {
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
            `${dirname}/packages/realtime/$1/__mocks__`,
            `${dirname}/packages/facade/$1/__mocks__`,
            `${dirname}/packages/core/$1/__mocks__`,
            // TODO: create mocks for these libs. (#571)
            `${dirname}/packages/$1/src`,
            `${dirname}/packages/core/$1/src`,
            `${dirname}/packages/common/$1/src`,
            `${dirname}/packages/common/password/$1/src`,
            `${dirname}/packages/core/logger/$1/src`,
            `${dirname}/packages/environment-static/$1/src`,
            `${dirname}/packages/auth/$1/src`,
            `${dirname}/packages/game/$1/src`,
            `${dirname}/packages/logs/$1/src`,
            `${dirname}/packages/facade/$1/src`,
            `${dirname}/packages/health-checker/$1/src`,
            `${dirname}/packages/notifier/$1/src`,
            `${dirname}/packages/game-website/$1/src`,
            `${dirname}/packages/content/$1/src`,
            // END TODO
          ]
        }
      }
    ],
    transform: {
      ...project.transform
    }
  }
};
