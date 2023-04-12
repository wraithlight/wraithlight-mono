import { Nullable } from "@wraithlight/core.types";
import { SERVER_STATIC } from "@wraithlight/core.env-static";

import { LogsDbContext } from "./logs.dbcontext";

export class LogsDbContextFactory {

    private static _dbContext: Nullable<LogsDbContext>;

    public static getAuthDbContext(): LogsDbContext {
        if (!this._dbContext) {
            this._dbContext = this.createDbContext();
        }
        return this._dbContext;
    }

    private static createDbContext(): LogsDbContext {
        return new LogsDbContext(
            SERVER_STATIC.logs.database.host,
            SERVER_STATIC.logs.database.port,
            SERVER_STATIC.logs.database.username,
            SERVER_STATIC.logs.database.password,
            SERVER_STATIC.logs.database.database
        );
    }

}
