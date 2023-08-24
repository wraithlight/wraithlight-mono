import { EnvironmentType } from "@wraithlight/core.common-constant";

import { getEnvironmentType } from "./env";
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
                process.env.wlType = env;
                environment = getEnvironmentType();
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
                process.env.wlType = undefined;
                environment = getEnvironmentType();
            });
            it("should return the default value", () => {
                expect(environment).toBe(WL_ENV_DEFAULT);
            });
        });
    });
});
