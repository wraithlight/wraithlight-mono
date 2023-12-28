import { WRAITHLIGHT_AUTH_SESSION_TOKEN } from "@wraithlight/core.auth.constant";
import { LoginScope } from "@wraithlight/core.auth.types";
import { HttpCode } from "@wraithlight/core.http";
import {
    FilterDecorator,
    FilterResult,
    IDecoratorFactory
} from "@wraithlight/core.node";
import { Request } from "express";

import { ServerAuthService } from "../service";

export const Authorize = (scope: LoginScope): IDecoratorFactory<any> => FilterDecorator(async (
    request: Request
) => {
    const token = request.headers[WRAITHLIGHT_AUTH_SESSION_TOKEN] as string;
    if (!token) {
        const data: FilterResult = {
            success: false,
            errorHttpCode: HttpCode.Unauthorized
        };
        return data;
    }
    const service = new ServerAuthService();
    const result = await service.validateSession(token, scope);
    if (!result.success) {
        const data: FilterResult = {
            success: false,
            errorHttpCode: HttpCode.Unauthorized
        };
        return data;
    }

    const data: FilterResult = {
        success: true
    };
    return data;
});
