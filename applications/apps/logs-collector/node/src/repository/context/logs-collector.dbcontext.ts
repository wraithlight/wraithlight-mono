import { DbContext, DbSet } from "@wraithlight/core.orm";

import {
    ApplicationDbo,
    LogDbo,
    TokenDbo
} from "../dbo";

export class LogsCollectorDbContext extends DbContext {

    public Applications = new DbSet<ApplicationDbo>(this, "Application");
    public Logs = new DbSet<LogDbo>(this, "Log");
    public Tokens = new DbSet<TokenDbo>(this, "Token");

}
