import { newGuid } from "@wraithlight/core.guid";
import { ISmsSenderFacadeService, SmsSenderResponse } from "@wraithlight/facade.sms-sender.types";
import { utcNow } from "@wraithlight/framework.date";
import { OperationResult, OperationResultFactory } from "@wraithlight/framework.operation-result";
import { GLOBAL_UNDEFINED } from "@wraithlight/kernel.undefined";

import { ONE_SEC } from "./sms-sender.const";
import { DummySmsSenderConfig } from "./sms-sender.model";

export class DummySmsSenderFacadeService
  // eslint-disable-next-line indent
  implements ISmsSenderFacadeService<DummySmsSenderConfig> {

  public initialize(_config: DummySmsSenderConfig): OperationResult<void> {
    return OperationResultFactory.success(GLOBAL_UNDEFINED);
  }

  public async sendSms(
    _recipientPhoneNumber: string,
    _senderPhoneNumber: string,
    _content: string
  ): Promise<OperationResult<SmsSenderResponse>> {
    const start = utcNow();
    await new Promise((resolve) => setTimeout(
      () => resolve(GLOBAL_UNDEFINED), ONE_SEC)
    );
    const received = utcNow();
    const result: SmsSenderResponse = {
      providerIdentifier: newGuid(),
      providerSentToAtUtc: start,
      providerRespondedAtUtc: received,
      providerIsSuccess: true,
      providerMessage: "Dummy provider message."
    };
    return OperationResultFactory.success(result);
  }

}
