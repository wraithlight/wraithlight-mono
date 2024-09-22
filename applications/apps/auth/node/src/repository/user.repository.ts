import { Nullable } from "@wraithlight/core.nullable";

import { AuthDbContextFactory } from "./context";
import { UserDbo } from "./dbo";

export class UserRepository {

    private readonly _dbContext = AuthDbContextFactory.getAuthDbContext();

    public async add(
        dbo: UserDbo
    ): Promise<void> {
        const result = await this._dbContext.Users
            .insert(dbo)
            .run()
        ;

        console.log("result", JSON.stringify(result));
    }

    public async update(
        userId: string,
        model: Partial<UserDbo>
    ): Promise<void> {
        this._dbContext.Users
            .update(
                "id",
                userId,
                model
        )
            .run()
        ;
    }

    public async findUserByName(
        username: string
    ): Promise<Nullable<UserDbo>> {
        return this._dbContext.Users
            .select()
            .where(
                "username",
                username
            )
            .first()
        ;
    }

    public async findUserByEmailAddress(
        emailAddress: string
    ): Promise<Nullable<UserDbo>> {
        return this._dbContext.Users
            .select()
            .where(
                "emailAddress",
                emailAddress
            )
            .first()
        ;
    }

}
