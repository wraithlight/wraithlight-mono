import { parse } from "url";

import { isNil } from "@wraithlight/core.nullable";
import {
    RT_AUTH_QUERYPARAM_NAME
} from "@wraithlight/core.realtime.constants";

import { SocketGuard } from "../../provider";
import { RTAbstractGuard } from "../abstract";

export const RTQueryGuard = (
    tokens: ReadonlyArray<string>
): SocketGuard => RTAbstractGuard((request) => {
    const url = request.url;

    if (isNil(url)) {
        return false;
    }

    const parsedUrl = parse(
        url,
        true
    );
    const params = parsedUrl.query;
    const token = params[RT_AUTH_QUERYPARAM_NAME];

    if (isNil(token)) {
        return false;
    }

    if (Array.isArray(token)) {
        return false;
    }

    if (!tokens.includes(token)) {
        return false;
    }

    return true;
});
