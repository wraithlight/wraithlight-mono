jest.mock("@wraithlight/core.server", () => {
  return {
    createNodeServer: jest.fn()
  }
});
const serverGameWebsiteConfigReaderGetInstanceSpy = jest.fn();
jest.mock("@wraithlight/common.environment-static.server", () => {
  return {
    ServerGameWebsiteConfigReader: {
      getInstance: serverGameWebsiteConfigReaderGetInstanceSpy.mockImplementation(() => {
        return {
          getCommon: jest.fn().mockImplementation(() => "test")
        }
      })
    }
  }
});
const sharedGameWebsiteConfigReaderGetInstanceSpy = jest.fn();
const sharedGameWebsiteConfigReaderGetSpy = jest.fn();
jest.mock("@wraithlight/common.environment-static.shared", () => {
  return {
    SharedGameWebsiteConfigReader: {
      getInstance: sharedGameWebsiteConfigReaderGetInstanceSpy.mockImplementation(() => {
        return {
          get: sharedGameWebsiteConfigReaderGetSpy.mockImplementation(() => 1234)
        }
      })
    }
  }
});
const mockHealthCheckControllerV1 = jest.fn();
jest.mock("@wraithlight/common.health-checker.sdk-server", () => {
  return {
    HealthCheckControllerV1: mockHealthCheckControllerV1
  }
});
jest.mock("@wraithlight/core.env.sdk", () => {
  return {
    CoreEnvironment: {
      getEnvironmentType: jest
        .fn()
        .mockImplementation(() => EnvironmentType.Dev)
    }
  }
});
jest.mock("path", () => {
  return {
    join: jest.fn().mockImplementation(() => "")
  }
})

import { EnvironmentType } from "@wraithlight/core.env.types";
import { createNodeServer } from "@wraithlight/core.server";

import "./server";

describe("ServerSpecs", () => {
  describe("given the server has been started", () => {
    it("should reated the port", () => {
      expect(sharedGameWebsiteConfigReaderGetSpy).toHaveBeenCalled();
      expect(sharedGameWebsiteConfigReaderGetSpy).toHaveBeenCalledTimes(1);
    });
    it("should call `createNodeServer`", () => {
      expect(createNodeServer).toHaveBeenCalled();
      expect(createNodeServer).toHaveBeenCalledTimes(1);
      // TODO
      // expect(createNodeServer).toHaveBeenCalledWith(
      //     ApplicationName.GameWebsite,
      //     [
      //         mockHealthCheckControllerV1
      //     ],
      //     [],
      //     1234,
      //     [
      //         {
      //             path: "test",
      //             staticPath: ""
      //         },
      //         {
      //             path: "test",
      //             staticPath: ""
      //         }
      //     ]
      // )
    });
  });
});
