jest.mock("@wraithlight/core.environment-static.sdk", () => {
    return {
        ConfigurationReader: jest.fn()
    }
});

import { ConfigurationReader } from "@wraithlight/core.environment-static.sdk";
import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constant";
import { WebsiteServer } from "@wraithlight/core.environment-static.types";

import { SERVER_WEBSITE_CONFIG } from "../configuration/website";
import { SERVER_CONFIG } from "../configuration";

import { ServerConfigurationReader } from "./config-reader";

describe("ServerConfigurationReaderSpecs", () => {

    const MOCK_APPLICATION_NAME = ApplicationName.Website;
    const MOCK_ENVIRONMENT = EnvironmentType.Dev;
    let reader: ServerConfigurationReader<WebsiteServer>;

    describe("given the service is initialized", () => {

        reader = new ServerConfigurationReader(MOCK_APPLICATION_NAME, MOCK_ENVIRONMENT);

        it("should have been called `ConfigurationReader`", () => {
            expect(ConfigurationReader).toHaveBeenCalled();
            expect(ConfigurationReader).toHaveBeenCalledTimes(1);
            expect(ConfigurationReader).toHaveBeenCalledWith(SERVER_WEBSITE_CONFIG.DEV, SERVER_CONFIG.common.DEV);
        })
    });
});
