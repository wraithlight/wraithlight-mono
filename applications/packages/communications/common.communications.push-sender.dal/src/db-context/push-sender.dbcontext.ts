import { DbContext, DbSet } from "@wraithlight/core.orm";

import { CommunicationQueueDbo } from "./dbo";

export class PushSenderDbContext extends DbContext {
  public readonly CommunicationQueue = new DbSet<CommunicationQueueDbo>(this, "CommunicationQueue");
}
