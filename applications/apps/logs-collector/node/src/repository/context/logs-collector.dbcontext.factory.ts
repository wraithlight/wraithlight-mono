import { ServerLogsCollectorConfigReader } from "@wraithlight/common.environment-static.server";
import { CoreEnvironment } from "@wraithlight/core.env";
import { Nullable } from "@wraithlight/core.nullable";

import { LogsCollectorDbContext } from "./logs-collector.dbcontext";

export class LogsCollectorDbContextFactory {

    private static _dbContext: Nullable<LogsCollectorDbContext>;
    private static readonly _configReader = ServerLogsCollectorConfigReader.getInstance(CoreEnvironment.getEnvironmentType());

    public static getAuthDbContext(): LogsCollectorDbContext {
        if (!this._dbContext) {
            this._dbContext = this.createDbContext();
        }
        return this._dbContext;
    }

    private static createDbContext(): LogsCollectorDbContext {
        return new LogsCollectorDbContext(
            this._configReader.get(x => x.database.host),
            this._configReader.get(x => x.database.port),
            this._configReader.get(x => x.database.username),
            this._configReader.get(x => x.database.password),
            this._configReader.get(x => x.database.database)
        );
    }

}
