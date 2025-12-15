import { SHA512 } from "./512";
import * as hashApi from "./_internal/create-hash";
import { SPEC_TEXT } from "./spec.const";

describe("SHA512Specs", () => {

  const hashSpy = jest.spyOn(hashApi, "hash").mockImplementation((str: string) => str);

  describe("given the utility fn is initialized", () => {
    describe("when calling it", () => {
      beforeEach(() => {
        const _ = SHA512(SPEC_TEXT);
      });
      it("should call the underlying hash function", () => {
        expect(hashSpy).toHaveBeenCalledTimes(1);
        expect(hashSpy).toBeCalledWith("sha512", SPEC_TEXT);
      });
    });
  });
});
