import { deepmergeFacade } from "@wraithlight/facade.deepmerge";

import { wlDeepmerge } from "./deepmerge.fn"

jest.mock("@wraithlight/facade.deepmerge", () => {
  return {
    deepmergeFacade: jest.fn().mockImplementation(() => ({}))
  }
})

describe("wlDeepmergeSpecs", () => {
  const MOCK_TARGET = {};
  const MOCK_ADDITIONAL = {};

  describe("given the utility is initialized", () => {
    describe("when i call it", () => {
      beforeEach(() => {
        wlDeepmerge(MOCK_TARGET, MOCK_ADDITIONAL)
      })
      it("should call the underlying method", () => {
        expect(deepmergeFacade).toHaveBeenCalled();
        expect(deepmergeFacade).toHaveBeenCalledTimes(1);
        expect(deepmergeFacade)
          .toHaveBeenCalledWith(MOCK_TARGET, MOCK_ADDITIONAL);
      })
    })
  })
})
