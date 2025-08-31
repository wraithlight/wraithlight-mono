import { OperationResultFactory, OperationResult } from "@wraithlight/framework.operation-result";

import { ERROR_CODES } from "./email-sender.const";

export class EmailSenderFacadeService {

  public async sendEmail(
    _recipientAddress: string,
    _recipientName: string,
    _senderAddress: string,
    _senderName: string,
    _replyToAddress: string,
    _replyToName: string,
    _subject: string,
    _htmlContent: string
  ): Promise<OperationResult<void>> {
    return OperationResultFactory.error(ERROR_CODES.GENERAL_ERROR);
  }

}
