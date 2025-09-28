import { CommunicationQueueDbo, NotificationQueueService } from "@wraithlight/common.communications.email-sender.dal";
import { SendService } from "@wraithlight/common.communications.notifier-proxy.client";
import { ServerCommsESSConfigReader } from "@wraithlight/common.environment-static.server";
import { CqrsService } from "@wraithlight/core.cqrs";
import { CoreEnvironment } from "@wraithlight/core.env.sdk";
import { InternalServerError, NotFoundError } from "@wraithlight/core.errors";
import { Guid, newGuid } from "@wraithlight/core.guid";
import { DummyEmailSenderFacadeService } from "@wraithlight/facade.email-sender.client";
import { EmailSenderResponse, IEmailSenderConfig, IEmailSenderFacadeService } from "@wraithlight/facade.email-sender.types";
import { utcNow } from "@wraithlight/framework.date";
import { isEmptyStringOrNil } from "@wraithlight/framework.nullable";
import { OperationResult } from "@wraithlight/framework.operation-result";

export class CommunicationManager {

  private readonly _notificationQueueService = new NotificationQueueService();
  // eslint-disable-next-line max-len
  private readonly _emailSenderFacade: IEmailSenderFacadeService<IEmailSenderConfig>;
  // eslint-disable-next-line max-len
  private readonly _cqrsService = new CqrsService(async (item: Guid, _id: Guid) => this.processQueueEmails(item));
  // eslint-disable-next-line max-len
  private readonly _serverConfigReader = ServerCommsESSConfigReader.getInstance(CoreEnvironment.getEnvironmentType());
  private readonly _npsSendService: SendService;

  constructor() {
    // eslint-disable-next-line max-len
    const npsApiToken = this._serverConfigReader.get(m => m.apiTokens.notifierProxy);
    this._npsSendService = new SendService(npsApiToken);
    this._emailSenderFacade = this.getFacadeService();
    const senderConfig = this.getSenderConfig();
    this._emailSenderFacade.initialize(senderConfig);
  }

  public async sendEmail(
    proxyId: Guid,
    recipientEmailAddress: string,
    subject: string,
    content: string
  ): Promise<void> {
    const id = newGuid();
    const now = utcNow();
    const queueResult = await this._notificationQueueService.create(
      id,
      proxyId,
      recipientEmailAddress,
      subject,
      content,
      this.getSenderEmailAddress(),
      this.getSenderName(),
      this.getReplyToEmailAddress(),
      this.getReplyToName(),
      this.getActiveProviderId(),
      now,
      now
    );

    if (queueResult.isErrorTC()) {
      throw new InternalServerError();
    }

    this._cqrsService.addItem(queueResult.payload.id);
  }

  private async processQueueEmails(
    entryId: Guid
  ): Promise<void> {
    const entryResult = await this._notificationQueueService.getById(entryId);
    if (entryResult.isErrorTC()) {
      throw new NotFoundError();
    }
    const sendResult = await this.sendCommuncationEntry(entryResult.payload);
    if (sendResult.isErrorTC()) {
      throw new InternalServerError();
    }

    const providerIdentifier = sendResult.payload.providerIdentifier;
    if (!isEmptyStringOrNil(providerIdentifier)) {
      await this._notificationQueueService.addProvideridentifier(
        entryId,
        providerIdentifier
      );
    }

    if (sendResult.payload.providerIsSuccess) {
      await this._notificationQueueService.markAsSucceed(
        entryId,
        sendResult.payload.providerSentToAtUtc
      );
      await this._npsSendService.patchCommunicationSuccess(
        entryId,
        sendResult.payload.providerSentToAtUtc
      );
    } else {
      await this._notificationQueueService.markAsFail(
        entryId,
        sendResult.payload.providerMessage
      );
      await this._npsSendService.patchCommunicationFail(
        entryId,
        sendResult.payload.providerMessage
      );
    }
  }

  private async sendCommuncationEntry(
    entry: CommunicationQueueDbo
  ): Promise<OperationResult<EmailSenderResponse>> {
    return this._emailSenderFacade.sendEmail(
      entry.recipientEmailAddress,
      "TODO", // TODO
      entry.senderEmailAddress,
      entry.senderName,
      entry.replyToEmailAddress,
      entry.replyToName,
      entry.subject,
      entry.content
    );
  }

  private getSenderConfig(): IEmailSenderConfig {
    // TODO: Resolve from Provider table (config property)
    return {};
  }

  private getFacadeService(): IEmailSenderFacadeService<IEmailSenderConfig> {
    // TODO: Resolve by activeProviderId
    return new DummyEmailSenderFacadeService();
  }

  private getActiveProviderId(): Guid {
    // TODO: DAL-level Provider management
    return newGuid();
  }

  private getSenderName(): string {
    // TODO: DAL-level Provider management
    return "";
  }

  private getSenderEmailAddress(): string {
    // TODO: DAL-level Provider management
    return "";
  }

  private getReplyToName(): string {
    // TODO: DAL-level Provider management
    return "";
  }

  private getReplyToEmailAddress(): string {
    // TODO: DAL-level Provider management
    return "";
  }

}
