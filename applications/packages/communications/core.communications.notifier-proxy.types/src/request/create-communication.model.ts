export interface NotifierProxyCommunicationPostRequest {
  identifier: string;
  content: string;
  tunnel: "NOTIFICATION_EMAIL" | "NOTIFICATION_SMS" | "NOTIFICATION_PUSH";
  additionalMessagePayload: EmailPayload | SmsPayload | PushPayload;
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
