import { Guid } from "@wraithlight/core.guid";

export interface CommunicationDbo {
  id: Guid;
  serviceId?: Guid;
  recipientIdentifier: string;
  content: string;
  additionalMessagePayload: string;
  status: "NOTIFICATION_IN_QUEUE" | "NOTIFICATION_SENT" | "NOTIFICATION_ERROR"; // TODO: Consolidation between services.
  errorMessage?: string;
  receivedAtUtc: Date;
  lastUpdatedAtUtc: Date;
  sentAtUtc?: Date;
}
