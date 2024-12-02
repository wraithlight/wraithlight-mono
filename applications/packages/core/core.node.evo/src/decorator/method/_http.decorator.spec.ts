const addMethodSpy = jest.fn();

jest.mock("../../handler-context", () => {
  return {
    HandlerContext: {
      addMethod: addMethodSpy
    }
  }
});

import { HttpVerb } from "@wraithlight/core.http";

import { HttpDecorator } from "./_http.decorator";

import { BaseController } from "../../base";

class MockController extends BaseController { }

describe("HttpDecoratorSpecs", () => {
  const MOCK_PATH = "/path";
  const MOCK_VERB = HttpVerb.DELETE;
  const MOCK_TARGET = new MockController();
  const MOCK_PROPERTY_KEY = "function";
  const MOCK_DESCRIPTOR_VALUE = {}

  describe("given the function is callable", () => {
    describe("when i call it", () => {
      beforeEach(() => {
        const decoratorFactory = HttpDecorator(
          MOCK_PATH,
          MOCK_VERB
        );
        decoratorFactory(
          MOCK_TARGET,
          MOCK_PROPERTY_KEY,
          MOCK_DESCRIPTOR_VALUE
        );
      });
      it("should call `HandlerContext`", () => {
        expect(addMethodSpy).toHaveBeenCalled();
        expect(addMethodSpy).toHaveBeenCalledTimes(1);
        expect(addMethodSpy).toHaveBeenCalledWith(MOCK_PROPERTY_KEY, MOCK_PATH, MOCK_VERB);
      });
    });
  });
});
