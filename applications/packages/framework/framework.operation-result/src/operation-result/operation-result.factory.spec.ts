import { OperationResultFactory } from "./operation-result.factory";
import { OperationResultBase } from "./operation-result.type";

describe("OperationResultFactorySpecs", () => {
  describe("given the utility is initialized", () => {
    describe("when i create a success result", () => {
      let result: OperationResultBase

      beforeEach(() => {
        result = OperationResultFactory.success(undefined)
      });
      it("should have isSuccess true", () => {
        expect(result.isSuccess).toBe(true)
      });
    });
    describe("when i create an error result", () => {
      let result: OperationResultBase

      beforeEach(() => {
        result = OperationResultFactory.error()
      });
      it("should have isSuccess false", () => {
        expect(result.isSuccess).toBe(false)
      });
    });
  });
});
