import { ServerLogsConfigReader } from "@wraithlight/common.environment-static.server";
import { CoreEnvironment } from "@wraithlight/core.env.sdk";
import { Nullable } from "@wraithlight/framework.nullable";

import { LogsDbContext } from "./logs.dbcontext";

export class LogsDbContextFactory {

  private static _dbContext: Nullable<LogsDbContext>;
  private static readonly _configReader = ServerLogsConfigReader
    .getInstance(CoreEnvironment.getEnvironmentType())
    ;

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
