import { SendService as EmailSendService } from "@wraithlight/common.communications.email-sender.client";
import { CommunicationDbo, NotificationQueueService } from "@wraithlight/common.communications.notifier-proxy.dal";
import { SendService as PushSendService } from "@wraithlight/common.communications.push-sender.client";
import { SendService as SMSSendService } from "@wraithlight/common.communications.sms-sender.client";
import { ServerCommsNPSConfigReader } from "@wraithlight/common.environment-static.server";
import { SendEmailNotificationAddtionalPayloadRequest } from "@wraithlight/core.communications.email-sender.types";
import {
  NotifierProxyCommunicationPatchFailedResponse,
  NotifierProxyCommunicationPatchSuccessResponse,
  NotifierProxyCommunicationPostResponse
} from "@wraithlight/core.communications.notifier-proxy.types";
import { SendPushNotificationAddtionalPayloadRequest } from "@wraithlight/core.communications.push-sender.types";
import { SendSmsNotificationAddtionalPayloadRequest } from "@wraithlight/core.communications.sms-sender.types";
import { CoreEnvironment } from "@wraithlight/core.env.sdk";
import { InternalServerError } from "@wraithlight/core.errors";
import { utcNow } from "@wraithlight/framework.date";
import { Guid, newGuid } from "@wraithlight/framework.guid";


export class CommunicationManager {

  private readonly _smsSendService: SMSSendService;
  private readonly _pushSendService: PushSendService;
  private readonly _emailSendService: EmailSendService;
  private readonly _notificationQueueService = new NotificationQueueService();
  // eslint-disable-next-line max-len
  private readonly _serverConfigReader = ServerCommsNPSConfigReader.getInstance(CoreEnvironment.getEnvironmentType());

  constructor() {
    // eslint-disable-next-line max-len
    const smsSendApiToken = this._serverConfigReader.get(m => m.apiTokens.smsSender);
    // eslint-disable-next-line max-len
    const pushSendApiToken = this._serverConfigReader.get(m => m.apiTokens.pushSender);
    // eslint-disable-next-line max-len
    const emailSendApiToken = this._serverConfigReader.get(m => m.apiTokens.emailSender);

    this._smsSendService = new SMSSendService(smsSendApiToken);
    this._pushSendService = new PushSendService(pushSendApiToken);
    this._emailSendService = new EmailSendService(emailSendApiToken);
  }

  public async sendEmail(
    recipientEmailAddress: string,
    content: string,
    additionalMessagePayload: SendEmailNotificationAddtionalPayloadRequest
  ): Promise<NotifierProxyCommunicationPostResponse> {
    const entry = await this.createEntryCore(
      recipientEmailAddress,
      content,
      "COMMS_EMAIL",
      additionalMessagePayload
    );

    const sendResult = await this._emailSendService.send(
      entry.id,
      recipientEmailAddress,
      content,
      additionalMessagePayload.subject,
      additionalMessagePayload.senderName,
      additionalMessagePayload.senderEmailAddress,
      additionalMessagePayload.replyToEmailAddress,
      additionalMessagePayload.replyToName
    );

    if (sendResult.isError) {
      throw new InternalServerError();
    }

    const response: NotifierProxyCommunicationPostResponse = {
      communicationId: entry.id
    };

    return response;
  }

  public async sendSms(
    recipientPhoneNumber: string,
    content: string,
    additionalMessagePayload: SendSmsNotificationAddtionalPayloadRequest
  ): Promise<NotifierProxyCommunicationPostResponse> {
    const entry = await this.createEntryCore(
      recipientPhoneNumber,
      content,
      "COMMS_SMS",
      additionalMessagePayload
    );

    const sendResult = await this._smsSendService.send(
      entry.id,
      recipientPhoneNumber,
      content
    );

    if (sendResult.isError) {
      throw new InternalServerError();
    }

    const response: NotifierProxyCommunicationPostResponse = {
      communicationId: entry.id
    };

    return response;
  }

  public async sendPush(
    recipientDeviceId: string,
    content: string,
    additionalMessagePayload: SendPushNotificationAddtionalPayloadRequest
  ): Promise<NotifierProxyCommunicationPostResponse> {
    const entry = await this.createEntryCore(
      recipientDeviceId,
      content,
      "COMMS_PUSH",
      additionalMessagePayload
    );

    const sendResult = await this._pushSendService.send(
      entry.id,
      recipientDeviceId,
      content,
      additionalMessagePayload.subject,
      additionalMessagePayload.logoUrl,
      additionalMessagePayload.applicationLink
    );

    if (sendResult.isError) {
      throw new InternalServerError();
    }

    const response: NotifierProxyCommunicationPostResponse = {
      communicationId: entry.id
    };

    return response;
  }

  public async updateCommunicationSuccess(
    serviceId: Guid,
    sentAtUtc: Date
  ): Promise<NotifierProxyCommunicationPatchSuccessResponse> {
    // eslint-disable-next-line max-len
    const updateResult = await this._notificationQueueService.markAsSucceedByServiceId(serviceId, sentAtUtc);

    if (updateResult.isError) {
      throw new InternalServerError();
    }

    const result: NotifierProxyCommunicationPatchSuccessResponse = {};
    return result;
  }
  public async updateCommunicationFail(
    serviceId: Guid,
    errorMessage: string
  ): Promise<NotifierProxyCommunicationPatchFailedResponse> {
    // eslint-disable-next-line max-len
    const updateResult = await this._notificationQueueService.markAsFailByServiceId(serviceId, errorMessage);

    if (updateResult.isError) {
      throw new InternalServerError();
    }

    const result: NotifierProxyCommunicationPatchFailedResponse = {};
    return result;
  }

  private async createEntryCore<T>(
    recipiientIdentifier: string,
    content: string,
    tunnel: string,
    additionalMessagePayload: T
  ): Promise<CommunicationDbo> {
    const id = newGuid();
    const now = utcNow();
    const createResult = await this._notificationQueueService.create(
      id,
      recipiientIdentifier,
      content,
      JSON.stringify(additionalMessagePayload),
      tunnel,
      now,
      now
    );

    if (createResult.isErrorTC()) {
      throw new InternalServerError();
    }

    return createResult.payload;
  }

}
