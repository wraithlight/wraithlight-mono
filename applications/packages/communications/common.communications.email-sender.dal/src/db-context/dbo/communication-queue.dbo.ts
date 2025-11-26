import { Guid } from "@wraithlight/core.guid";

export interface CommunicationQueueDbo {
  id: Guid;
  proxyId: Guid;
  recipientEmailAddress: string;
  subject: string;
  content: string;
  senderEmailAddress: string;
  senderName: string;
  replyToEmailAddress: string;
  replyToName: string;
  providerId: string,
  providerIdentifier?: string;
  providerSentAt?: Date;
  status: "NOTIFICATION_IN_QUEUE" | "NOTIFICATION_SENT" | "NOTIFICATION_ERROR"; // TODO: Consolidation between services.
  errorMessage?: string;
  receviedAtUtc: Date;
  lastUpdatedAtUtc: Date;
  sentAtUtc?: Date;
}
