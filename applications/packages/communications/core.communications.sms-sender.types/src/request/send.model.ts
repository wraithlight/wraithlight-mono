import { SendRequest } from "@wraithlight/core.communications.types";

export interface SendSmsNotificationAddtionalPayloadRequest {
}

export interface SendSmsNotificationRequest
  extends SendRequest<SendSmsNotificationAddtionalPayloadRequest> {
}
