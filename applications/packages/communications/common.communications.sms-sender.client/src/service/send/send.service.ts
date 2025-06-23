import {
  SendSmsNotificationRequest,
  SendSmsResponse
} from "@wraithlight/core.communications.sms-sender.types";
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
    phoneNumber: string,
    content: string
  ): Promise<OperationResult<SendSmsResponse>> {
    const payload: SendSmsNotificationRequest = {
      proxyId: proxyId,
      identifier: phoneNumber,
      content: content,
      additionalMessagePayload: {}
    };
    const result = await this._client.postSms(payload);
    if (isNil(result)) {
      return OperationResultFactory.error();
    }
    return OperationResultFactory.success(result);
  }

}
