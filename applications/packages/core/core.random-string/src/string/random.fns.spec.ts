import { generateRandomString } from "./random.fns";
import { LOWERCASE_ALPHABET } from "./random.fns.const";

jest.mock("@wraithlight/core.random-number", () => {
    return {
        randomNumberBetween: jest.fn().mockImplementation(() => 0)
    }
});

import { randomNumberBetween } from "@wraithlight/core.random-number";

describe("generateRandomStringSpecs", () => {

    const MOCK_LENGTH = 8;
    const MOCK_ALPHABET = LOWERCASE_ALPHABET;

    describe("given the utility is initialized", () => {
        describe("when i call it", () => {
            let result: string;
            beforeEach(() => {
                result = generateRandomString(MOCK_LENGTH, MOCK_ALPHABET.split(""));
            });
            it("should call the random number fn", () => {
                expect(randomNumberBetween).toHaveBeenCalled();
                expect(randomNumberBetween).toHaveBeenCalledWith(0, MOCK_ALPHABET.length - 1);
            });
            it("should return a random string", () => {
                const RESULT = "aaaaaaaa";
                expect(result).toStrictEqual(RESULT);
            });
        })
    })
});
