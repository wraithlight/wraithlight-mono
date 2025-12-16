import { OperationResult } from "@wraithlight/framework.operation-result";

import { IPushSenderConfig } from "../config";

import { PushSenderResponse } from "./push-sender.model";

export interface IPushSenderFacadeService<T extends IPushSenderConfig> {

  initialize(config: T): OperationResult<void>;

  sendPush(
    recipientAddress: string,
    subject: string,
    content: string,
    applicationLink: string,
    logoUrl: string
  ): Promise<OperationResult<PushSenderResponse>>;

}
