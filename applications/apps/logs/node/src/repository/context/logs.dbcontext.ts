import { DbContext, DbSet } from "@wraithlight/core.sql";

import {
    LogsDbo
} from "../dbo";

export class LogsDbContext extends DbContext {

    public Logs = new DbSet<LogsDbo>(this, "Logs");

}
