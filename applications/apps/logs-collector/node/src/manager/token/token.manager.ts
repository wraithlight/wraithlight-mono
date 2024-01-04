import { Nullable, isNil } from "@wraithlight/core.nullable";

import { ApplicationService, TokenService } from "../../service";

import { DEFAULT_APPLICATION_NAME, DEFAULT_USER_NAME } from "./token.const";
import { IToken } from "./token.model";
import { TokenType } from "../../_internal";

export class TokenManager {

    private readonly _tokenService = new TokenService();
    private readonly _applicationService = new ApplicationService();

    public async isTokenValid(
        tokenId: string,
        tokenSecret: string,
        type: TokenType
    ): Promise<boolean> {
        return this._tokenService.isThereActiveTokenWith(
            tokenId,
            tokenSecret,
            type
        );
    }

    public async getApplicationIdForToken(
        tokenId: string,
        tokenSecret: string
    ): Promise<number> {
        return this._tokenService.getApplicationIdFor(tokenId, tokenSecret);
    }

    public async list(): Promise<ReadonlyArray<IToken>> {
        const tokens = await this._tokenService.listAllTokens();
        const applicationNames = await this._applicationService
            .findAllApplicationNames();
        return tokens.map(m => ({
            id: m.id,
            applicationId: m.applicationId,
            applicationName: applicationNames
                .find(o => o.id === m.id)?.name
                ?? DEFAULT_APPLICATION_NAME,
            isActive: m.isActive,
            tokenId: m.tokenId,
            tokenSecret: m.tokenSecret,
            tokenType: m.tokenType,
            createdAt: m.createdAt,
            createdBy: m.createdBy,
            createdByName: DEFAULT_USER_NAME
        }));
    }

    public async listByApplicationId(
        applicationId: number
    ): Promise<ReadonlyArray<IToken>> {
        const tokens = await this._tokenService.listAllTokenForApplication(applicationId);
        const applicationName = await this._applicationService.findApplicationNameById(applicationId);

        return tokens.map(m => ({
            id: m.id,
            applicationId: m.applicationId,
            applicationName: applicationName ?? DEFAULT_APPLICATION_NAME,
            isActive: m.isActive,
            tokenId: m.tokenId,
            tokenSecret: m.tokenSecret,
            tokenType: m.tokenType,
            createdAt: m.createdAt,
            createdBy: m.createdBy,
            createdByName: DEFAULT_USER_NAME
        }));
    }

    public async findDetailsById(id: number): Promise<Nullable<IToken>> {
        const token = await this._tokenService.findTokenById(id);
        if (isNil(token)) {
            return undefined;
        }
        const applicationName = await this._applicationService.findApplicationNameById(token.applicationId);
        return {
            id: token.id,
            applicationId: token.applicationId,
            applicationName: applicationName ?? DEFAULT_APPLICATION_NAME,
            isActive: token.isActive,
            tokenId: token.tokenId,
            tokenSecret: token.tokenSecret,
            tokenType: token.tokenType,
            createdAt: token.createdAt,
            createdBy: token.createdBy,
            createdByName: DEFAULT_USER_NAME
        }
    }

    // public async delete(id: string): Promise<boolean> {

    // }

    // public async markAsActive(id: string): Promise<void> {

    // }

    // public async markAsInactive(id: string): Promise<void> {

    // }

    // public updateDetails(id: number, model: unknown): Promise<void> {

    // }

    // public async create(entry: unknown): Promise<IToken> {

    // }

}
