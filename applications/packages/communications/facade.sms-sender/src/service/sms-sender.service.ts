import { OperationResult, OperationResultFactory } from "@wraithlight/framework.operation-result";

import { ERROR_CODES } from "./sms-sender.const";

export class SmsSenderFacadeService {

  public async sendSms(
    _recipientAddress: string,
    _senderAddress: string,
    _htmlContent: string
  ): Promise<OperationResult<void>> {
    return OperationResultFactory.error(ERROR_CODES.GENERAL_ERROR);
  }

}
