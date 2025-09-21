import { NotificationQueueService } from "@wraithlight/common.communications.sms-sender.dal";
import { SendSmsResponse } from "@wraithlight/core.communications.sms-sender.types";
import { InternalServerError } from "@wraithlight/core.errors";
import { Guid, newGuid } from "@wraithlight/core.guid";
import { DummySmsSenderFacadeService } from "@wraithlight/facade.sms-sender.client";
import {
  ISMSSenderConfig,
  ISmsSenderFacadeService
} from "@wraithlight/facade.sms-sender.types";
import { utcNow } from "@wraithlight/framework.date";
import { isEmptyStringOrNil } from "@wraithlight/framework.nullable";

export class SendSMSManager {

  private readonly _smsSenderFacade: ISmsSenderFacadeService<ISMSSenderConfig>;
  private readonly _notificationQueueService = new NotificationQueueService();

  constructor() {
    this._smsSenderFacade = this.getFacadeService();
    const senderConfig = this.getSenderConfig();
    this._smsSenderFacade.initialize(senderConfig);
  }

  public async sendSms(
    proxyId: Guid,
    content: string,
    recipientIdentifier: string,
  ): Promise<SendSmsResponse> {
    const id = newGuid();
    const providerId = this.getActiveProviderId();
    const now = utcNow();
    const senderPhoneNumber = this.getSenderPhoneNumber();
    const createResult = await this._notificationQueueService.create(
      id,
      proxyId,
      content,
      recipientIdentifier,
      providerId,
      now,
      now
    );

    if (createResult.isErrorTC()) {
      throw new InternalServerError();
    }

    const sendResult = await this._smsSenderFacade.sendSms(
      recipientIdentifier,
      senderPhoneNumber,
      content
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

    const result: SendSmsResponse = {
      id: id
    };
    return result;
  }

  private getSenderPhoneNumber(): string {
    // TODO: Resolve from Provider table (config)
    return "";
  }

  private getSenderConfig(): ISMSSenderConfig {
    // TODO: Resolve from Provider table (config property)
    return {};
  }

  private getFacadeService(): ISmsSenderFacadeService<ISMSSenderConfig> {
    // TODO: Resolve by activeProviderId
    return new DummySmsSenderFacadeService();
  }

  private getActiveProviderId(): Guid {
    // TODO: DAL-level Provider management
    return newGuid();
  }

}
