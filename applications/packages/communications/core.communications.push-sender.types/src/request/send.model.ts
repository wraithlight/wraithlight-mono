import { SendRequest } from "@wraithlight/core.communications.types";

export interface SendPushNotificationAddtionalPayloadRequest {
  subject: string;
  logoUrl: string;
}

export interface SendPushNotificationRequest
  extends SendRequest<SendPushNotificationAddtionalPayloadRequest> {
}
