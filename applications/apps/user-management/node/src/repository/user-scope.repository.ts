import { AuthDbContextFactory } from "./context";
import { UserScopeDbo } from "./dbo";

export class UserScopeRepository {

    private readonly _dbContext = AuthDbContextFactory.getAuthDbContext();

    public async findByScopeId(scopeId: string): Promise<Array<UserScopeDbo>> {
        return this._dbContext.UserScope
            .select()
            .where("scopeId", scopeId)
            .toList()
        ;
    }

    public async findByUserId(userId: string): Promise<Array<UserScopeDbo>> {
        return this._dbContext.UserScope
            .select()
            .where("userId", userId)
            .toList()
        ;
    }

    public async deleteByUserId(userId: string): Promise<void> {
        return this._dbContext.UserScope
            .delete()
            .where("userId", userId)
            .run()
        ;
    }

    public async add(entity: UserScopeDbo): Promise<void> {
        return this._dbContext.UserScope
            .insert(entity)
            .run()
        ;
    }

}
