jest.mock("@wraithlight/core.random-number");

import { randomNumberBetween } from "@wraithlight/core.random-number";
import { randomBoolean } from "./random";

describe("randomBooleanSpecs", () => {
    describe("given the utility is initialized", () => {
        describe("when i call it", () => {
            let result: boolean;
            beforeEach(() => {
                result = randomBoolean();
            });
            it("should call the underlying random nubmer function", () => {
                expect(randomNumberBetween).toHaveBeenCalled();
                expect(randomNumberBetween).toHaveBeenCalledTimes(1);
                expect(randomNumberBetween).toHaveBeenCalledWith();
            });
            it("should return a boolean value", () => {
                expect([true, false].includes(result)).toBe(true);
            });
        });
    });
});
