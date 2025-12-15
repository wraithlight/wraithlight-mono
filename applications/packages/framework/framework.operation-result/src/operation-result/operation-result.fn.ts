import {
  OperationResult,
  OperationResultError,
  OperationResultSuccess
} from "./operation-result.type";

/**
 * @deprecated Use the `.isSuccessTC()` extension instead.
 */
export function isSuccessResult<T>(
  operationResultLike: OperationResult<T>
): operationResultLike is OperationResultSuccess<T> {
  return operationResultLike.isSuccess;
}

/**
 * @deprecated Use the `.isErrorTC()` extension instead.
 */
export function isErrorResult<T>(
  operationResultLike: OperationResult<T>
): operationResultLike is OperationResultError {
  return !operationResultLike.isSuccess;
}
