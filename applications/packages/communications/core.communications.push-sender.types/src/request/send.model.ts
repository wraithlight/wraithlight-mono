import { SendRequest } from "@wraithlight/core.communications.types";

export interface SendPushNotificationAddtionalPayloadRequest {
  subject: string;
  logoUrl: string;
  applicationLink: string;
}

export interface SendPushNotificationRequest
  extends SendRequest<SendPushNotificationAddtionalPayloadRequest> {
}
