import { Guid } from "@wraithlight/core.guid";

export interface CommunicationQueueDbo {
  id: Guid;
  proxyId: Guid;
  recipientIdentifier: string;
  content: string;
  providerId: string;
  providerIdentifier?: string;
  providerStatus: string,
  status: "NOTIFICATION_IN_QUEUE" | "NOTIFICATION_SENT" | "NOTIFICATION_ERROR"; // TODO: Consolidation between services.
  providerSentAt?: Date;
  errorMessage?: string;
  receviedAtUtc: Date;
  lastUpdatedAtUtc: Date;
  sentAtUtc?: Date;
}
