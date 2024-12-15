import {
  OperationResultError,
  OperationResultSuccess
} from "./operation-result.type";

export class OperationResultFactory {

  public static success<T = undefined>(
    payload: T
  ): OperationResultSuccess<T> {
    return new OperationResultSuccess(payload);
  }

  public static error(
    ...errors: ReadonlyArray<string>
  ): OperationResultError {
    return new OperationResultError(...errors);
  }

}
