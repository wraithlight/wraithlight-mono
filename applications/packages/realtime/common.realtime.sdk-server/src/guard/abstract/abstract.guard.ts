import { IncomingMessage } from "http";

import {
    InternalServerError,
    UnauthorizedError
} from "@wraithlight/core.errors";

import { RTNextFunction, SocketGuard } from "../../provider";

export const RTAbstractGuard = (
    handle: (request: IncomingMessage) => boolean | Promise<boolean>
): SocketGuard => async (request: IncomingMessage, next: RTNextFunction) => {
    try {
        const result = await handle(request);

        if (!result) {
            next(new UnauthorizedError());
            return;
        }
    } catch {
        next(new InternalServerError());
        return;
    }
};
