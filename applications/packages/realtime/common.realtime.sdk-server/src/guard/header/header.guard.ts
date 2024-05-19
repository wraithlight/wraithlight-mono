import { isNil } from "@wraithlight/core.nullable";
import {
    RT_AUTH_HEADER_NAME
} from "@wraithlight/core.realtime.constants";

import { SocketGuard } from "../../provider";
import { RTAbstractGuard } from "../abstract";

export const RTHeaderGuard = (
    tokens: ReadonlyArray<string>
): SocketGuard => RTAbstractGuard((request) => {
    const token = request.headers[RT_AUTH_HEADER_NAME.toLowerCase()];

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
