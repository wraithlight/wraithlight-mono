import { SendRequest } from "@wraithlight/core.communications.types";

export interface SendSmsNotificationAddtionalPayloadRequest {
  applicationLink: string;
}

export interface SendSmsNotificationRequest
  extends SendRequest<SendSmsNotificationAddtionalPayloadRequest> {
}
