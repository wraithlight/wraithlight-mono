import { DbContext, DbSet } from "@wraithlight/core.orm";

import { CommunicationQueueDbo, ProviderDbo } from "./dbo";

export class SMSSenderDbContext extends DbContext {
  public readonly CommunicationQueue = new DbSet<CommunicationQueueDbo>(this, "CommunicationQueue");
  public readonly Providers = new DbSet<ProviderDbo>(this, "Provider");
}
