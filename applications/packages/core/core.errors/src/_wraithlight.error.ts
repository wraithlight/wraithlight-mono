import { UNKNOWN_ERROR } from "./error";

export abstract class WraithlightError extends Error {
    constructor(
        type: string,
        message: string,
        public readonly statusCode = 500,
        public readonly statusMessage = UNKNOWN_ERROR
    ) {
        super(`WraithlightError::${type}\n${message}`);
    }
}
