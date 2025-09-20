import { OperationResult } from "@wraithlight/framework.operation-result";

import { SmsSenderResponse } from "./sms-sender.model";

export interface ISmsSenderFacadeService<T> {

  initialize(config: T): OperationResult<void>;

  sendSms(
    recipientPhoneNumber: string,
    senderPhoneNumber: string,
    content: string,
  ): Promise<OperationResult<SmsSenderResponse>>;

}
