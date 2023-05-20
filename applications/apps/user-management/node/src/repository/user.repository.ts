import { Nullable } from "@wraithlight/core.types";

import { AuthDbContextFactory } from "./context";
import { UserDbo } from "./dbo";

export class UserRepository {

    private readonly _dbContext = AuthDbContextFactory.getAuthDbContext();

    public async update(userId: string, model: Partial<UserDbo>): Promise<void> {
        this._dbContext.Users
            .update("id", userId, model)
            .run()
        ;
    }

    public async listAll(): Promise<Array<UserDbo>> {
        return this._dbContext.Users
            .select()
            .orderByAsc("username")
            .toList()
        ;
    }

    public async findUserById(id: string): Promise<Nullable<UserDbo>> {
        return this._dbContext.Users
            .select()
            .where("id", id)
            .first()
        ;
    }

}
