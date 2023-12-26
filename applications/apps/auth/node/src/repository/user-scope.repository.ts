import { Nullable } from "@wraithlight/core.nullable";
import { Guid } from "@wraithlight/core.guid";

import { AuthDbContextFactory } from "./context";
import { UserScopeDbo } from "./dbo";

export class UserScopeRepository {

    private readonly _dbContext = AuthDbContextFactory.getAuthDbContext();

    public async add(dbo: UserScopeDbo): Promise<void> {
        this._dbContext.UserScope
            .insert(dbo)
            .run()
        ;
    }

    public async find(userId: Guid, scopeId: Guid): Promise<Nullable<UserScopeDbo>> {
        return this._dbContext.UserScope
            .select()
            .where("userId", userId)
            .where("scopeId", scopeId)
            .first()
        ;
    }

}
