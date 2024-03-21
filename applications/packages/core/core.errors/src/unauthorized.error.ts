import { WraithlightError } from "./_wraithlight.error";

export class UnauthorizedError extends WraithlightError {
    constructor() {
        super("UnauthorizedError", "E_UNAUTHORIZED");
    }
}
