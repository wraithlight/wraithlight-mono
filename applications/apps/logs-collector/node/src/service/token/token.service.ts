import { Nullable, isNil } from "@wraithlight/core.nullable";

import { TokenType } from "../../_internal";
import { TokenRepository } from "../../repository";

import { TokenMapper } from "./token.mapper";
import { TokenModel } from "./token.model";


export class TokenService {

    private readonly _tokenRepository = new TokenRepository();

    public async isThereActiveTokenWith(
        tokenId: string,
        tokenSecret: string,
        type: TokenType
    ): Promise<boolean> {
        return this._tokenRepository
            .findTokenByIdAndSecret(tokenId, tokenSecret)
            .then(m => !isNil(m) && m.tokenType === type)
    }

    public async getApplicationIdFor(
        tokenId: string,
        tokenSecret: string
    ): Promise<number> {
        return this._tokenRepository
        .findTokenByIdAndSecret(tokenId, tokenSecret)
        .then(m => {
            if (isNil(m)) {
                // TODO: Refactor this.
                throw `No token was found with ID: '${tokenId}' SID:'${tokenSecret}'`;
            }
            return m.applicationId;
        })
    }

    public async listAllTokens(): Promise<ReadonlyArray<TokenModel>> {
        return this._tokenRepository
            .findAll()
            .then(m => TokenMapper.mapListToModel(m))
        ;
    }

    public async listAllTokenForApplication(
        applicationId: number
    ): Promise<ReadonlyArray<TokenModel>> {
        return this._tokenRepository
            .findAllByApplicationId(applicationId)
            .then(m => TokenMapper.mapListToModel(m))
        ;
    }

    public async findTokenById(id: number): Promise<Nullable<TokenModel>> {
        return this._tokenRepository
            .findById(id)
            .then(m => !isNil(m) ? TokenMapper.mapItemToModel(m) : undefined)
    }

}
