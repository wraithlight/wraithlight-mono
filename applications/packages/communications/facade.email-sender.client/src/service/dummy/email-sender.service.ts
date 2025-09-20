import { newGuid } from "@wraithlight/core.guid";
import { IEmailSenderFacadeService, EmailSenderResponse } from "@wraithlight/facade.email-sender.types";
import { utcNow } from "@wraithlight/framework.date";
import { OperationResult, OperationResultFactory } from "@wraithlight/framework.operation-result";
import { GLOBAL_UNDEFINED } from "@wraithlight/kernel.undefined";

import { ONE_SEC } from "./email-sender.const";
import { DummyEmailSenderConfig } from "./email-sender.model";

export class DummyEmailSenderFacadeService
  implements IEmailSenderFacadeService<DummyEmailSenderConfig> {

  public initialize(_config: DummyEmailSenderConfig): OperationResult<void> {
    return OperationResultFactory.success(GLOBAL_UNDEFINED);
  }

  public async sendEmail(
    _recipientAddress: string,
    _senderAddress: string,
    _subject: string,
    _content: string,
    _applicationLink: string,
    _logoUrl: string
  ): Promise<OperationResult<EmailSenderResponse>> {
    const start = utcNow();
    await new Promise((resolve) => setTimeout(
      () => resolve(GLOBAL_UNDEFINED), ONE_SEC)
    );
    const received = utcNow();
    const result: EmailSenderResponse = {
      providerIdentifier: newGuid(),
      providerSentToAtUtc: start,
      providerRespondedAtUtc: received,
      providerIsSuccess: true,
      providerMessage: "Dummy provider message."
    };
    return OperationResultFactory.success(result);
  }

}
