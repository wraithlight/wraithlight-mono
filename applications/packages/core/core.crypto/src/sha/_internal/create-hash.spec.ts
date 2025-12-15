jest.mock("crypto", () => ({
  createHash: jest.fn()
}));
import * as cryptoApi from "crypto";

import { SPEC_TEXT } from "../spec.const";

import { CreateHashAlgorithm } from "./create-hash.model";
import { hash } from "./create-hash";
import { DIGEST_HEX } from "./create-hash.const";

describe("CreateHashSpecs", () => {

  const digestSpy = jest.fn();
  const updateSpy = jest.fn().mockReturnValue({ digest: digestSpy });
  const mockHash = {
    update: updateSpy,
    digest: digestSpy
  } as unknown as cryptoApi.Hash;
  const createHashSpy = jest.spyOn(cryptoApi, "createHash").mockImplementation(() => mockHash);
  const mockAlgorithm: CreateHashAlgorithm = "sha256";

  describe("given the service is initialized", () => {
    describe("when calling it", () => {
      beforeEach(() => {
        hash(mockAlgorithm, SPEC_TEXT);
      });
      it("should call the underlying implementation", () => {
        expect(createHashSpy).toHaveBeenCalledWith(mockAlgorithm);
        expect(createHashSpy).toHaveBeenCalledTimes(1);
        expect(updateSpy).toHaveBeenCalledTimes(1);
        expect(updateSpy).toHaveBeenCalledWith(SPEC_TEXT);
        expect(digestSpy).toHaveBeenCalledTimes(1);
        expect(digestSpy).toHaveBeenCalledWith(DIGEST_HEX)
      });
    });
  });
});
