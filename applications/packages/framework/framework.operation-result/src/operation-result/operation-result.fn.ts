import {
    OperationResult,
    OperationResultError,
    OperationResultSuccess
} from "./operation-result.type";

export function isSuccessResult<T>(
    operationResultLike: OperationResult<T>
): operationResultLike is OperationResultSuccess<T> {
    return operationResultLike.isSuccess
}

export function isErrorResult<T>(
    operationResultLike: OperationResult<T>
): operationResultLike is OperationResultError {
    return !operationResultLike.isSuccess
}
