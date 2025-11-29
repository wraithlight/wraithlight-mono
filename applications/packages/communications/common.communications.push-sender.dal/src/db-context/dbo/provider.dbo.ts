import { Guid } from "@wraithlight/core.guid";

export interface ProviderDbo {
  id: Guid;
  label: string;
  config: string;
  lastUpdatedAtUtc?: Date;
  isActive: boolean;
}
