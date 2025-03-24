import { SendRequest } from "@wraithlight/core.communications.types";

export interface SendEmailNotificationAddtionalPayloadRequest {
  subject: string
  senderName: string
  senderEmailAddress: string
  replyToEmailAddress: string
  replyToName: string
}

export interface SendEmailNotificationRequest
  extends SendRequest<SendEmailNotificationAddtionalPayloadRequest> {
}
