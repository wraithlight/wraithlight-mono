const hasSpy = jest.fn();
const getSpy = jest.fn();
const resetSpy = jest.fn();

jest.mock("@wraithlight/framework.dictionary", () => {
  return {
    Dictionary: jest.fn().mockImplementation(() => {
      return {
        has: hasSpy.mockImplementation(() => true),
        get: getSpy.mockImplementation(() => {
          return {
            reset: resetSpy
          }
        }),
      }
    })
  }
});

import { MemoizeService } from "./memoize.service";

describe("MemoizeServiceSpecs", () => {

  const MOCK_TOKEN = "iamatoken";
  let service: MemoizeService;

  describe("given the service is initialized", () => {

    service = MemoizeService.getInstance();

    describe("when i call `reset`", () => {
      beforeAll(() => {
        service.reset(MOCK_TOKEN);
      });
      it("should check if the given key exists", () => {
        expect(hasSpy).toHaveBeenCalled();
        expect(hasSpy).toHaveBeenCalledTimes(1);
        expect(hasSpy).toHaveBeenCalledWith(MOCK_TOKEN);
      });
      it("should read the given key", () => {
        expect(getSpy).toHaveBeenCalled();
        expect(getSpy).toHaveBeenCalledTimes(1);
        expect(getSpy).toHaveBeenCalledWith(MOCK_TOKEN);
      });
      it("should call the underlying dictionary", () => {
        expect(resetSpy).toHaveBeenCalled();
        expect(resetSpy).toHaveBeenCalledTimes(1);
        expect(resetSpy).toHaveBeenCalledWith();
      });
    });
  });
});
