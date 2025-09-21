import { OperationResult } from "@wraithlight/framework.operation-result";

import { ISMSSenderConfig } from "../config";

import { SmsSenderResponse } from "./sms-sender.model";

export interface ISmsSenderFacadeService<T extends ISMSSenderConfig> {

  initialize(config: T): OperationResult<void>;

  sendSms(
    recipientPhoneNumber: string,
    /**
     * @deprecated - Will be handled internally
     */
    senderPhoneNumber: string,
    content: string,
  ): Promise<OperationResult<SmsSenderResponse>>;

}
