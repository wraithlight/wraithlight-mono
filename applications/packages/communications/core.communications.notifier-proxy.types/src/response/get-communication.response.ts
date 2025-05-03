import { Guid } from "@wraithlight/framework.guid";

export interface NotifierProxyCommunicationGetResponse {
  id: Guid;
  senderServiceId: Guid;
  identifier: string;
  content: string;
  tunnel: "NOTIFICATION_EMAIL" | "NOTIFICATION_SMS" | "NOTIFICATION_PUSH";
  receivedAtUtc: string;
  status: "NOTIFICATION_IN_QUEUE" | "NOTIFICATION_SENT" | "NOTIFICATION_ERROR";
  payload: EmailPayload | SmsPayload | PushPayload;
  errorCode?: string;
  sentAtUtc?: string;
}

interface EmailPayload {
  subject: string;
  senderName: string;
  senderEmailAddress: string;
  replyToEmailAddress: string;
  replyToName: string;
}

interface SmsPayload {
  applicationLink: string;
}

interface PushPayload {
  subject: string;
  logoUrl: string;
}
