import { HttpCode } from "@wraithlight/core.http";
import { FilterDecorator } from "@wraithlight/core.node";
import { LoginScope, SESSION_TOKEN_HEADER_NAME } from "@wraithlight/core.auth-common";
import { Request } from "express";

import { AuthClient } from "../client";

export const Authorize = (scope: LoginScope) => FilterDecorator(async (request: Request) => {
    const token = request.headers[SESSION_TOKEN_HEADER_NAME] as string;
    if (!token) {
        return {
            success: false,
            errorHttpCode: HttpCode.Unauthorized
        };
    }
    const service = new AuthClient();
    const result = await service.validate(token, scope);
    if (!result) {
        return {
            success: false,
            errorHttpCode: HttpCode.Unauthorized
        };
    }
    return {
        success: true
    };
});
