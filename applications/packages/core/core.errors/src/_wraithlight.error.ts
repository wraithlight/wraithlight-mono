export abstract class WraithlightError extends Error {
    constructor(
        type: string,
        message: string
    ) {
        super(`WraithlightError::${type}\n${message}`);
    }
}
