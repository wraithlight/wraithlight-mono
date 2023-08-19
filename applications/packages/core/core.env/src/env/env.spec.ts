import { EnvironmentType } from "@wraithlight/core.common-constant";

import { getEnvironmentType } from "./env";
import { WL_TYPE_PROP_NAME } from "./env.const";

describe("EnvSpecs", () => {

    const MOCK_VALUE = EnvironmentType.Test;
    const DEFAULT_VALUE = EnvironmentType.Local;

    const oldProcessEnv = process.env;
    process.env = {
        ...oldProcessEnv,
        [WL_TYPE_PROP_NAME]: "EMTPY"
    };

    describe("given the environment is initialized", () => {
        describe("when i call the function", () => {
            let environment: EnvironmentType;
            beforeEach(() => {
                process.env.wlType = MOCK_VALUE;
                environment = getEnvironmentType();
            });
            it("should return the proper value", () => {
                expect(environment).toBe(MOCK_VALUE);
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
                expect(environment).toBe(DEFAULT_VALUE);
            });
        });
    });
});
