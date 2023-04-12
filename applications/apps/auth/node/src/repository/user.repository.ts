import { Nullable } from "@wraithlight/core.types";

import { AuthDbContextFactory } from "./context";
import { UserDbo } from "./dbo";

export class UserRepository {

    private readonly _dbContext = AuthDbContextFactory.getAuthDbContext();

    public async add(dbo: UserDbo): Promise<void> {
        this._dbContext.Users
            .insert(dbo)
            .run()    
        ;
    }

    public findUserByName(username: string): Promise<Nullable<UserDbo>> {
        return this._dbContext.Users
            .select()
            .where("username", username)
            .first()
        ;
    }

    public async findUserByEmailAddress(emailAddress: string): Promise<Nullable<UserDbo>> {
        return this._dbContext.Users
            .select()
            .where("emailAddress", emailAddress)
            .first()
        ;
    }

}
