import { Nullable } from "@wraithlight/core.types";
import { SERVER_STATIC } from "@wraithlight/core.env-static";

import { AuthDbContext } from "./auth.dbcontext";

export class AuthDbContextFactory {

    private static _dbContext: Nullable<AuthDbContext>;

    public static getAuthDbContext(): AuthDbContext {
        if (!this._dbContext) {
            this._dbContext = this.createDbContext();
        }
        return this._dbContext;
    }

    private static createDbContext(): AuthDbContext {
        return new AuthDbContext(
            SERVER_STATIC.auth.database.host,
            SERVER_STATIC.auth.database.port,
            SERVER_STATIC.auth.database.username,
            SERVER_STATIC.auth.database.password,
            SERVER_STATIC.auth.database.database
        );
    }

}
