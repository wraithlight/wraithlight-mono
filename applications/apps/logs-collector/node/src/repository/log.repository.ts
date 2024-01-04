import { Guid } from "@wraithlight/core.guid";
import { Nullable } from "@wraithlight/core.nullable";

import { LogsCollectorDbContextFactory } from "./context";
import { LogDbo } from "./dbo";

export class LogRepository {

    private readonly _dbContext = LogsCollectorDbContextFactory.getAuthDbContext();

}
