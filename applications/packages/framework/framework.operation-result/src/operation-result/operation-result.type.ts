/**
 * @internal
 * @deprecated - Do not use!
 * TODO: Do not export this.
 */
export interface OperationResultBase {
    isSuccess: boolean
}

export interface OperationResultSuccess<T = undefined>
    extends OperationResultBase {
    isSuccess: true;
    payload: T;
}

export interface OperationResultError extends OperationResultBase {
    isSuccess: false;
    errors: ReadonlyArray<string>
}

export type OperationResult<T> =
    OperationResultSuccess<T>
    | OperationResultError;

export type AsyncOperationResult<T> = Promise<OperationResult<T>>;
