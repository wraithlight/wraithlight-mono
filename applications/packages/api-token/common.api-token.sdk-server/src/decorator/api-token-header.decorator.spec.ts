import { IDecoratorFactory } from "@wraithlight/core.node";

const filterDecoratorSpy = jest.fn();

jest.mock("@wraithlight/core.node", () => {
  return {
    FilterDecorator: filterDecoratorSpy
  }
});

import { ApiTokenHeader } from "./api-token-header.decorator";

describe("ApiTokenHeaderSpecs", () => {

  let decorator: IDecoratorFactory<unknown>;
  const MOCK_TOKENS = ["token-1", "token-2"];

  describe("given the decorator is initialized", () => {
    beforeAll(() => {
      decorator = ApiTokenHeader(MOCK_TOKENS);
    });
    describe("when i call it", () => {
      it("should call the FilterDecorator utility", () => {
        expect(filterDecoratorSpy).toHaveBeenCalled();
        expect(filterDecoratorSpy).toHaveBeenCalledTimes(1);
        expect(filterDecoratorSpy).toHaveBeenCalledWith(expect.any(Function));
      });
    });
  });
});
