import { IncomingMessage } from "http";
import { parse } from "url";

import { BadRequestError, UnauthorizedError } from "@wraithlight/core.errors";
import { isNil } from "@wraithlight/core.nullable";
import {
    RT_AUTH_QUERYPARAM_NAME
} from "@wraithlight/core.realtime.constants";

import { RTNextFunction, SocketGuard } from "../../provider";


export const RTQueryGuard = (
    tokens: ReadonlyArray<string>
): SocketGuard => (request: IncomingMessage, next: RTNextFunction) => {
    const url = request.url;

    if (isNil(url)) {
        next(new BadRequestError());
        return;
    }

    const parsedUrl = parse(
        url,
        true
    );
    const params = parsedUrl.query;
    const token = params[RT_AUTH_QUERYPARAM_NAME];

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
