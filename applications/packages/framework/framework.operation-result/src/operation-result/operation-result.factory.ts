import {
    OperationResultError,
    OperationResultSuccess
} from "./operation-result.type";

export class OperationResultFactory {

    public static success<T = undefined>(
        payload: T
    ): OperationResultSuccess<T> {
        return {
            isSuccess: true,
            isError: false,
            payload: payload
        };
    }

    public static error(
        ...errors: ReadonlyArray<string>
    ): OperationResultError {
        return {
            isSuccess: false,
            isError: true,
            errors: errors
        };
    }

}
