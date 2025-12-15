jest.mock("@wraithlight/core.environment-static.sdk", () => {
  return {
    ConfigurationReader: jest.fn()
  }
});

import { ConfigurationReader } from "@wraithlight/core.environment-static.sdk";
import { ApplicationName } from "@wraithlight/core.auth.constant";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { WebsiteShared } from "@wraithlight/core.environment-static.types";

import { SHARED_WEBSITE_CONFIG } from "../configuration/website";
import { SHARED_CONFIG } from "../configuration";

import { SharedConfigurationReader } from "./config-reader";

describe("SharedConfigurationReaderSpecs", () => {

  const MOCK_APPLICATION_NAME = ApplicationName.Website;
  const MOCK_ENVIRONMENT = EnvironmentType.Dev;
  let reader: SharedConfigurationReader<WebsiteShared>;

  describe("given the service is initialized", () => {

    reader = new SharedConfigurationReader(MOCK_APPLICATION_NAME, MOCK_ENVIRONMENT);

    it("should have been called `ConfigurationReader`", () => {
      expect(ConfigurationReader).toHaveBeenCalled();
      expect(ConfigurationReader).toHaveBeenCalledTimes(1);
      expect(ConfigurationReader).toHaveBeenCalledWith(SHARED_WEBSITE_CONFIG.DEV, SHARED_CONFIG.common.DEV);
    })
  });
});
