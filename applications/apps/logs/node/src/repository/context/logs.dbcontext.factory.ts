import { Nullable } from "@wraithlight/core.types";
import { ServerLogsConfigReader } from "@wraithlight/common.environment-static.server";
import { getEnvironment } from "@wraithlight/core.env";

import { LogsDbContext } from "./logs.dbcontext";

export class LogsDbContextFactory {

    private static _dbContext: Nullable<LogsDbContext>;
    private static _configReader = ServerLogsConfigReader.getInstance(getEnvironment());

    public static getAuthDbContext(): LogsDbContext {
        if (!this._dbContext) {
            this._dbContext = this.createDbContext();
        }
        return this._dbContext;
    }

    private static createDbContext(): LogsDbContext {
        return new LogsDbContext(
            this._configReader.get(x => x.database.host),
            this._configReader.get(x => x.database.port),
            this._configReader.get(x => x.database.username),
            this._configReader.get(x => x.database.password),
            this._configReader.get(x => x.database.database)
        );
    }

}
