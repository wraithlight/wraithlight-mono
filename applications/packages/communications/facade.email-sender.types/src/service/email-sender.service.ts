import { OperationResult } from "@wraithlight/framework.operation-result";

import { EmailSenderResponse } from "./email-sender.model";

export interface IEmailSenderFacadeService<T> {

  initialize(config: T): OperationResult<void>;

  sendEmail(
    recipientAddress: string,
    recipientName: string,
    senderAddress: string,
    senderName: string,
    replyToAddress: string,
    replyToName: string,
    subject: string,
    htmlContent: string
  ): Promise<OperationResult<EmailSenderResponse>>;

}
