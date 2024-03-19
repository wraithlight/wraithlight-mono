jest.mock("@wraithlight/core.environment-static.sdk", () => {
    return {
        ConfigurationReader: jest.fn()
    }
});

import { ConfigurationReader } from "@wraithlight/core.environment-static.sdk";
import { ApplicationName } from "@wraithlight/core.auth.constant";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { WebsiteClient } from "@wraithlight/core.environment-static.types";

import { CLIENT_WEBSITE_CONFIG } from "../configuration/website";
import { CLIENT_CONFIG } from "../configuration";

import { ClientConfigurationReader } from "./config-reader";

describe("ClientConfigurationReaderSpecs", () => {

    const MOCK_APPLICATION_NAME = ApplicationName.Website;
    const MOCK_ENVIRONMENT = EnvironmentType.Dev;
    let reader: ClientConfigurationReader<WebsiteClient>;

    describe("given the service is initialized", () => {

        reader = new ClientConfigurationReader(MOCK_APPLICATION_NAME, MOCK_ENVIRONMENT);

        it("should have been called `ConfigurationReader`", () => {
            expect(ConfigurationReader).toHaveBeenCalled();
            expect(ConfigurationReader).toHaveBeenCalledTimes(1);
            expect(ConfigurationReader).toHaveBeenCalledWith(CLIENT_WEBSITE_CONFIG.DEV, CLIENT_CONFIG.common.DEV);
        })
    });
});
