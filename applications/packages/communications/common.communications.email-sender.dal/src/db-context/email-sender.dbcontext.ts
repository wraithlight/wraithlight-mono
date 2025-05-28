import { DbContext, DbSet } from "@wraithlight/core.orm";

import { CommunicationQueueDbo } from "./dbo";

export class EmailSenderDbContext extends DbContext {
  public readonly CommunicationQueue = new DbSet<CommunicationQueueDbo>(this, "CommunicationQueue");
}
