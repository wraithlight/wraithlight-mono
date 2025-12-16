import { NotificationQueueService } from "@wraithlight/common.communications.push-sender.dal";
import { SendPushResponse } from "@wraithlight/core.communications.push-sender.types";
import { InternalServerError } from "@wraithlight/core.errors";
import { Guid, newGuid } from "@wraithlight/core.guid";
import { DummyPushSenderFacadeService } from "@wraithlight/facade.push-sender.client";
import {
  IPushSenderConfig,
  IPushSenderFacadeService
} from "@wraithlight/facade.push-sender.types";
import { utcNow } from "@wraithlight/framework.date";
import { isEmptyStringOrNil } from "@wraithlight/framework.nullable";

export class SendPushManager {

  // eslint-disable-next-line max-len
  private readonly _pushSenderFacade: IPushSenderFacadeService<IPushSenderConfig>;
  private readonly _notificationQueueService = new NotificationQueueService();

  constructor() {
    this._pushSenderFacade = this.getFacadeService();
    const senderConfig = this.getSenderConfig();
    this._pushSenderFacade.initialize(senderConfig);
  }

  public async sendSms(
    proxyId: Guid,
    subject: string,
    content: string,
    recipientIdentifier: string,
  ): Promise<SendPushResponse> {
    const id = newGuid();
    const providerId = this.getActiveProviderId();
    const now = utcNow();
    const applicationLink = this.getApplicationLink();
    const logoUrl = this.getLogoUrl();
    const createResult = await this._notificationQueueService.create(
      id,
      proxyId,
      recipientIdentifier,
      subject,
      content,
      applicationLink,
      logoUrl,
      providerId,
      now,
      now
    );

    if (createResult.isErrorTC()) {
      throw new InternalServerError();
    }

    const sendResult = await this._pushSenderFacade.sendPush(
      recipientIdentifier,
      subject,
      content,
      applicationLink,
      logoUrl
    );

    if (sendResult.isErrorTC()) {
      throw new InternalServerError();
    }

    const providerIdentifier = sendResult.payload.providerIdentifier;
    if (!isEmptyStringOrNil(providerIdentifier)) {
      const updateResult = await this._notificationQueueService
        .addProviderIdentifier(
          id,
          providerIdentifier
        )
      ;

      if (updateResult.isErrorTC()) {
        throw new InternalServerError();
      }
    }

    const result: SendPushResponse = {
      id: id
    };
    return result;
  }

  private getApplicationLink(): string {
    // TODO: Resolve from Provider table (config)
    return "";
  }
  private getLogoUrl(): string {
    // TODO: Resolve from Provider table (config)
    return "";
  }

  private getSenderConfig(): IPushSenderConfig {
    // TODO: Resolve from Provider table (config property)
    return {};
  }

  private getFacadeService(): IPushSenderFacadeService<IPushSenderConfig> {
    // TODO: Resolve by activeProviderId
    return new DummyPushSenderFacadeService();
  }

  private getActiveProviderId(): Guid {
    // TODO: DAL-level Provider management
    return newGuid();
  }

}
