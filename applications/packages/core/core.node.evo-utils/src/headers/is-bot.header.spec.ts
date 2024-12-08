const fromHeaderSpy = jest.fn();

jest.mock("@wraithlight/core.node.evo", () => {
  return {
    HttpDecorators: {
      fromHeader: fromHeaderSpy
    }
  }
});

import { HeaderName } from "@wraithlight/domain.http.constants";

import { IsBot } from "./is-bot.header";

describe("ApiTokenHeaderSpecs", () => {
  describe("given the header is called", () => {
    beforeEach(() => {
      IsBot();
    });
    it("should call the underlying FromHeader with a proper name", () => {
      expect(fromHeaderSpy).toHaveBeenCalled();
      expect(fromHeaderSpy).toHaveBeenCalledTimes(1);
      expect(fromHeaderSpy).toHaveBeenCalledWith(HeaderName.IsBot);
    });
  });
});
