import { OperationResult } from "@wraithlight/framework.operation-result";

import { IEmailSenderConfig } from "../config";

import { EmailSenderResponse } from "./email-sender.model";

export interface IEmailSenderFacadeService<T extends IEmailSenderConfig> {

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
