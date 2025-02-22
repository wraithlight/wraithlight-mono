import { Logger } from "./logger";

const debugSpy = jest.fn();
const infoSpy = jest.fn();
const warningSpy = jest.fn();
const errorSpy = jest.fn();

console.debug = debugSpy;
console.info = infoSpy;
console.warn = warningSpy;
console.error = errorSpy;

describe("LoggerSpecs", () => {

  let logger: Logger;

  describe("given the logger is initialized", () => {

    beforeAll(() => {
      logger = Logger.getInstance();
    });
    afterEach(() => {
      debugSpy.mockClear();
      infoSpy.mockClear();
      warningSpy.mockClear();
      errorSpy.mockClear();
    });

    describe("when i call `debug()`", () => {
      beforeEach(() => {
        logger.debug("debug");
      });
      it("should call the underlying console method", () => {
        expect(debugSpy).toHaveBeenCalled();
        expect(debugSpy).toHaveBeenCalledTimes(1);
      });
    });
    describe("when i call `info()`", () => {
      beforeEach(() => {
        logger.info("info");
      });
      it("should call the underlying console method", () => {
        expect(infoSpy).toHaveBeenCalled();
        expect(infoSpy).toHaveBeenCalledTimes(1);
      });
    });
    describe("when i call `warning()`", () => {
      beforeEach(() => {
        logger.warning("warning");
      });
      it("should call the underlying console method", () => {
        expect(warningSpy).toHaveBeenCalled();
        expect(warningSpy).toHaveBeenCalledTimes(1);
      });
    });
    describe("when i call `error()`", () => {
      beforeEach(() => {
        logger.error("error");
      });
      it("should call the underlying console method", () => {
        expect(errorSpy).toHaveBeenCalled();
        expect(errorSpy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
