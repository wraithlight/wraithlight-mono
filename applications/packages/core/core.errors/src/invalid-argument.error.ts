import { WraithlightError } from "./_wraithlight.error";

export class InvalidArgumentError extends WraithlightError {
    constructor(
        argumentName: string
    ) {
        super("InvalidArgumentError", `Argument: '${argumentName}'`);
    }
}
