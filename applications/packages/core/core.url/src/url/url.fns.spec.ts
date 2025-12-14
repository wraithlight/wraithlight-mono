jest.mock("@wraithlight/framework.nullable");

import { isNil } from "@wraithlight/framework.nullable";

import { createUrl } from "./url.fns"

describe("createUrlSpecs", () => {
  const MOCK_BASE = "base-url";
  const MOCK_PORT = 1234;

  describe("given the utility is initialized", () => {
    describe("when i call it", () => {
      beforeEach(() => {
        createUrl(MOCK_BASE);
      });
      it("should call the underlying nil check", () => {
        expect(isNil).toHaveBeenCalled();
      });
      describe("and the port is present", () => {
        let result: string;
        beforeEach(() => {
          result = createUrl(MOCK_BASE, MOCK_PORT);
        });
        it("should return the concatenated url", () => {
          expect(result).toStrictEqual(`${MOCK_BASE}:${MOCK_PORT}`);
        });
      });
      describe("and the port is not present", () => {
        let result: string;
        beforeEach(() => {
          result = createUrl(MOCK_BASE);
        });
        it("should return the base api url", () => {
          expect(result).toStrictEqual(MOCK_BASE);
        });
      });
    })
  })
})
