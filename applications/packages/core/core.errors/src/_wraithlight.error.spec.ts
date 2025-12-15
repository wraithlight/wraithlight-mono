import { HttpCode } from "@wraithlight/core.http";
import { WraithlightError } from "./_wraithlight.error"

class TestError extends WraithlightError {
  public statusCode = HttpCode.Accepted;
  public statusMessage = "E_MOCK_MESSAGE";
}

describe("WraithlightErrorSpecs", () => {
  const MOCK_TYPE = "error type";
  const MOCK_MESSAGE = "error message";

  describe("given the error is initialized", () => {
    const error = new TestError(MOCK_TYPE, MOCK_MESSAGE)
    describe("when i throw it", () => {
      it("should be thrown", () => {
        expect(() => { throw error }).toThrowError(error);
      });
    })
  })
})