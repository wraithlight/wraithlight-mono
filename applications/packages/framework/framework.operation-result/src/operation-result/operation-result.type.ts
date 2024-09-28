export interface OperationResultBase {
  isSuccess: boolean;
  isError: boolean;
}

export interface OperationResultSuccess<T = undefined>
  extends OperationResultBase {
    isSuccess: true;
    isError: false;
    payload: T;
}

export interface OperationResultError extends OperationResultBase {
  isSuccess: false;
  isError: true;
  errors: ReadonlyArray<string>
}

export type OperationResult<T> =
  OperationResultSuccess<T>
  | OperationResultError;

export type AsyncOperationResult<T> = Promise<OperationResult<T>>;
