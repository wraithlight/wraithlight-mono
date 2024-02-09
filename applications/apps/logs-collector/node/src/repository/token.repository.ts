import { Nullable } from "@wraithlight/core.nullable";

import { LogsCollectorDbContextFactory } from "./context";
import { TokenDbo } from "./dbo";

export class TokenRepository {

    private readonly _dbContext = LogsCollectorDbContextFactory
        .getAuthDbContext();

    public async findTokenByIdAndSecret(
        tokenId: string,
        tokenSecret: string
    ): Promise<Nullable<TokenDbo>> {
        return this._dbContext.Tokens
            .select()
            .where("tokenId", tokenId)
            .where("tokenSecret", tokenSecret)
            .where("isActive", true)
            .first()
        ;
    }

    public async findAll(): Promise<ReadonlyArray<TokenDbo>> {
        return this._dbContext.Tokens
            .select()
            .toList()
        ;
    }

    public async findAllByApplicationId(
        applicationId: number
    ): Promise<ReadonlyArray<TokenDbo>> {
        return this._dbContext.Tokens
            .select()
            .where("applicationId", applicationId)
            .toList()
        ;
    }

    public async findById(id: number): Promise<Nullable<TokenDbo>> {
        return this._dbContext.Tokens
            .select()
            .where("id", id)
            .first()
        ;
    }

    public async create(entry: TokenDbo): Promise<void> {
        return this._dbContext.Tokens
            .insert(entry)
            .run()
        ;
    }

    public async update(
        id: number,
        entry: Omit<Partial<TokenDbo>, "id">
    ): Promise<void> {
        return this._dbContext.Tokens
            .update("id", id, entry)
            .run()
        ;
    }

    public async delete(id: number): Promise<void> {
        return this._dbContext.Tokens
            .delete()
            .where("id", id)
            .run()
        ;
    }

}
