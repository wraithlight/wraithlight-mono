import { ILogger } from "@wraithlight/core.logger.types";
import { PackageJsonReader } from "./reader";
import { join } from "path";

const infoSpy = jest.fn();
const warnSpy = jest.fn();
const MOCK_LOGGER: ILogger = {
    debug: jest.fn(),
    info: infoSpy,
    warn: warnSpy,
    error: jest.fn()
}
const MOCK_DEFAULT_NAME = "name";
const MOCK_DEFAULT_VERSION = "version";

let MOCK_PATH = "";

describe("PackageJsonReaderSpecs", () => {
    let service: PackageJsonReader;
    describe("given the service is initialized", () => {
        beforeEach(() => {
            service = new PackageJsonReader(
                MOCK_PATH,
                MOCK_LOGGER,
                MOCK_DEFAULT_NAME,
                MOCK_DEFAULT_VERSION
            )
        });
        afterEach(() => {
            infoSpy.mockClear();
            warnSpy.mockClear();
        });
        describe("when the file exists", () => {
            beforeAll(() => {
                MOCK_PATH = join(__dirname, "../../package.json");
            });
            it("should log 2 info logs", () => {
                expect(infoSpy).toHaveBeenCalled();
                expect(infoSpy).toHaveBeenCalledTimes(2);
            });
        });
        describe("when the file doesnt exist", () => {
            beforeAll(() => {
                MOCK_PATH = join(__dirname, "../../fake-package.json");
            });
            it("shoud log an info and an error log", () => {
                expect(infoSpy).toHaveBeenCalled();
                expect(infoSpy).toHaveBeenCalledTimes(1);
                expect(warnSpy).toHaveBeenCalled();
                expect(warnSpy).toHaveBeenCalledTimes(1);
            });
        });
    });
});
