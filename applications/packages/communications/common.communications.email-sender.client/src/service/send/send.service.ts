import {
  SendEmailNotificationRequest,
  SendEmailResponse
} from "@wraithlight/core.communications.email-sender.types";
import { Guid } from "@wraithlight/framework.guid";
import { isNil } from "@wraithlight/framework.nullable";
import { OperationResult, OperationResultFactory } from "@wraithlight/framework.operation-result";

import { SendClient } from "../../client";

export class SendService {

    private readonly _client: SendClient;

  constructor(
    apiToken: string
  ) {
    this._client = new SendClient(apiToken);
  }

  public async send(
    proxyId: Guid,
    deviceId: string,
    content: string,
    subject: string,
    senderName: string,
    senderEmailAddress: string,
    replyToEmailAddress: string,
    replyToName: string
  ): Promise<OperationResult<SendEmailResponse>> {
    const payload: SendEmailNotificationRequest = {
      proxyId: proxyId,
      identifier: deviceId,
      content: content,
      additionalMessagePayload: {
        subject: subject,
        senderName: senderName,
        senderEmailAddress: senderEmailAddress,
        replyToEmailAddress: replyToEmailAddress,
        replyToName: replyToName
      }
    };
    const result = await this._client.postEmail(payload);
    if (isNil(result)) {
      return OperationResultFactory.error();
    }
    return OperationResultFactory.success(result);
  }

}
