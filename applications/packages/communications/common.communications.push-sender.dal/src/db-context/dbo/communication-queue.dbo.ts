import { Guid } from "@wraithlight/core.guid";

export interface CommunicationQueueDbo {
  id: Guid;
  proxyId: Guid;
  recipientEmailAddress: string;
  subject: string;
  content: string;
  logoUrl: string;
  applicationLink: string;
  status: "NOTIFICATION_IN_QUEUE" | "NOTIFICATION_SENT" | "NOTIFICATION_ERROR"; // TODO: Consolidation between services.
  errorMessage?: string;
  receviedAtUtc: Date;
  lastUpdatedAtUtc: Date;
  sentAtUtc?: Date;
}
