import {
    API_TOKEN_ID,
    API_TOKEN_SECRET
} from "@wraithlight/core.api-token.constants";
import { HttpCode } from "@wraithlight/core.http";
import { FilterDecorator, IDecoratorFactory } from "@wraithlight/core.node";
import { Request } from "express";

import { TokenType } from "../../_internal";
import { TokenManager } from "../../manager";

import { ApplicationIdContainer } from "./require-api-token.model";

const manager = new TokenManager();

export const RequireApiToken = (type: TokenType): IDecoratorFactory<any> =>
    FilterDecorator(async(
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
        const isTokenValid = manager.isTokenValid(tokenId, tokenSecret, type);
        if (!isTokenValid) {
            return {
                success: false,
                errorHttpCode: HttpCode.Unauthorized
            }
        }
        try {
            const applicationId = await manager.getApplicationIdForToken(
                tokenId,
                tokenSecret
            );
            (req.body as ApplicationIdContainer).applicationId = applicationId;
        } catch {
            return {
                success: false,
                errorHttpCode: HttpCode.NotFound
            }
        }
        return {
            success: true
        };
    }
);
