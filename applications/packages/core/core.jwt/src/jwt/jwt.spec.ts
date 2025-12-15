const signSpy = jest.fn();
const decodeSpy = jest.fn();

jest.mock("jwt-encrypt", () => {
  return {
    sign: signSpy,
    decode: decodeSpy,
  }
})

import { CoreJWT } from "./jwt";
import { ALGORITHM } from "./jwt.const";

describe("CoreJWTSpecs", () => {

  const MOCK_TOKEN = "";
  const MOCK_PAYLOAD = {};
  const MOCK_IV = "";
  const MOCK_KEY = "";
  const MOCK_SECRET = "";
  const MOCK_EXPIRY = 5;

  describe("given the utility is initialized", () => {
    describe("when i call encrypt", () => {
      beforeEach(() => {
        CoreJWT.encrypt(
          MOCK_PAYLOAD,
          MOCK_IV,
          MOCK_KEY,
          MOCK_SECRET,
          MOCK_EXPIRY
        );
      });
      it("should call the underlying chyper", () => {
        expect(signSpy).toHaveBeenCalled();
        expect(signSpy).toHaveBeenCalledTimes(1);
        expect(signSpy).toHaveBeenCalledWith(
          MOCK_PAYLOAD,
          MOCK_SECRET,
          { iv: MOCK_IV, key: MOCK_KEY, algorithm: ALGORITHM },
          { expiresIn: `${MOCK_EXPIRY}min` }
        );
      });
    });
    describe("when i call decrypt", () => {
      beforeEach(() => {
        CoreJWT.decrypt(
          MOCK_TOKEN,
          MOCK_IV,
          MOCK_KEY
        );
      });
      it("should call the underlying chyper", () => {
        expect(decodeSpy).toHaveBeenCalled();
        expect(decodeSpy).toHaveBeenCalledTimes(1);
        expect(decodeSpy).toHaveBeenCalledWith(
          MOCK_TOKEN,
          {
            iv: MOCK_IV,
            key: MOCK_KEY,
            algorithm: ALGORITHM
          }
        );
      });
    });
  });
});
