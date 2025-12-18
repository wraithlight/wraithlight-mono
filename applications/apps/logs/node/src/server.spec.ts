jest.mock("@wraithlight/core.server", () => {
  return {
    createNodeServer: jest.fn()
  }
});
jest.mock("./controller", () => {
  return {
    LogsEntryController: jest.fn()
  }
});
import { createNodeServer } from "@wraithlight/core.server";

import "./server";

describe("ServerSpecs", () => {
  describe("given the server has been started", () => {
    it("should call `createNodeServer`", () => {
      expect(createNodeServer).toHaveBeenCalled();
      expect(createNodeServer).toHaveBeenCalledTimes(1);
    });
  });
});
