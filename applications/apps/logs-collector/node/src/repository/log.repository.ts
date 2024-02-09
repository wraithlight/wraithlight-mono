import { LogsCollectorDbContextFactory } from "./context";

/**
 * @public - TODO: Remove this once the repository is being used.
 */
export class LogRepository {

    private readonly _dbContext = LogsCollectorDbContextFactory
        .getAuthDbContext();

}
