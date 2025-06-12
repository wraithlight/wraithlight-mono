import {
  SendPushResponse,
  SendPushNotificationRequest
} from "@wraithlight/core.communications.push-sender.types";
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
    logoUlr: string,
    applicationLink: string
  ): Promise<OperationResult<SendPushResponse>> {
    const payload: SendPushNotificationRequest = {
      proxyId: proxyId,
      identifier: deviceId,
      content: content,
      additionalMessagePayload: {
        subject: subject,
        logoUrl: logoUlr,
        applicationLink: applicationLink
      }
    };
    const result = await this._client.postPush(payload);
    if (isNil(result)) {
      return OperationResultFactory.error();
    }
    return OperationResultFactory.success(result);
  }

}
