import { Nullable } from "@wraithlight/core.types";
import { Guid } from "@wraithlight/core.guid";

import { AuthDbContextFactory } from "./context";
import { ScopeDbo } from "./dbo";

export class ScopeRepository {

    private readonly _dbContext = AuthDbContextFactory.getAuthDbContext();

    public async findById(scopeId: Guid): Promise<Nullable<ScopeDbo>> {
        return this._dbContext.Scope
            .select()
            .where("id", scopeId)
            .first()
        ;
    }

}
