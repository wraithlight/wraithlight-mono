import {
  NotifierProxyCommunicationGetResponse,
  NotifierProxyCommunicationPatchFailedRequest,
  NotifierProxyCommunicationPatchFailedResponse,
  NotifierProxyCommunicationPatchSuccessRequest,
  NotifierProxyCommunicationPatchSuccessResponse,
  NotifierProxyCommunicationPostRequest,
  NotifierProxyCommunicationPostResponse,
  NotifierProxyCommunicationsGetResponse,
} from "@wraithlight/core.communications.notifier-proxy.types";
import { IListResult } from "@wraithlight/domain.http.types";
import { dateISOSerialize } from "@wraithlight/framework.date";
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

  public async getCommunications(
    skip: number,
    take: number
  ): Promise<
    OperationResult<IListResult<NotifierProxyCommunicationsGetResponse>>
  > {
    const result = await this._client.getCommunications(skip, take);
    if (isNil(result)) {
      return OperationResultFactory.error("E_GET_LIST");
    }
    return OperationResultFactory.success(result);
  }

  public async getCommunication(
    id: Guid
  ): Promise<OperationResult<NotifierProxyCommunicationGetResponse>> {
    const result = await this._client.getCommunication(id);
    if (isNil(result)) {
      return OperationResultFactory.error("E_GET");
    }
    return OperationResultFactory.success(result);
  }

  public async sendEmail(
    clientIdentifier: string,
    contentHtml: string,
    subject: string,
    senderName: string,
    senderEmailAddress: string,
    replyToEmailAddress: string,
    replyToName: string
  ): Promise<OperationResult<NotifierProxyCommunicationPostResponse>> {
    const payload: NotifierProxyCommunicationPostRequest = {
      tunnel: "NOTIFICATION_EMAIL",
      identifier: clientIdentifier,
      content: contentHtml,
      additionalMessagePayload: {
        subject: subject,
        senderName: senderName,
        senderEmailAddress: senderEmailAddress,
        replyToEmailAddress: replyToEmailAddress,
        replyToName: replyToName
      }
    };
    return this.sendCore(payload);
  }

  public async sendPush(
    clientIdentifier: string,
    content: string,
    subject: string,
    logoUrl: string,
    applicationLink: string
  ): Promise<OperationResult<NotifierProxyCommunicationPostResponse>> {
    const payload: NotifierProxyCommunicationPostRequest = {
      tunnel: "NOTIFICATION_PUSH",
      identifier: clientIdentifier,
      content: content,
      additionalMessagePayload: {
        subject: subject,
        logoUrl: logoUrl,
        applicationLink: applicationLink
      }
    };
    return this.sendCore(payload);
  }

  public async sendSms(
    clientIdentifier: string,
    content: string
  ): Promise<OperationResult<NotifierProxyCommunicationPostResponse>> {
    const payload: NotifierProxyCommunicationPostRequest = {
      tunnel: "NOTIFICATION_SMS",
      identifier: clientIdentifier,
      content: content,
      additionalMessagePayload: {}
    };
    return this.sendCore(payload);
  }

  public async patchCommunicationSuccess(
    id: Guid,
    sentAtUtc: Date
  ): Promise<OperationResult<NotifierProxyCommunicationPatchSuccessResponse>> {
    const payload: NotifierProxyCommunicationPatchSuccessRequest = {
      sentAtUtc: dateISOSerialize(sentAtUtc)
    };
    const result = await this._client.patchCommunicationSuccess(id, payload);
    if (isNil(result)) {
      return OperationResultFactory.error("E_PATCH_SUCCESS");
    }
    return OperationResultFactory.success(result);
  }

  public async patchCommunicationFail(
    id: Guid,
    errorCode: string
  ): Promise<OperationResult<NotifierProxyCommunicationPatchFailedResponse>> {
    const payload: NotifierProxyCommunicationPatchFailedRequest = {
      errorMessage: errorCode
    };
    const result = await this._client.patchCommunicationFail(id, payload);
    if (isNil(result)) {
      return OperationResultFactory.error("E_PATCH_FAIL");
    }
    return OperationResultFactory.success(result);
  }

  private async sendCore(
    payload: NotifierProxyCommunicationPostRequest
  ): Promise<OperationResult<NotifierProxyCommunicationPostResponse>> {
    const result = await this._client.postCommuncation(payload);
    if (isNil(result)) {
      return OperationResultFactory.error("E_SEND");
    }
    return OperationResultFactory.success(result);
  }

}
