import { DbContext, DbSet } from "@wraithlight/core.orm";

import { CommunicationDbo } from "./dbo";

export class NotifierProxyDbContext extends DbContext {
  public readonly Communication = new DbSet<CommunicationDbo>(this, "CommunicationQueue");
}
