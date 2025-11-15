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

const jestConfig = (project, dirname) => {
  if (!project.displayName) {
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
            `${dirname}/packages/core/mustache/$1/__mocks__`,
            `${dirname}/packages/framework/$1/__mocks__`,
            // TODO: create mocks for these libs. (#571)
            `${dirname}/packages/$1/src`,
            `${dirname}/packages/realtime/$1/src`,
            `${dirname}/packages/core/$1/src`,
            `${dirname}/packages/core/env/$1/src`,
            `${dirname}/packages/common/$1/src`,
            `${dirname}/packages/common/password/$1/src`,
            `${dirname}/packages/core/logger/$1/src`,
            `${dirname}/packages/core/mustache/$1/src`,
            `${dirname}/packages/core/scheduler/$1/src`,
            `${dirname}/packages/core/memoize/$1/src`,
            `${dirname}/packages/core/decorator/$1/src`,
            `${dirname}/packages/core/package-info/$1/src`,
            `${dirname}/packages/environment-static/$1/src`,
            `${dirname}/packages/auth/$1/src`,
            `${dirname}/packages/game/$1/src`,
            `${dirname}/packages/logs/$1/src`,
            `${dirname}/packages/facade/$1/src`,
            `${dirname}/packages/health-checker/$1/src`,
            `${dirname}/packages/notifier/$1/src`,
            `${dirname}/packages/game-website/$1/src`,
            `${dirname}/packages/content/$1/src`,
            `${dirname}/packages/api-token/$1/src`,
            `${dirname}/packages/user-management/$1/src`,
            `${dirname}/packages/request-id/$1/src`,
            `${dirname}/packages/latency/$1/src`,
            `${dirname}/packages/domain/$1/src`,
            `${dirname}/packages/framework/$1/src`,
            `${dirname}/packages/framework/brand/$1/src`,
            `${dirname}/packages/framework/deepmerge/$1/src`,
            `${dirname}/packages/communications/$1/src`,
            `${dirname}/packages/kernel/$1/src`,
            `${dirname}/packages/ui/$1/src`,
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

module.exports = {
  jestConfig
};
