import { OperationResult } from "@wraithlight/framework.operation-result";

import { PushSenderResponse } from "./push-sender.model";

export interface IPushSenderFacadeService<T> {

  initialize(config: T): OperationResult<void>;

  sendPush(
    recipientAddress: string,
    senderAddress: string,
    subject: string,
    content: string,
    applicationLink: string,
    logoUrl: string
  ): Promise<OperationResult<PushSenderResponse>>;

}
