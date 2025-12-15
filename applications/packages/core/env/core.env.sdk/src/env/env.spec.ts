import { EnvironmentType } from "@wraithlight/core.env.types";

import { CoreEnvironment } from "./env";
import { WL_ENV_DEFAULT, WL_ENV_TYPE_PROP_NAME } from "./env.const";

describe("EnvSpecs", () => {

  const oldProcessEnv = process.env;
  process.env = {
    ...oldProcessEnv,
    [WL_ENV_TYPE_PROP_NAME]: "EMTPY"
  };
  const envs = Object.values(EnvironmentType);

  describe("given the environment is initialized", () => {
    describe.each(
      envs.map(m => [m])
    )("when i call the function", (env: EnvironmentType) => {
      let environment: EnvironmentType;
      beforeEach(() => {
        process.env.WLTYPE = env;
        environment = CoreEnvironment.getEnvironmentType();
      });
      it("should return the proper value", () => {
        expect(environment).toBe(env);
      });
    });
  });
  describe("given the environemnt is not initialized", () => {
    describe("then i call the function", () => {
      let environment: EnvironmentType;
      beforeEach(() => {
        process.env.WLTYPE = undefined;
        environment = CoreEnvironment.getEnvironmentType();
      });
      it("should return the default value", () => {
        expect(environment).toBe(WL_ENV_DEFAULT);
      });
    });
  });
});
