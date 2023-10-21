import { Counter } from "./counter";

jest.mock("@wraithlight/core.dictionary");

import { Dictionary } from "@wraithlight/core.dictionary";

describe("CounterSpecs", () => {

    let counter: Counter;
    const MOCK_NAME = "counter";
    const MOCK_STEP = 1;
    const MOCK_INITIAL_VALUE = 0;

    const getSpy = jest.spyOn(Dictionary.prototype, "get");
    const setSpy = jest.spyOn(Dictionary.prototype, "set");
    const hasSpy = jest.spyOn(Dictionary.prototype, "has");

    describe("given the counter is initialized", () => {
        counter = Counter.getInstance(
            MOCK_NAME,
            MOCK_INITIAL_VALUE,
            MOCK_STEP
        );

        it("should check if the name is already used", () => {
            expect(hasSpy).toHaveBeenCalled();
            expect(hasSpy).toHaveBeenCalledTimes(1);
            expect(hasSpy).toHaveBeenCalledWith(MOCK_NAME);
        });
    });
});
