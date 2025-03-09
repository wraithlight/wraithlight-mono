import { HttpCode } from "@wraithlight/core.http";

import { hasStatusCode } from "./request-handler.utils";

describe("RequestHandlerUtilsSpecs", () => {
  describe("hasStatusCode", () => {
    let MOCK_OBJECT: unknown;
    describe("given the utility is initialized", () => {
      describe("when i call it", () => {
        describe("and the parameter is not an object", () => {
          beforeEach(() => {
            MOCK_OBJECT = "fake";
          });
          it("should return false", () => {
            expect(hasStatusCode(MOCK_OBJECT)).toBe(false);
          });
        });
        describe("and the parameter does not have `statusCode`", () => {
          beforeEach(() => {
            MOCK_OBJECT = {};
          });
          it("should return false", () => {
            expect(hasStatusCode(MOCK_OBJECT)).toBe(false);
          });
        });
        describe("and the parameter has `statusCode`", () => {
          describe("and its boolean", () => {
            beforeEach(() => {
              MOCK_OBJECT = { statusCode: false };
            });
            it("should return false", () => {
              expect(hasStatusCode(MOCK_OBJECT)).toBe(false);
            });
          });
          describe("and its string", () => {
            beforeEach(() => {
              MOCK_OBJECT = { statusCode: "false" };
            });
            it("should return false", () => {
              expect(hasStatusCode(MOCK_OBJECT)).toBe(false);
            });
          });
          describe("and its an array", () => {
            beforeEach(() => {
              MOCK_OBJECT = { statusCode: [false] };
            });
            it("should return false", () => {
              expect(hasStatusCode(MOCK_OBJECT)).toBe(false);
            });
          });
          describe("and its an object", () => {
            beforeEach(() => {
              MOCK_OBJECT = { statusCode: { a: false } };
            });
            it("should return false", () => {
              expect(hasStatusCode(MOCK_OBJECT)).toBe(false);
            });
          });
          describe("and its `null`", () => {
            beforeEach(() => {
              MOCK_OBJECT = { statusCode: null };
            });
            it("should return false", () => {
              expect(hasStatusCode(MOCK_OBJECT)).toBe(false);
            });
          });
          describe("and its `undefined`", () => {
            beforeEach(() => {
              MOCK_OBJECT = { statusCode: undefined };
            });
            it("should return false", () => {
              expect(hasStatusCode(MOCK_OBJECT)).toBe(false);
            });
          });
          describe("and its -Infinity", () => {
            beforeEach(() => {
              MOCK_OBJECT = { statusCode: -Infinity };
            });
            it("should return false", () => {
              expect(hasStatusCode(MOCK_OBJECT)).toBe(false);
            });
          });
          describe("and its Infinity", () => {
            beforeEach(() => {
              MOCK_OBJECT = { statusCode: Infinity };
            });
            it("should return false", () => {
              expect(hasStatusCode(MOCK_OBJECT)).toBe(false);
            });
          });
          describe("and its NaN", () => {
            beforeEach(() => {
              MOCK_OBJECT = { statusCode: NaN };
            });
            it("should return false", () => {
              expect(hasStatusCode(MOCK_OBJECT)).toBe(false);
            });
          });
          describe("and its a valid HttpCode", () => {
            beforeEach(() => {
              MOCK_OBJECT = { statusCode: HttpCode.Accepted };
            });
            it("should return true", () => {
              expect(hasStatusCode(MOCK_OBJECT)).toBe(true);
            });
          });
          describe("and its a number", () => {
            beforeEach(() => {
              MOCK_OBJECT = { statusCode: 418 };
            });
            it("should return true", () => {
              expect(hasStatusCode(MOCK_OBJECT)).toBe(true);
            });
          });
        });
      });
    });
  });
});
