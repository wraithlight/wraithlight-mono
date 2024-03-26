import { Guid } from "@wraithlight/core.guid";

import { AuthDbContextFactory } from "./context";
import { SessionDbo } from "./dbo";

export class SessionRepository {

    private readonly _dbContext = AuthDbContextFactory.getAuthDbContext();

    public async findByUserAndScope(
        userId: Guid,
        scopeId: Guid
    ): Promise<ReadonlyArray<SessionDbo>> {
        return this._dbContext.Session
            .select()
            .where(
                "userId",
                userId
            )
            .where(
                "scopeId",
                scopeId
            )
            .toList()
        ;
    }

    public async create(dbo: SessionDbo): Promise<void> {
        return this._dbContext.Session
            .insert(dbo)
            .run()
        ;
    }

    public async remove(id: Guid): Promise<void> {
        return this._dbContext.Session
            .delete()
            .where(
                "id",
                id)
            .run()
        ;
    }

    public async updateValidUntilAndToken(
        id: Guid,
        newToken: string,
        validUntil: Date
    ): Promise<void> {
        return this._dbContext.Session
            .update(
                "id",
                id,
                { validUntil: validUntil, token: newToken }
            )
            .run()
        ;
    }

}
