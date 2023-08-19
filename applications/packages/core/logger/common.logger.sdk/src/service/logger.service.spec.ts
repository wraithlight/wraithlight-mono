import { DEFAULT_CONFIG } from "./logger.const";
import { LoggerService } from "./logger.service";

describe("LoggerServiceSpecs", () => {

    let instance: LoggerService;

    describe("given the service is configured", () => {

        describe("when i call `getInstance()`", () => {

            describe("without a param", () => {

                instance = LoggerService.getInstance();

                it("should return an object with the default config", () => {
                    expect(instance["_config"]).toBe(DEFAULT_CONFIG);
                });

                it("should return an object with the default logger", () => {
                    expect(instance["_logger"]).toBe(console);
                });

            });

        });

    });

});
