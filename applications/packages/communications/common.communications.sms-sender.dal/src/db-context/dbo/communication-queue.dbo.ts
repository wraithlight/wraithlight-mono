import { Guid } from "@wraithlight/core.guid";

export interface CommunicationQueueDbo {
  id: Guid;
  proxyId: Guid;
  recipientIdentifier: string;
  content: string;
  status: "NOTIFICATION_IN_QUEUE" | "NOTIFICATION_SENT" | "NOTIFICATION_ERROR"; // TODO: Consolidation between services.
  errorMessage?: string;
  receviedAtUtc: Date;
  lastUpdatedAtUtc: Date;
  sentAtUtc?: Date;
}
