import { deepmergeFacade } from "./deepmerge.fn"

jest.mock("deepmerge-ts", () => {
  return {
    deepmerge: jest.fn().mockImplementation(() => { })
  }
})
import { deepmerge } from "deepmerge-ts";

describe("deepmergeFacadeSpecs", () => {
  const MOCK_TARGET = {};
  const MOCK_ADDITIONAL = {};

  describe("given the utility is initialized", () => {
    describe("when i call it", () => {
      beforeEach(() => {
        deepmergeFacade(MOCK_TARGET, MOCK_ADDITIONAL)
      })
      it("should call the underlying method", () => {
        expect(deepmerge).toHaveBeenCalled();
        expect(deepmerge).toHaveBeenCalledTimes(1);
        expect(deepmerge).toHaveBeenCalledWith(MOCK_TARGET, MOCK_ADDITIONAL);
      })
    })
  })
})
