import { Guid } from "@wraithlight/core.types";

import { AuthDbContextFactory } from "./context";
import { ScopeDbo } from "./dbo";

export class ScopeRepository {

    private readonly _dbContext = AuthDbContextFactory.getAuthDbContext();

    public async findById(scopeId: Guid): Promise<ScopeDbo> {
        return this._dbContext.Scope
            .select()
            .where("id", scopeId)
            .first()
        ;
    }

}
