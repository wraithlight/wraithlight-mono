import { IncomingMessage } from "http";

import { BadRequestError, UnauthorizedError } from "@wraithlight/core.errors";
import { isNil } from "@wraithlight/core.nullable";
import {
    RT_AUTH_HEADER_NAME
} from "@wraithlight/core.realtime.constants";

import { RTNextFunction, SocketGuard } from "../../provider";

export const RTHeaderGuard = (
    tokens: ReadonlyArray<string>
): SocketGuard => (request: IncomingMessage, next: RTNextFunction) => {
    console.log(request.headers);
    console.log(request.headers[RT_AUTH_HEADER_NAME.toLowerCase()]);
    const token = request.headers[RT_AUTH_HEADER_NAME.toLowerCase()];

    if (isNil(token)) {
        next(new BadRequestError());
        return;
    }

    if (Array.isArray(token)) {
        next(new BadRequestError());
        return;
    }

    if (!tokens.includes(token)) {
        next(new UnauthorizedError());
        return;
    }

    next();
};
