import { newGuid } from "@wraithlight/core.guid";
import { IPushSenderFacadeService, PushSenderResponse } from "@wraithlight/facade.push-sender.types";
import { utcNow } from "@wraithlight/framework.date";
import { OperationResult, OperationResultFactory } from "@wraithlight/framework.operation-result";
import { GLOBAL_UNDEFINED } from "@wraithlight/kernel.undefined";

import { ONE_SEC } from "./push-sender.const";
import { DummyPushSenderConfig } from "./push-sender.model";

export class DummyPushSenderFacadeService
  // eslint-disable-next-line indent
  implements IPushSenderFacadeService<DummyPushSenderConfig> {

  public initialize(_config: DummyPushSenderConfig): OperationResult<void> {
    return OperationResultFactory.success(GLOBAL_UNDEFINED);
  }

  public async sendPush(
    _recipientAddress: string,
    _senderAddress: string,
    _subject: string,
    _content: string,
    _applicationLink: string,
    _logoUrl: string
  ): Promise<OperationResult<PushSenderResponse>> {
    const start = utcNow();
    await new Promise((resolve) => setTimeout(
      () => resolve(GLOBAL_UNDEFINED), ONE_SEC)
    );
    const received = utcNow();
    const result: PushSenderResponse = {
      providerId: newGuid(),
      providerName: "DUMMY",
      providerSentToAtUtc: start,
      providerRespondedAtUtc: received,
      providerIsSuccess: true,
      providerMessage: "Dummy provider message."
    };
    return OperationResultFactory.success(result);
  }

}
