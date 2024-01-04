import { FilterDecorator, IDecoratorFactory } from "@wraithlight/core.node";
import {
    API_TOKEN_ID,
    API_TOKEN_SECRET
} from "@wraithlight/core.api-token.constants";
import { Request } from "express";
import { HttpCode } from "@wraithlight/core.http";

import { TokenManager } from "../../manager";
import { TokenType } from "../../_internal";

const manager = new TokenManager();

export const RequireApiToken = (type: TokenType): IDecoratorFactory<any> => FilterDecorator(async(
    req: Request
) => {
    const tokenId = req.get(API_TOKEN_ID);
    const tokenSecret = req.get(API_TOKEN_SECRET);
    if (!tokenId) {
        return {
            success: false,
            errorHttpCode: HttpCode.Unauthorized
        }
    }
    if (!tokenSecret) {
        return {
            success: false,
            errorHttpCode: HttpCode.Unauthorized
        }
    }
    const isTokenValid = manager.isTokenValid(tokenId, tokenSecret);
    if (!isTokenValid) {
        return {
            success: false,
            errorHttpCode: HttpCode.Unauthorized
        }
    }
    try {
        const applicationId = manager.getApplicationIdForToken(tokenId, tokenSecret);
        req.body["applicationId"] = applicationId;
    } catch {
        return {
            success: false,
            errorHttpCode: HttpCode.NotFound
        }
    }
    return {
        success: true
    };
});
