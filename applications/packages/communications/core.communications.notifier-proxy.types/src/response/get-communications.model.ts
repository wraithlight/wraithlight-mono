import { Guid } from "@wraithlight/framework.guid";

export interface NotifierProxyCommunicationsGetResponse {
  id: Guid;
  senderServiceId: Guid;
  identifier: string;
  content: string;
  tunnel: "NOTIFICATION_EMAIL" | "NOTIFICATION_SMS" | "NOTIFICATION_PUSH";
  receivedAtUtc: string;
  status: "NOTIFICATION_IN_QUEUE" | "NOTIFICATION_SENT" | "NOTIFICATION_ERROR";
}
