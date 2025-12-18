import { LogsDbContextFactory } from "./context";
import { LogsDbo } from "./dbo";

export class LogsRepository {

  private readonly _dbContext = LogsDbContextFactory.getAuthDbContext();

  public async insert(log: LogsDbo): Promise<void> {
    return this._dbContext.Logs
      .insert(log)
      .run()
      ;
  }

}
